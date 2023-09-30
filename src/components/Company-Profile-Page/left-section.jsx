import { Link } from "react-router-dom";

const LeftSection = () => {
  return (
    <>
      {/* <!-- left section --> */}
      <div className="min-w-[20.55vw] h-fit bg-white rounded-xl">
        <Link href="profileLihat.html">
          <div className="flex p-5 items-center bg-graybg border-l-4 border-bluetext rounded-t-xl">
            <div>
              <img
                className="hidden xl:block xl:w-16 xl:h-auto p-1 border border-grayborder rounded-full "
                src="img/fotoProfilPerusahaan.png"
                alt="fotoProfilPerusahaan"
              />
            </div>
            <div className="px-5">
              <h2 className="text-xl text-bluetext">PT. Kelompok Empat</h2>
              <p className="text-graytext text-xs">Lihat profil perusahaan</p>
            </div>
          </div>
        </Link>
        <Link href="profileCompany.html">
          <div className="p-5 text-graytext text-sm hover:bg-graybg">
            <h3>Company Size</h3>
          </div>
        </Link>
        <Link href="profileIndustry.html">
          <div className="p-5 text-graytext text-sm hover:bg-graybg">
            <h3>Industry</h3>
          </div>
        </Link>
        <Link href="profileLocation.html">
          <div className="p-5 text-graytext text-sm hover:bg-graybg">
            <h3>Specific Location</h3>
          </div>
        </Link>
        <Link href="profileVacancy.html">
          <div className="p-5 text-graytext text-sm hover:bg-graybg">
            <h3>Vacancy</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default LeftSection;
