import { Link } from "react-router-dom";

const NavigationCompany = () => {
  return (
    <div className="bg-blue-900">
      <ul className="p-5 container mx-auto text-gray-400 space-x-6">
        <Link className="nav-link">Berpartner dengan kami</Link>
        <Link className="nav-link">Law of Atrraction</Link>
        <Link className="nav-link">Produk & Layanan</Link>
        <Link className="nav-link">Hubungi Kami</Link>
      </ul>
    </div>
  );
};

export default NavigationCompany;
