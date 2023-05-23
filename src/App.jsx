import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Book from "./pages/Book";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./contexts/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const { isAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            </ProtectedRoute>
          ),
        },
        {
          path: "/register",
          element: isAuth ? <Navigate to="/" replace /> : <Register />,
        },
        {
          path: "/login",
          element: isAuth ? <Navigate to="/" replace /> : <Login />,
        },
        {
          path: "/:id",
          element: (
            <ErrorBoundary>
              <Book />
            </ErrorBoundary>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
