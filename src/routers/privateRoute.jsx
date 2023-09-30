import auth from "../utils/auth";
import { Outlet } from "react-router-dom";
import NotFound from "../pages/404NotFound";

const PrivateRoute = () => {
  if (auth.isAuthenticated()) return <Outlet />;
  return (
    <div>
      <NotFound />
    </div>
  );
};

export default PrivateRoute;
