import { Link } from "react-router-dom";

const NavbarJobList = () => {
  return (
    <header className="bg-white">
      <div className="flex justify-between items-center p-5 container mx-auto">
        <div className="flex items-center gap-5">
          <Link
            to="/home-kandidat"
            className="text-3xl font-extrabold  text-blue-900"
          >
            JobStreet
          </Link>
          <Link
            to=""
            className="py-2 text-textGray border-white border-b-2 hover:border-gray-300"
          >
            Cari Lowongan
          </Link>
          <Link
            to=""
            className="py-2 text-textGray border-white border-b-2 hover:border-gray-300"
          >
            MyJobStreet
          </Link>
          <Link
            to=""
            className="py-2 text-textGray border-white border-b-2 hover:border-gray-300"
          >
            Profil perusahaan
          </Link>
          <Link
            to=""
            className="py-2 text-textGray border-white border-b-2 hover:border-gray-300"
          >
            Tips karier
          </Link>
        </div>
        <div className="space-x-6 flex items-center">
          <Link
            to="/"
            className="border-2 border-blue-900 px-4 py-2 rounded-lg text-blue-900 font-semibold"
          >
            Untuk Perusahaan
          </Link>
          <Link
            to="/login"
            className="px-5 py-2 bg-blue-900 text-slate-50 font-semibold rounded-lg"
          >
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarJobList;
