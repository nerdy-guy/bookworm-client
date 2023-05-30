import { useState } from "react";
import BookCard from "../components/BookCard";
import BookForm from "../components/BookForm";
import Stats from "./Stats";
import { RiBook2Fill } from "react-icons/ri";
import Loader from "../components/Loader";
import { useQuery } from "@tanstack/react-query";
import NotFound from "./NotFound";
import { NODE_ENV } from "../utils/configs";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const res = await fetch(
        NODE_ENV === "production"
          ? "https://18061997.xyz/api/books"
          : "http://localhost:4000/api/books",
        {
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch books.");
      }

      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { isLoading, error } = useQuery(["books"], getBooks, {
    onSuccess: (data) => setBooks(data),
  });

  if (isLoading) return <Loader />;

  if (error) return <NotFound />;

  return (
    <main className="min-h-screen bg-[#fbf1c7] text-center dark:bg-[#282828]">
      <button
        className="mt-8 rounded border-none bg-[#709c13] p-2 px-12 text-[#f9f5d7] opacity-80 ring-inset duration-700 hover:opacity-100 focus:outline-none focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#83a598] dark:bg-[#517d13] dark:text-[#ebdbb2]"
        onClick={handleModal}
      >
        <span className="flex items-center gap-2">
          <RiBook2Fill /> Add a book
        </span>
      </button>

      {showModal && <BookForm closeModal={closeModal} setBooks={setBooks} />}

      {books.length > 0 && <Stats books={books} />}

      <div className="mx-auto mt-8 grid grid-cols-1 justify-items-center gap-8 last-of-type:pb-16 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {books?.map((book) => (
          <BookCard key={book?.book_id} {...book} setBooks={setBooks} />
        ))}
      </div>
    </main>
  );
};

export default Home;
