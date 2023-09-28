import { Link } from "react-router-dom";

const Rekomendasi = () => {
  return (
    <div className="flex justify-center pt-5">
      <div className="py-5 w-[1500px] flex flex-col gap-5">
        {/* text */}
        <p className="font-bold">Direkomendasikan berdasarkan preferensimu</p>
        {/* daftar */}
        <div className="bg-white mx-2 rounded-md flex items-center">
          <div className="p-4">
            <img src="/img/ic-pencil.svg" alt="pencil" />
          </div>
          <div>
            <Link to="" className="text-blue-500 font-bold hover:underline">
              Daftar
            </Link>{" "}
            <span>
              sekarang untuk menemukan lowongan yang dipilih hanya untukmu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekomendasi;
