import NavigationCompany from "./NavigationCompany";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import auth from "../../../utils/auth";

const NavCompany = () => {
  const links = useNavigate();

  return (
    <nav className="shadow-md fixed w-full z-[1] bg-white">
      <div className="flex justify-between items-center p-5 container mx-auto">
        <div className="">
          <Link to="/" className="text-5xl font-bold text-blue-900">
            JobStreet
          </Link>
        </div>
        {auth.isAuthenticated ? (
          <div>
            <Button>
              <Button.Default navigate={() => links("/home-kandidat")} />
              <Button.register navigate={() => links("/register")} />
              <Button.login navigate={() => links("/login")} />
            </Button>
          </div>
        ) : (
          <Button>
            <Button.logout navigate={() => auth.logout(links("/login"))} />
          </Button>
        )}
      </div>
      <NavigationCompany />
    </nav>
  );
};

export default NavCompany;
