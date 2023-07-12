import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.username) {
    return <Navigate to="/" />;
  }

  return children;
};
