import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";
import auth from "../../utils/auth";
import NavAuth from "../../components/Navbar/NavabarAuth/NavAuth";
import Footer from "../../components/Footer/Footer";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(async (res) => {
      if (res.status === 400)
        return alert("your username or password is wrong");
      const { token } = await res.json();
      auth.userAuthCredentials(token);
      return navigate("/");
    });
  };

  return (
    <>
      <NavAuth to="/" />
      <div className="flex pb-40 justify-center items-center font-montserrat bg-[#E5E5E5]">
        <div>
          <div className="question text-center p-[50px] text-[14px] leading-[17.07px]">
            <p>
              Apakah anda mencari pekerjaan?
              <Link className="text-[#0061B9]" href="#">
                {" "}
                Klik di sini.
              </Link>
            </p>
          </div>
          <div className="flex mx-auto justify-evenly my-[10px] bg-white w-[1000px] h-[412px] top-[197px] left-[220px] pt-[45px] rounded-[15px]">
            <div className="w-[365px] h-[342px] top-[227px] left-[280px] pt-[25px]">
              <h3 className="text-[25px] font-[600] leading-[30.48px]">
                Peringatan keamanan
              </h3>
              <div className="text-[12px] pt-[15px] font-[400] text-[#666666] leading-[14.63px]">
                <div className="pb-[15px] mt-[10px] ml-[25px]">
                  <p>
                    Selalu pastikan Anda berada di{" "}
                    <span className="font-semibold">situs resmi</span>{" "}
                    <Link className="text-[#0575B3]" href="#">
                      (www.jobstreet.co.id/id/cms/employer)
                    </Link>
                    dan situs telah aman dan terjamin sebelum proses log in.
                  </p>
                </div>
                <div className="pb-[15px] mt-[10px] ml-[25px]">
                  <p>
                    Mohon menjaga keamanan detil login SiVA Anda dan{" "}
                    <span className="font-semibold">tidak merespon</span>{" "}
                    permintaan login dari website dan pihak- pihak scam yang
                    mencurigakan.
                  </p>
                </div>
                <div className="pb-[15px] mt-[10px] ml-[25px]">
                  <p>
                    JobStreet.com <span className="font-semibold">tidak</span>{" "}
                    akan pernah meminta detail login Anda.
                  </p>
                </div>
              </div>
              <div className="text-[12px] font-[500] pt-[20px] leading-[14.63px]">
                <p>
                  Jika Anda menemukan hal-hal yang mencurigakan atau Anda merasa
                  ragu, harap segera menghubungi kami.
                </p>
              </div>
            </div>
            <div className="w-0 h-[340px] border" />
            <div className="w-[365px] h-[342px] top-[227px] left-[280px] pt-[25px]">
              <h3 className="text-[30px] font-[300] leading-[36.57px]">
                Login Perusahaan
              </h3>
              <div className="pt-[15px]">
                <LoginForm handleOnCLick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
