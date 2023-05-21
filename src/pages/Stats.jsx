import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Stats = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="pl-8 pt-4 text-left text-[#282828] dark:text-[#ebdbb2]">
      <p>
        <span className="font-bold">Books Read: </span>
        {books.length}
      </p>
      <p>
        <span className="font-bold">Pages Read: </span>
        {books
          .map((book) => book.pages)
          .reduce((accu, value) => accu + value, 0)}
      </p>
    </div>
  );
};

export default Stats;
