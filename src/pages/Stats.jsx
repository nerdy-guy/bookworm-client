const Stats = ({ books }) => {
  return (
    <div className="mx-auto max-w-[90%] pt-4 text-left text-[#282828]  dark:text-[#ebdbb2]">
      <p>
        <span className="font-bold">Books Read: </span>
        {books?.length}
      </p>

      <p>
        <span className="font-bold">Pages Read: </span>
        {books?.length > 0 &&
          books
            ?.map((book) => book.pages)
            ?.reduce((accu, value) => accu + value)}
      </p>
    </div>
  );
};

export default Stats;
