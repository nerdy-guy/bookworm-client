import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useToggle from "../hooks/useToggle";
import { useState } from "react";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be between 2 and 128 characters" })
    .max(128, { message: "Name must be between 2 and 128 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be between 8 and 255 characters" })
    .max(255, { message: "Password must be between 8 and 255 characters" }),
});

const Register = () => {
  const [isVisible, toggleVisibility] = useToggle();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleRegister = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const json = await res.json();

      if (res.status === 409) {
        return setErrorMessage(json.error);
      }

      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#fbf1c7] text-[#282828] dark:bg-[#282828] dark:text-[#ebdbb2]">
      <div className="flex w-full flex-col items-center">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="mx-auto flex w-[90%] flex-col gap-4 rounded bg-[#f9f5d7] p-8 dark:bg-[#1d2021] md:w-[30rem] md:p-16"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              {...register("name")}
              className="rounded border-none bg-gray-50 p-2 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
          </div>
          <p className="text-[#cc241d]">{errors.name?.message}</p>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
              className="rounded border-none bg-gray-50 p-2 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
          </div>
          <p className="text-[#cc241d]">{errors.email?.message}</p>

          <div className="relative flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type={isVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              {...register("password")}
              className="rounded border-none bg-gray-50 p-2 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:outline-none  focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
            <button
              className="absolute bottom-3 right-2 hover:cursor-pointer"
              onClick={toggleVisibility}
              type="button"
            >
              {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
          <p className="text-[#cc241d]">{errors.password?.message}</p>

          <p className="text-[#cc241d]">{errorMessage}</p>

          <button
            type="submit"
            className="mt-8 rounded border-none bg-[#076678] py-2 text-[#ebdbb2] opacity-80  ring-inset duration-700 hover:opacity-100 focus:outline-none focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#83a598] dark:bg-[#458588] dark:text-[#ebdbb2]"
          >
            Register
          </button>
        </form>

        <p className="mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="rounded p-1 outline-none hover:text-[#458588] hover:underline focus:border-transparent focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:hover:text-[#83a598]"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
