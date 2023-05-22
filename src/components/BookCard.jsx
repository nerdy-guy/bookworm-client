import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import bookCover from "../assets/book-cover-placeholder.png";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import EditBookModal from "./EditBookModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const BookCard = ({
  book_id,
  title,
  image_url,
  author,
  pages,
  endDate,
  review,
  notes,
  setBooks,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditModal = () => setShowEditModal(true);

  const closeEditModal = () => setShowEditModal(false);

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
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <div className="relative flex w-80 justify-between gap-4 rounded  border-2 border-l-0 bg-[#f9f5d7] text-left text-[#282828] dark:bg-[#1d2021] dark:text-[#ebdbb2]">
      <Link to={`/${book_id}`}>
        <img src={image_url || bookCover} alt="" className="h-40 w-56" />
      </Link>

      <div className="relative flex flex-col gap-1 pr-8 pt-2">
        <p className="w-full">{title}</p>
        <small>{author}</small>
        <p>{pages}</p>
        <time className="absolute bottom-2 right-2">{endDate}</time>
      </div>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="px-3 py-2">
            <BsThreeDotsVertical className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 dark:text-white">
            <div className="py-1">
              <Menu.Item>
                {() => (
                  <Link
                    to={`/${book_id}`}
                    className={classNames(
                      "flex items-center gap-2 px-4 py-4 hover:bg-gray-200 dark:hover:bg-gray-600"
                    )}
                  >
                    <IoEyeOutline />
                    View
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <button
                    href="#2"
                    className={classNames(
                      "flex w-full items-center gap-2 px-4 py-4 hover:bg-gray-200 dark:hover:bg-gray-600"
                    )}
                    onClick={handleEditModal}
                  >
                    <BiEdit />
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item onClick={() => deleteBook(book_id)}>
                {() => (
                  <button
                    href="#3"
                    className={classNames(
                      "flex w-full items-center gap-2 px-4 py-4 hover:bg-gray-200 dark:hover:bg-gray-600"
                    )}
                  >
                    <AiOutlineDelete />
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {showEditModal && (
        <EditBookModal
          closeEditModal={closeEditModal}
          setBooks={setBooks}
          book_id={book_id}
          title={title}
          author={author}
          image_url={image_url}
          pages={pages}
          review={review}
          notes={notes}
          endDate={endDate}
        />
      )}
    </div>
  );
};

export default BookCard;
