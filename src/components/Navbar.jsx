import { useContext, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
import { ThemeContext } from "../contexts/ThemeContext";
import logo from "../assets/worm.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showNav, setShowNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const navItems = [
    {
      id: 1,
      title: "Currently Reading",
      path: "currentlyreading",
    },
    {
      id: 2,
      title: "To Read",
      path: "toread",
    },
    {
      id: 3,
      title: "Read",
      path: "read",
    },
    {
      id: 4,
      title: "Stats",
      path: "stats",
    },
  ];

  const toggleNav = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };

  // eslint-disable-next-line no-unused-vars
  const templog = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <nav className="w-full bg-[#f9f5d7] text-[#282828] dark:bg-[#1d2021] dark:text-[#ebdbb2]">
      <div className="mx-auto flex max-w-[90%] items-center justify-between py-4">
        <Link to="/" className="flex gap-1">
          <img src={logo} alt="" className="h-auto w-4" />
          <h1>Bookwrom</h1>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex flex-row gap-8">
            {loggedIn &&
              navItems.map((navItem) => (
                <li key={navItem.id}>
                  <NavLink to={navItem.path}>{navItem.title}</NavLink>
                </li>
              ))}
          </ul>
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <BsFillMoonFill className="h-6 w-6" title="Switch to dark mode" />
            ) : (
              <BsFillSunFill className="h-6 w-6" title="Switch to light mode" />
            )}
          </button>
          {loggedIn ? (
            <button>Sign out</button>
          ) : (
            <>
              <Link to="/signin">Sign in</Link>{" "}
              <Link
                to="signup"
                className="rounded-sm border-[1px] border-[#282828] bg-transparent px-2 py-1 duration-700 hover:border-transparent hover:bg-[#83a598] hover:text-[#fbf1c7] dark:border-[#fbf1c7] dark:hover:border-transparent dark:hover:bg-[#458588]"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navbar */}
        <div className="flex gap-4 md:hidden">
          <div>
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <BsFillMoonFill
                  className="h-6 w-6"
                  title="Switch to dark mode"
                />
              ) : (
                <BsFillSunFill
                  className="h-6 w-6"
                  title="Switch to light mode"
                />
              )}
            </button>
          </div>

          <div className="">
            <button onClick={toggleNav}>
              {showNav ? (
                <HiXMark className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>

            {showNav ? (
              <ul className="absolute right-0 z-50 mt-4 flex w-full flex-col items-center gap-8 p-8 opacity-80 dark:bg-[#1d2021]">
                {loggedIn &&
                  navItems.map((navItem) => (
                    <li key={navItem.id}>
                      <NavLink to={navItem.path}>{navItem.title}</NavLink>
                    </li>
                  ))}

                {loggedIn ? (
                  <button>Sign out</button>
                ) : (
                  <>
                    <button>Sign in</button> <button>Sign up</button>
                  </>
                )}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
