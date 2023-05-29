import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { createPortal } from "react-dom";
import { NODE_ENV } from "../utils/configs";

const BookForm = ({ closeModal, setBooks }) => {
  const { theme } = useContext(ThemeContext);

  const bookSchema = z.object({
    title: z
      .string()
      .nonempty({ message: "Title is required" })
      .max(255, { message: "Title must be less than 255 characters" }),
    author: z
      .string()
      .nonempty({ message: "Author is required" })
      .max(255, { message: "Author must be less than 255 characters" }),
    image_url: z.any(),
    pages: z.number({
      required_error: "Pages is required",
      invalid_type_error: "Pages is required",
    }),
    endDate: z.string().optional(),
    review: z.string().optional(),
    notes: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(bookSchema) });

  const addBook = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("pages", data.pages);
    formData.append("end_date", data.endDate);
    formData.append("notes", data.notes);
    formData.append("review", data.review);
    formData.append("image_url", data.image_url && data.image_url[0]);

    try {
      const res = await fetch(
        NODE_ENV === "production"
          ? "https://18061997.xyz/api/books"
          : "http://localhost:3000/api/books",
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      const newBook = await res.json();

      setBooks((prevBooks) => [...prevBooks, newBook]);
      closeModal();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return createPortal(
    <div className={theme === "dark" ? "dark" : "light"}>
      <form
        className="fixed inset-0 z-40 m-4 mx-auto flex w-[90%] flex-col rounded bg-[#f9f5d7] p-4 text-left text-[#282828] dark:bg-[#1d2021] dark:text-[#ebdbb2] md:w-[50%] md:gap-1 md:p-8"
        onSubmit={handleSubmit(addBook)}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register("title")}
          placeholder="Book Title"
          className="rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
        <p className="text-[#cc241d]">{errors?.title?.message}</p>

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          placeholder="Author"
          {...register("author")}
          className="rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
        <p className="text-[#cc241d]">{errors?.author?.message}</p>

        <label htmlFor="image_url">Book Cover</label>
        <input type="file" name="image_url" {...register("image_url")} />

        <label htmlFor="pages">Pages</label>
        <input
          type="number"
          id="pages"
          placeholder="Number of pages"
          {...register("pages", { valueAsNumber: true })}
          className="rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
        <p className="text-[#cc241d]">{errors?.pages?.message}</p>

        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          {...register("endDate")}
          className="rounded border-none bg-gray-50 p-1 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <label htmlFor="review">Review</label>
        <textarea
          id="review"
          rows="5"
          {...register("review")}
          className="rounded border-none bg-gray-50 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          rows="5"
          {...register("notes")}
          className="rounded border-none bg-gray-50 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />

        <div className="mt-auto self-end pt-4">
          <button className="mr-8" onClick={closeModal} type="button">
            Cancel
          </button>
          <button
            className="bg-[#709c13] px-4 py-1 text-[#f9f5d7] dark:bg-[#517d13] dark:text-[#ebdbb2]"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("modal")
  );
};

export default BookForm;
