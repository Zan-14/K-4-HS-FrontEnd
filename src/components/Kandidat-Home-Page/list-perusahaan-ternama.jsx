import { Link } from "react-router-dom";

const PerusahaanTernama = () => {
  return (
    <div>
      {/* perusahaan ternama */}
      <div className="flex justify-center pt-10">
        <div className="py-5 max-w-[1500px] flex flex-col gap-5">
          <p className="font-bold">Perusahaan Ternama</p>
          <div className="flex gap-5">
            {/* logo perusahaan */}
            <div className="bg-white mx-2 rounded-md flex items-center px-16">
              <div className="flex flex-col gap-16">
                {/* line 1 */}
                <div className="flex gap-24">
                  <div className="w-36">
                    <Link to="">
                      <img
                        src="/img/Siloam-Hospitals.png"
                        alt="siloam-hospitals"
                      />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/fin-accel.png" alt="fin-accel" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/AXA-mandiri.png" alt="AXA-mandiri" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/bks.png" alt="bks" />
                    </Link>
                  </div>
                </div>
                {/* line 2 */}
                <div className="flex gap-24">
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/bank-sinarmas.png" alt="bank-sinarmas" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/M.png" alt="M" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/kredit-plus.png" alt="kredit-plus" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/OT.png" alt="OT" />
                    </Link>
                  </div>
                </div>
                {/* line 3 */}
                <div className="flex gap-24">
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/Shopee.png" alt="Shopee" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/J&T-cargo.png" alt="J&T-cargo" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/galva.png" alt="galva" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/erajaya.png" alt="erajaya" />
                    </Link>
                  </div>
                </div>
                {/* line 4 */}
                <div className="flex gap-24">
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/galva.png" alt="galva" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/Home-Credit.png" alt="Home-Credit" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/BOGA.png" alt="BOGA" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img
                        src="/img/OTO-Kredit-Mobil.png"
                        alt="OTO-Kredit-Mobil"
                      />
                    </Link>
                  </div>
                </div>
                {/* line 5 */}
                <div className="flex gap-24">
                  <div className="w-36">
                    <Link to="">
                      <img
                        src="/img/sinarmas-agribusiness.png"
                        alt="sinarmas-agribusiness"
                      />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/AIA.png" alt="AIA" />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img
                        src="/img/altius-hospitals.png"
                        alt="altius-hospitals"
                      />
                    </Link>
                  </div>
                  <div className="w-36">
                    <Link to="">
                      <img src="/img/APP-sinarmas.png" alt="APP-sinarmas" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* right ads */}
            <div className="w-fit">
              <div>
                <Link to="">
                  <img src="/img/Ruang-HRD.png" alt="ads-hrd" />
                </Link>
              </div>
              <div className="mt-5">
                <Link to="">
                  <img src="/img/JobStreet-ads.png" alt="ads-jobs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom ad */}
      <div className="flex justify-center my-20">
        <div className="w-3/6 h-40 flex justify-center items-center bg-white">
          <h1 className="font-bold text-2xl">Bottom Ads</h1>
        </div>
      </div>
    </div>
  );
};

export default PerusahaanTernama;
