import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const BookCard = ({ id, title, cover, author }) => {
  return (
    <div className="relative flex w-80 justify-between gap-4 rounded  border-2 border-l-0 bg-[#f9f5d7] text-left text-[#282828] dark:bg-[#1d2021] dark:text-[#ebdbb2]">
      <Link to={`/${id}`}>
        <img src={cover} alt="" className="h-auto w-48" />
      </Link>

      <div className="relative flex flex-col gap-1 pr-8 pt-2">
        <p className="w-full">{title}</p>
        <small>{author}</small>
        <p>5/214</p>
        <p>5%</p>
        <time className="absolute bottom-2 right-2">
          {new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
        </time>
      </div>

      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        className="absolute right-2 top-4"
        type="button"
      >
        <BsThreeDotsVertical aria-hidden="true" className="h-6 w-6" />
      </button>

      <div
        id="dropdownDots"
        className="z-10 hidden rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      >
        <ul
          className="bg-[#fbf1c7] py-2 text-sm dark:bg-[#282828]"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li className="hover:bg-gray-100 dark:hover:bg-[#1d2021]">
            <button className="flex items-center gap-2 px-4 py-2">
              <IoEyeOutline /> View
            </button>
          </li>
          <li className="hover:bg-gray-100 dark:hover:bg-[#1d2021]">
            <button className="flex items-center gap-2 px-4 py-2">
              <BiEdit /> Edit
            </button>
          </li>
          <li className="hover:bg-gray-100 dark:hover:bg-[#1d2021]">
            <button className="flex items-center gap-2 px-4 py-2">
              <AiOutlineDelete />
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookCard;
