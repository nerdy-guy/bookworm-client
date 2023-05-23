import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import NotFound from "./NotFound";

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
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const { title, author, image_url, pages, end_date, review, notes } = book;

  if (isLoading) return <Loader />;

  if (isError) return <NotFound />;

  return (
    <div className="min-h-screen w-full bg-[#fbf1c7] text-[#282828] dark:bg-[#282828] dark:text-[#ebdbb2]">
      <div className="mx-auto flex max-w-[90%] flex-col gap-8 py-4 pt-8">
        <img
          src={`http://localhost:3000/public/${
            image_url || "book-cover-placeholder.png"
          }`}
          alt={title}
          className="h-auto w-52"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            {title}{" "}
            {end_date && end_date !== "undefined" && (
              <span className="text-xl font-normal">({end_date})</span>
            )}
          </h1>
          <h3 className="text-xl font-thin">{author}</h3>

          {pages && <p>{pages} Pages</p>}
        </div>
        <div className="max-w-5xl">
          {review && (
            <pre className="whitespace-pre-wrap break-words">
              <span className="font-semibold">Review: </span>
              {review}
            </pre>
          )}
          {notes && (
            <pre className="mt-12 whitespace-pre-wrap break-words border-t-2 border-dashed border-[#ebdbb2] pt-12">
              <span className="font-semibold">Notes: </span>
              {notes}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
