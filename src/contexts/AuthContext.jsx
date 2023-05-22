import { createContext, useEffect, useState } from "react";
import Loader from "../components/Loader";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (data, setErrorMessage, reset) => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const json = await res.json();

      if (res.ok) {
        getUser();
      }

      if (res.status === 401) {
        setErrorMessage(json.error);
        reset({ password: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth", {
        credentials: "include",
      });

      const { accessToken } = await res.json();

      if (accessToken) {
        setIsAuth(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ login, isAuth, setIsLoading, setIsAuth }}>
      {isLoading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
