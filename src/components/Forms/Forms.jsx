import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
import InputForm from "./InputForm";

const Forms = () => {
  return (
    <div className="p-5 px-20">
      <p className="text-blue-900 font-bold text-xl">
        Daftarkan Perusahaanmu Di Sini
      </p>
      <InputForm isTitle="Email Login ID" isType="email" />
      <InputForm isTitle="Nama" isType="text" />
      <InputForm isTitle="Nomor HP" isType="text" />
      <InputForm
        isTitle="Nama Bisnis Terdaftar"
        isType="text"
        isPlaceholder="Sama seperti dokumen pendirian perusahaan "
      />
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <label className="font-semibold">Kata Sandi</label>
          <button>
            <BsFillEyeFill className="mr-2" />
          </button>
        </div>
        <input type="passwords" className="h-10 border w-full rounded-lg" />
      </div>
      <button className="w-full h-10 mt-5 bg-pink-600 rounded-lg font-semibold text-white">
        Daftar
      </button>
      <p className="text-gray-400 max-w-3xl py-5">
        Dengan melanjutkan, Anda telah menyutujui
        <Link className="text-sky-500"> Kebijakan Privasi</Link> dan{" "}
        <Link className="text-sky-500">
          Syarat &amp; Ketentuan dari Jobstreet.
        </Link>
      </p>
    </div>
  );
};

export default Forms;
