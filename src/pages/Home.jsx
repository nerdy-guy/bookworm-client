import { useState } from "react";
import BookCard from "../components/BookCard";
// import BookModal from "../components/BookModal";
import { RiBook2Fill } from "react-icons/ri";
import BookModal from "../components/BookModal";

const Home = () => {
  const books = [
    {
      id: 1, // database
      title: "You don't know js", // user required max 255
      cover: "/you-don't-know-js.jpg", // user max 10mb
      author: "Kyle Simpson", // user max 255
      beginDate: new Date().getDay(), // user default now
      endDate: new Date().getDay(), // user default now
      pages: 500, // user
      notes: "study javascript", // user
      review: "amazing book that goes beyond basic javascript", // user
    },
    {
      id: 2, // database
      title: "You don't know js", // user required max 255
      cover: "/you-don't-know-js.jpg", // user max 10mb
      author: "Kyle Simpson", // user max 255
      beginDate: new Date().getDay(), // user default now
      endDate: new Date().getDay(), // user default now
      pages: 500, // user
      notes: "study javascript", // user
      review: "amazing book that goes beyond basic javascript", // user
    },
    {
      id: 3, // database auto
      title: "You don't know js", // user required max 255
      cover: "/you-don't-know-js.jpg", // user max 10mb
      author: "Kyle Simpson", // user max 255
      beginDate: new Date().getDay(), // user default now
      endDate: new Date().getDay(), // user default now
      pages: 500, // user
      notes: "study javascript", // user
      review: "amazing book that goes beyond basic javascript", // user
    },
  ];

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

      <div className="mx-auto mt-8 grid grid-cols-1 justify-items-center gap-8 last-of-type:pb-16 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>

      {showModal && <BookModal closeModal={closeModal} />}
    </main>
  );
};

export default Home;
