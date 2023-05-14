import { useContext } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const BookModal = ({ closeModal }) => {
  const { theme } = useContext(ThemeContext);

  return createPortal(
    <div className={theme === "dark" ? "dark" : "light"}>
      <form className="fixed inset-0 z-40 m-4 mx-auto flex w-[90%] flex-col rounded bg-[#f9f5d7] p-4 text-left text-[#282828] dark:bg-[#1d2021] dark:text-[#ebdbb2] md:w-[50%] md:p-8">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Book Title"
          className="rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <label htmlFor="cover">Book Cover</label>
        <input type="file" />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          placeholder="Author"
          className="rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <label htmlFor="pages">Pages</label>
        <input
          type="number"
          id="pages"
          placeholder="Number of pages"
          className="rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          className="rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          className="rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          rows="5"
          className="rounded border-none bg-gray-50 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <label htmlFor="review">Review</label>
        <textarea
          id="review"
          rows="5"
          className="rounded border-none bg-gray-50 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <div className="mt-8 self-end">
          <button className="mr-4" onClick={closeModal}>
            Cancel
          </button>
          <button className="bg-[#709c13] px-4 py-1 text-[#f9f5d7] dark:bg-[#517d13] dark:text-[#ebdbb2]">
            Save
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("modal")
  );
};

export default BookModal;
