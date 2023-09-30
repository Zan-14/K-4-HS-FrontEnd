import { Link } from "react-router-dom";
import Forms from "../../components/Forms/Forms";
import NavAuth from "../../components/Navbar/NavabarAuth/NavAuth";
import Footer from "../../components/Footer/Footer";

const RegisterPages = () => {
  return (
    <>
      <NavAuth to="/" />
      <div className="py-10 flex flex-col px-5 min-h-screen justify-center items-center bg-[#E5E5E5]">
        <p className="mb-5">
          Apakah anda mencari pekerjaan?
          <Link className="text-blue-500"> Klik di sini.</Link>
        </p>
        <form className="bg-white rounded-xl shadow-md">
          <div>
            <img
              src="img/img-register.png"
              alt=""
              className="w-full rounded-t-xl"
            />
          </div>
          <Forms />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPages;
