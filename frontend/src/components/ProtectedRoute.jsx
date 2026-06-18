import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  // Get token from local storage
  const token = localStorage.getItem("token");

  // If token exists, show page
  // Otherwise redirect to login

  return token
    ? children
    : <Navigate to="/login" />;

}

export default ProtectedRoute;