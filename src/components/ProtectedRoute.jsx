import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user?.user_id) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
