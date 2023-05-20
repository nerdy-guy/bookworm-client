import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Stats = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="min-h-screen bg-[#fbf1c7] pt-32 text-center text-[#282828] dark:bg-[#282828] dark:text-[#ebdbb2]">
      <p>Books Read: {books.length}</p>
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
