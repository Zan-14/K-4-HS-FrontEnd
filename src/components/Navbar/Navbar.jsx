import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="shadow-md fixed w-full z-[1] bg-white">
      <div className="flex justify-between items-center p-5 container mx-auto">
        <div className="">
          <Link className="text-5xl font-bold text-blue-900">JobStreet</Link>
        </div>
        <div className="space-x-6 flex items-center">
          <Link
            to=""
            className="border-2 border-blue-900 px-3 py-2 rounded-lg text-blue-900 font-semibold"
          >
            Untuk Kandidat
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 bg-pink-600 text-slate-50 font-semibold rounded-lg"
          >
            Daftar
          </Link>
          <Link
            to=""
            className="px-5 py-2 bg-blue-900 text-slate-50 font-semibold rounded-lg"
          >
            Masuk
          </Link>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

const Navigation = () => {
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

export default Navbar;
