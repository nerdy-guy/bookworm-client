import { useForm } from "react-hook-form";

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addBook = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("pages", data.pages);
    formData.append("start_date", data.startDate);
    formData.append("end_date", data.endDate);
    formData.append("notes", data.notes);
    formData.append("review", data.review);
    formData.append("image_url", data.image_url[0]);

    console.log(data);

    try {
      await fetch("http://localhost:3000/api/books", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(addBook)} className="pt-12">
      <label
        htmlFor="my-modal-4"
        className="mt-16 rounded border-none bg-[#709c13] p-2 px-12 text-[#f9f5d7] opacity-80 ring-inset duration-700 hover:opacity-100 focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#83a598] dark:bg-[#517d13] dark:text-[#ebdbb2]"
      >
        Add Book
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <div className="modal-box relative z-50 rounded bg-[#f9f5d7] text-left text-[#282828] dark:bg-[#1d2021] dark:text-[#ebdbb2]">
          <div className="px-6 py-6 lg:px-8">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  title
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title")}
                  placeholder="Book Title"
                  className="block w-full rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>
              <p>{errors?.title}</p>

              <div>
                <label
                  htmlFor="author"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  author
                </label>
                <input
                  type="text"
                  id="author"
                  placeholder="Author"
                  {...register("author")}
                  className="block w-full rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="image_url"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  book cover
                </label>
                <input
                  type="file"
                  name="image_url"
                  {...register("image_url")}
                  className="block w-full rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="pages"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  pages
                </label>
                <input
                  type="number"
                  id="pages"
                  placeholder="Number of pages"
                  {...register("pages")}
                  className="block w-full rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="startDate"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  start date
                </label>
                <input
                  type="date"
                  id="startDate"
                  {...register("startDate")}
                  className="block w-full rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  end date
                </label>
                <input
                  type="date"
                  id="endDate"
                  {...register("endDate")}
                  className="block w-full rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  notes
                </label>
                <textarea
                  id="notes"
                  rows="5"
                  {...register("notes")}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="review"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  review
                </label>
                <textarea
                  id="review"
                  rows="5"
                  {...register("review")}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#709c13] px-5 py-2.5 text-center text-sm font-medium text-white opacity-80 hover:opacity-100 focus:outline-none focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#83a598] dark:bg-[#517d13]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </label>
    </form>
  );
};

export default BookForm;
