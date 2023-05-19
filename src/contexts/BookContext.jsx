import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import Loader from "../components/Loader";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const { isLoading, error } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:3000/api/books", {
          credentials: "include",
        });

        return res.json();
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess: (data) => setBooks(data),
  });

  const deleteBook = async (book_id) => {
    try {
      await fetch(`http://localhost:3000/api/books/${book_id}`, {
        method: "DELETE",
        credentials: "include",
      });

      setBooks((prevBooks) =>
        prevBooks.filter((book) => book.book_id !== book_id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <Loader />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <BookContext.Provider value={{ books, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
