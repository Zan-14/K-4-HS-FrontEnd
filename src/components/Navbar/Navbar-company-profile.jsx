import { Link } from "react-router-dom";

const NavbarCompanyProfile = () => {
  return (
    <header className="shadow-md w-full z-[1] bg-white">
      <div className="flex justify-between items-center p-5 container mx-auto">
        <div className="">
          <Link to="/" className="text-5xl font-bold text-blue-900">
            JobStreet
          </Link>
        </div>
        <div className="space-x-6 flex items-center">
          <Link to="/home-kandidat">
            <button className="border-2 border-blue-900 px-3 py-2 rounded-lg text-blue-900 font-semibold hover:bg-blue-900 hover:text-white">
              Untuk Kandidat
            </button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="inline-block">
              <img
                className="h-8 w-8"
                src="img/fotoProfilPerusahaan.png"
                alt="Foto Profil Perusahaan"
              />
            </div>
            <div className="inline-block">
              <p className="font-inter text-xs text-graytext">
                PT. Kelompok Empat
              </p>
            </div>
          </div>
          <Link to="/login">
            <button className="px-5 py-2 bg-blue-900 text-slate-50 font-semibold rounded-lg hover:bg-blue-700">
              Logout
            </button>
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
        <Link className="hover:text-white">Berpartner dengan kami</Link>
        <Link className="hover:text-white">Law of Atrraction</Link>
        <Link className="hover:text-white">Produk & Layanan</Link>
        <Link className="hover:text-white">Hubungi Kami</Link>
      </ul>
    </div>
  );
};

export default NavbarCompanyProfile;
