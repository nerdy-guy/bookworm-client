import { useContext, useState } from "react";
import BookCard from "../components/BookCard";
import BookForm from "../components/BookForm";
import { BookContext } from "../contexts/BookContext";
import Stats from "./Stats";
import { RiBook2Fill } from "react-icons/ri";

const Home = () => {
  const { books } = useContext(BookContext);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

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

      {showModal && <BookForm closeModal={closeModal} />}
      <Stats />

      <div className="mx-auto mt-8 grid grid-cols-1 justify-items-center gap-8 last-of-type:pb-16 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {books.length > 0 &&
          books?.map((book) => <BookCard key={book?.book_id} {...book} />)}
      </div>
    </main>
  );
};

export default Home;
