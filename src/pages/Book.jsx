import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import bookCover from "../assets/book-cover-placeholder.png";
import Loader from "../components/Loader";

const Book = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const { isLoading, isError } = useQuery(["book", id], () => getBook(id), {
    onSuccess: (data) => setBook(data),
  });

  const getBook = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/books/${id}`, {
        credentials: "include",
      });

      if (!res.ok) {
        throw Error("Can't fetch data");
      }

      return res.json();
    } catch (error) {
      console.error(error);
    }
  };

  const {
    title,
    author,
    image_url,
    pages,
    start_date,
    end_date,
    review,
    notes,
  } = book;

  if (isLoading) return <Loader />;

  if (isError) return "An error has occurred: " + isError.message;

  return (
    <div className="min-h-screen bg-[#fbf1c7] text-[#282828] dark:bg-[#282828] dark:text-[#ebdbb2]">
      <img src={image_url || bookCover} alt={title} className="h-auto w-16" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <pre className="whitespace-pre-wrap break-words">{review}</pre>
      <pre className="whitespace-pre-wrap  break-words">{notes}</pre>
      <p>{pages}</p>
      <time className="block">{start_date}</time>
      <time>{end_date}</time>
    </div>
  );
};

export default Book;
