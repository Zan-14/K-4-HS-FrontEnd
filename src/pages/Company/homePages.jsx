import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <section className="pt-28 font-montserrat">
        <div className="w-[80%] m-auto min-h-[200px]">
          <section className="flex p-[5em] items-center justify-between">
            <div className="w-[40%] mr-[5em]">
              <h1 className="text-[45px] text-[#e60278]">
                Rekrut orang yang Anda butuhkan, mudah dan cepat
              </h1>
              <p className="text-[20px] mt-[1em] font-semibold text-[#e60278]">
                Daftar sekarang dan pasang iklan lowongan pekerjaan anda GRATIS
              </p>
              <Link
                className="mt-[2em] w-[287px] h-[47px] bg-[#e60278] no-underline text-[#fff] text-[1.2rem] rounde-sm flex justify-center items-center font-bold"
                href="#"
              >
                Pasang Iklan Sekarang
              </Link>
            </div>
            <div className="image">
              <img
                className="w-[670px] h-[575px]"
                src="/img/img-hero.png"
                alt=""
              />
            </div>
          </section>
          <section className="perusahaan">
            <div className="text-[1.5rem] text-center m-[50px]">
              <h3>Dipercaya oleh UKM dan perusahaan selama 20+ tahun</h3>
            </div>
            <div className="flex bt-[100px]">
              <div className="w-[100]">
                <img src="/img/Perusahaan-1.png" alt="" />
              </div>
              <div className="w-[100]">
                <img src="/img/Perusahaan-2.png" alt="" />
              </div>
              <div className="w-[100]">
                <img src="/img/Perusahaan-3.png" alt="" />
              </div>
              <div className="w-[100]">
                <img src="/img/Perusahaan-4.png" alt="" />
              </div>
              <div className="w-[100]">
                <img src="/img/Perusahaan-5.png" alt="" />
              </div>
              <div className="w-[100]">
                <img src="/img/Perusahaan-6.png" alt="" />
              </div>
              <div className="w-[100]">
                <img src="/img/Perusahaan-7.png" alt="" />
              </div>
            </div>
          </section>
          <section className="alasan">
            <div className="text-[1.5rem] text-center m-[50px]">
              <h3>Mengapa memilih JobStreet</h3>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-center text-center w-[30%] mb-[100px]">
                <img className="w-[10em]" src="/img/icon-1.png" alt="" />
                <div>
                  <h4 className="text-[1.3rem] mt-5 mb-2.5">
                    Kami adalah pilihan pertama <br />
                    para pencari kerja
                  </h4>
                  <p>Akses 13,8+ juta kandidat di Indonesia</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center w-[30%] mb-[100px]">
                <img className="w-[10em]" src="/img/icon-2.png" alt="" />
                <h4 className="text-[1.3rem] mt-5 mb-2.5">
                  Kami dapat dipercaya
                </h4>
                <p>Dipercaya 1+ juta perusahaan di Asia</p>
              </div>
              <div className="flex flex-col items-center text-center w-[30%] mb-[100px]">
                <img className="w-[10em]" src="/img/icon-3.png" alt="" />
                <h4 className="text-[1.3rem] mt-5 mb-2.5">
                  Kami mendukung anda
                </h4>
                <p>
                  Account manajer kami selalu siap <br />
                  membantu Anda
                </p>
              </div>
            </div>
          </section>
          <section className="catatan">
            <h3 className="text-[0.9rem] text-center text-[#757575]">
              *Berdasarkan survey kandidat 2020 oleh Lembaga riset pihak ketiga
              dan data internal JobStreet
            </h3>
          </section>
        </div>
        {/* Rekrut */}
        <div className="bg-[#e5e5e5]">
          <div>
            <h1 className="pt-[50px] text-[#2d3648] text-center text-3xl font-bold p-[30px]">
              Rekrut Mudah dalam 3 Langkah Sederhana
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img
                className="bg-slate-50"
                width="564px"
                height="483px"
                src="/img/Rectangle 21.png"
                alt="rectangle"
              />
            </div>
            <div className="w-[584px] h-[483px] flex justify-center">
              <div className="p-[11px]">
                <div className="pt-5 pb-16">
                  <img
                    width="56px"
                    height="56px"
                    src="/img/point1.png"
                    alt=""
                    className="angka1"
                  />
                </div>
                <div className="pt-5 pb-16">
                  <img
                    width="56px"
                    height="56px"
                    src="/img/point2.png"
                    alt=""
                    className="angka2"
                  />
                </div>
                <div className="pt-5 pb-16">
                  <img
                    width="56px"
                    height="56px"
                    src="/img/point3.png"
                    alt=""
                    className="angka3"
                  />
                </div>
              </div>
              <div className="p-[11px] text-[#545B6A]">
                <div className="pt-[14px] pb-16">
                  <h3 className="text-lg font-bold">
                    Daftar untuk akun gratis Anda
                  </h3>
                  <p className="text-sm">
                    Cukup daftar online dan buat iklan lowongan pekerjaan Anda
                  </p>
                </div>
                <div className="pt-5 pb-16">
                  <h3 className="text-lg font-bold">
                    Posting iklan pekerjaan Anda
                  </h3>
                  <p className="text-sm">
                    Gunakan paket Lite Ad GRATIS Anda atau pilih paket jenis
                    iklan kami yang lain
                  </p>
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-bold">Mulailah merekrut</h3>
                  <p className="text-sm">
                    Kelola semua pelamar dengan platform kami yang mudah
                    digunakan
                  </p>
                </div>
                <div>
                  <Link
                    href="#"
                    className="px-[30px] py-2 text-base font-bold text-[#4964e9] inline-block border-[3px] border-[#4964e9] rounded-lg"
                  >
                    <p>Pasang Iklan Sekarang</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video */}
        <div className="flex justify-center items-center">
          <iframe
            className="w-[1200px] h-[641px] mt-[50px] rounded-2xl"
            src="https:/www.youtube.com/embed/UlaA6jhrd-0"
            title="YouTube 
      video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
        </div>
        {/* Pelanggan */}
        <div className="p-10 text-center">
          <h2 className="pt-[50px] text-[#2d3648] text-center text-[22px] font-bold p-[30px]">
            Yang Pelanggan katakan tentang kami
          </h2>
          <div className="flex justify-center items-center">
            <div className="m-auto">
              <div className="absolute">
                <img
                  width={275}
                  height={241}
                  src="/img/pelanggan1.png"
                  alt="pelanggan1"
                />
              </div>
              <div className="relative w-[248px] h-[163px] top-[10px] left-[10px]">
                <p className="text-[11px] font-semibold text-[#1D559D] h-[106px]">
                  “Dengan menggunakan JobStreet, mencari kandidat untuk calon
                  guru dan staf di sekolah kami menjadi lebih mudah.”
                </p>
                <p className="text-[11px] text-right font-normal text-[#1D559D]">
                  Frisca Friscilia Arnita,
                  <br />
                  Primary Teacher at Yayasan Pendidikan dan Pelatihan Pelita
                  Global
                </p>
              </div>
            </div>
            <div className="m-auto">
              <div className="absolute">
                <img
                  width={275}
                  height={241}
                  src="/img/pelanggan2.png"
                  alt="pelanggan2"
                />
              </div>
              <div className="relative w-[248px] h-[163px] top-[10px] left-[10px]">
                <p className="text-[11px] font-semibold text-[#E60278] h-[106px]">
                  “JobStreet memudahkan pencarian kandidat, menghemat waktu dan
                  juga user friendly.”
                </p>
                <p className="text-[11px] text-right font-normal text-[#E60278]">
                  Sartono,
                  <br />
                  Head of HR at PT Inasentra Unisatya
                </p>
              </div>
            </div>
            <div className="m-auto">
              <div className="absolute">
                <img
                  width={275}
                  height={241}
                  src="/img/pelanggan1.png"
                  alt="pelanggan1"
                />
              </div>
              <div className="relative w-[248px] h-[163px] top-[10px] left-[10px]">
                <p className="text-[11px] font-semibold text-[#1D559D] h-[106px]">
                  “JobStreet sangat membantu kami dalam percepatan pengembangan
                  bisnis dalam hal pemenuhan karyawan.”
                </p>
                <p className="text-[11px] text-right font-normal text-[#1D559D]">
                  Rio Jonas,
                  <br />
                  HRGA Manajer at Kurniawan Group
                </p>
              </div>
            </div>
            <div className="m-auto">
              <div className="absolute">
                <img
                  width={275}
                  height={241}
                  src="/img/pelanggan1.png"
                  alt="pelanggan1"
                />
              </div>
              <div className="relative w-[248px] h-[163px] top-[10px] left-[10px]">
                <p className="text-[11px] font-semibold text-[#E60278] h-[106px]">
                  “JobStreet merupakan salah satu pioneer jasa penyedia talent
                  search yang memudahkan proses pemilihan kandidat dengen
                  mengerucutkan kesesuaian kebutuhan.”
                </p>
                <p className="text-[11px] text-right font-normal text-[#1D559D]">
                  Niko Arise,
                  <br />
                  Recruitment Coordinator at Bukaka
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Iklan */}
        <div className="relative mt-20">
          <img className="min-w-full" src="/img/iklan.png" alt="iklan" />
          <div className="absolute top-[26vh] left-[40.5vw]">
            <h1 className="text-[#2D3648] text-4xl font-extrabold ">
              Iklan loker GRATIS Anda menunggu!
            </h1>
            <p className="pt-2.5 pb-5 text-[#2D3648] text-base font-bold">
              Dapatkan paket Lite Ad Gratis untuk pendaftaran pertama kali,
              tanpa <br />
              komitmen
            </p>
            <Link
              href="#"
              className="px-[30px] py-2 text-base font-bold text-[#2D3648] inline-block border-[3px] border-[#2D3648] rounded-lg"
            >
              Pasang Iklan Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
