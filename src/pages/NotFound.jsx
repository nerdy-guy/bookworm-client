import { Link } from "react-router-dom";
import notFound from "../assets/404.svg";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-4 bg-[#fbf1c7] text-2xl text-[#282828] dark:bg-[#282828] dark:text-[#ebdbb2] md:text-3xl">
      <img src={notFound} alt="404 not found" className="w-96" />
      <h1 className="text-center">
        Oops!
        <span className="block text-[#cc241d]">Error 404 - Page Not Found</span>
      </h1>
      <Link
        to="/"
        className="rounded p-1 underline outline-none hover:text-[#458588] focus:border-transparent focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-[#458588] dark:hover:text-[#83a598]"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
