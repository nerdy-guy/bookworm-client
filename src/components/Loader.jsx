import { useContext } from "react";
import { CgSpinner } from "react-icons/cg";
import { ThemeContext } from "../contexts/ThemeContext";

const Loader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <div className="flex min-h-screen items-center justify-center bg-[#fbf1c7] dark:bg-[#282828]">
        <div role="status">
          <CgSpinner
            aria-hidden="true"
            className="mr-2 inline h-12 w-12 animate-spin text-[#458588]"
          />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
