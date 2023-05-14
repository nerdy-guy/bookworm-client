import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Book from "./pages/Book";
import Layout from "./components/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/:page_id",
          element: <Book />,
        },
      ],
    },
  ]);

  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
