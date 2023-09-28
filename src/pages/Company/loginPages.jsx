import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen justify-center items-center font-montserrat bg-[#E5E5E5]">
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
                <form action="">
                  <div className="w-[365px] h-[57px] top-[324px] left-[795px] mt-[10px]">
                    <label
                      htmlFor=""
                      className="text-[12px] font-[300] text-[#666666] leading-[14.63px]"
                    >
                      Login ID Perusahaan
                    </label>
                    <br />
                    <input
                      className="w-[365px] h-[35px] bg-[#EEEEEE] text-[14px] rounded-[5px] pl-[10px] font-[500] border-none outline-none leading-[17.07px]"
                      type="text"
                      placeholder="Login ID"
                    />
                  </div>
                  <div className="w-[365px] h-[57px] top-[324px] left-[795px] mt-[10px]">
                    <label
                      htmlFor=""
                      className="text-[12px] font-[300] text-[#666666] leading-[14.63px]"
                    >
                      Kata sandi
                    </label>
                    <br />
                    <input
                      className="w-[365px] h-[35px] bg-[#EEEEEE] text-[14px] rounded-[5px] pl-[10px] font-[500] border-none outline-none leading-[17.07px]"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="pt-[10px] text-[12px] font-[400] text-[#0575B3] text-right">
                    <Link href="#">Lupa kata sandi ?</Link>
                  </div>
                  <div>
                    <button
                      className="w-[365px] h-[35px] bg-[#E60278] text-[#fff] rounded-[5px] p-[8px] text-[15px] mt-[30px] font-[600] border-none outline-none cursor-pointer leading-[18.29px]"
                      type="submit"
                    >
                      Masuk
                    </button>
                  </div>
                </form>
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
