import { Navigate, Outlet } from "react-router-dom";
import auth from "../utils/auth";

const ProtectedRoute = () => {
  if (!auth.isAuthenticated()) return <Outlet />;
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
