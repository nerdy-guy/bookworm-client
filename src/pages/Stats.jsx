import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const Stats = () => {
  // const [books, setBooks] = useState([]);
  // const { isLoading, error } = useQuery({
  //   queryKey: ["books"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:3000/api/books", {
  //       credentials: "include",
  //     });

  //     return res.json();
  //   },
  //   onSuccess: (data) => setBooks(data),
  // });

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  const { books } = useContext(BookContext);

  return (
    <div className="min-h-screen bg-[#fbf1c7] pt-32 text-center dark:bg-[#282828]">
      <p>Book Read: {books.length}</p>
      <p>
        Pages Read:{" "}
        {books
          .map((book) => book.pages)
          .reduce((accu, value) => accu + value, 0)}
      </p>
    </div>
  );
};

export default Stats;
