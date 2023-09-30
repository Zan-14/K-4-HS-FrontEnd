import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import NavCompany from "../components/Navbar/NavbarCompany/NavCompany";

const LayoutCompany = () => {
  return (
    <>
      <header>
        <NavCompany />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LayoutCompany;
