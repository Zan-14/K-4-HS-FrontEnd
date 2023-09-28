import { Link } from "react-router-dom";
import Forms from "../../components/Forms/Forms";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const RegisterPages = () => {
  return (
    <>
      <Navbar />
      <div className="py-52 flex flex-col min-h-screen justify-center items-center bg-[#E5E5E5]">
        <p className="mb-5">
          Apakah anda mencari pekerjaan?
          <Link className="text-blue-500"> Klik di sini.</Link>
        </p>
        <form className="bg-white rounded-xl shadow-md">
          <div>
            <img
              src="images/img-register.png"
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
