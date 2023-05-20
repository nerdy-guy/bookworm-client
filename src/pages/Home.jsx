import { useContext } from "react";
import BookCard from "../components/BookCard";
import BookForm from "../components/BookForm";
import { BookContext } from "../contexts/BookContext";

const Home = () => {
  const { books } = useContext(BookContext);

  console.log(books);

  return (
    <main className="min-h-screen bg-[#fbf1c7] text-center dark:bg-[#282828]">
      <BookForm />

      <div className="mx-auto mt-8 grid grid-cols-1 justify-items-center gap-8 last-of-type:pb-16 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {books &&
          books?.map((book) => <BookCard key={book?.book_id} {...book} />)}
      </div>
    </main>
  );
};

export default Home;
