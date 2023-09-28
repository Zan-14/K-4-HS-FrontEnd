import { useState } from "react";
import { Link } from "react-router-dom";

const FooterKandidat = () => {
  // Unduh Aplikasi dropdown button
  const [hideUnduhAplikasi, setHideUnduhAplikasi] = useState(true);
  // Mitra International dropdown button
  const [hideMitra, setHideMitra] = useState(true);
  // Media Sosial dropdown button
  const [hideMedia, setHideMedia] = useState(true);

  // Functions
  const handleClickUnduh = () => {
    {
      hideUnduhAplikasi
        ? setHideUnduhAplikasi(false)
        : setHideUnduhAplikasi(true);
    }
  };

  const handleClickMitra = () => {
    {
      hideMitra ? setHideMitra(false) : setHideMitra(true);
    }
  };

  const handleClickMedia = () => {
    {
      hideMedia ? setHideMedia(false) : setHideMedia(true);
    }
  };

  return (
    <footer className="bg-white text-slate-600">
      <div className="flex py-5 container mx-auto max-w-[1440px]">
        <div className="flex flex-cols-4 gap-4 md:py-8 container justify-around">
          {/* Pencari Kerja */}
          <div>
            <h2 className="text-lg text-black mb-2 font-bold">Pencari Kerja</h2>
            <ul className="space-y-2">
              <li>
                <Link to="index" className="hover:text-black hover:underline">
                  Panduan mencari kerja secara aman
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Sumber daya karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Bantuan Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Eksplorasi karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Eksplorasi gaji
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Testimoni
                </a>
              </li>
              {/* Unduh Aplikasi Dropdown */}
              {hideUnduhAplikasi ? (
                <li>
                  <button
                    onClick={() => handleClickUnduh()}
                    className="flex items-center gap-2 hover:text-black hover:underline"
                  >
                    Unduh Aplikasi{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="10"
                        viewBox="0 0 10 5"
                        fill="none"
                      >
                        <path
                          d="M9.36643 0L10 0.4925L5 5L0 0.4925L0.633571 0L5 3.93625L9.36643 0Z"
                          fill="#828282"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              ) : (
                <li>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleClickUnduh()}
                      className="flex items-center gap-2 hover:text-black hover:underline"
                    >
                      Unduh Aplikasi{" "}
                      <span className="rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="10"
                          viewBox="0 0 10 5"
                          fill="none"
                        >
                          <path
                            d="M9.36643 0L10 0.4925L5 5L0 0.4925L0.633571 0L5 3.93625L9.36643 0Z"
                            fill="#828282"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="flex flex-col gap-2">
                      <Link>
                        <button className="flex gap-3 pl-3 hover:text-black items-center hover:underline">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 16 19"
                              fill="none"
                            >
                              <path
                                d="M13.0502 17.28C12.0702 18.23 11.0002 18.08 9.97016 17.63C8.88016 17.17 7.88016 17.15 6.73016 17.63C5.29016 18.25 4.53016 18.07 3.67016 17.28C-1.20984 12.25 -0.489836 4.59 5.05016 4.31C6.40016 4.38 7.34016 5.05 8.13016 5.11C9.31016 4.87 10.4402 4.18 11.7002 4.27C13.2102 4.39 14.3502 4.99 15.1002 6.07C11.9802 7.94 12.7202 12.05 15.5802 13.2C15.0102 14.7 14.2702 16.19 13.0402 17.29L13.0502 17.28ZM8.03016 4.25C7.88016 2.02 9.69016 0.18 11.7702 0C12.0602 2.58 9.43016 4.5 8.03016 4.25Z"
                                fill="#5A6881"
                              />
                            </svg>
                          </span>
                          JobStreet @ App Store
                        </button>
                      </Link>
                      <Link>
                        <button className="flex gap-3 pl-3 hover:text-black items-center hover:underline">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="10"
                              viewBox="0 0 22 13"
                              fill="none"
                            >
                              <path
                                d="M0 12.6281C0.15 10.8448 0.696 9.20312 1.638 7.70312C2.58 6.20312 3.834 5.01146 5.4 4.12813L3.55 0.928125C3.45 0.778125 3.425 0.619791 3.475 0.453125C3.525 0.286458 3.63333 0.161458 3.8 0.0781248C3.93333 -0.00520853 4.08333 -0.0218749 4.25 0.0281251C4.41667 0.0781251 4.55 0.178125 4.65 0.328125L6.5 3.52812C7.93333 2.92812 9.43333 2.62812 11 2.62812C12.5667 2.62812 14.0667 2.92812 15.5 3.52812L17.35 0.328125C17.45 0.178125 17.5833 0.0781251 17.75 0.0281251C17.9167 -0.0218749 18.0667 -0.00520853 18.2 0.0781248C18.3667 0.161458 18.475 0.286458 18.525 0.453125C18.575 0.619791 18.55 0.778125 18.45 0.928125L16.6 4.12813C18.1667 5.01146 19.4207 6.20312 20.362 7.70312C21.3033 9.20312 21.8493 10.8448 22 12.6281H0ZM6 9.87813C6.35 9.87813 6.646 9.75713 6.888 9.51513C7.13 9.27313 7.25067 8.97746 7.25 8.62813C7.25 8.27813 7.129 7.98213 6.887 7.74013C6.645 7.49813 6.34933 7.37746 6 7.37813C5.65 7.37813 5.354 7.49913 5.112 7.74113C4.87 7.98313 4.74933 8.27879 4.75 8.62813C4.75 8.97813 4.871 9.27412 5.113 9.51612C5.355 9.75812 5.65067 9.87879 6 9.87813ZM16 9.87813C16.35 9.87813 16.646 9.75713 16.888 9.51513C17.13 9.27313 17.2507 8.97746 17.25 8.62813C17.25 8.27813 17.129 7.98213 16.887 7.74013C16.645 7.49813 16.3493 7.37746 16 7.37813C15.65 7.37813 15.354 7.49913 15.112 7.74113C14.87 7.98313 14.7493 8.27879 14.75 8.62813C14.75 8.97813 14.871 9.27412 15.113 9.51612C15.355 9.75812 15.6507 9.87879 16 9.87813Z"
                                fill="#5A6881"
                              />
                            </svg>
                          </span>
                          JobStreet @ Google Play
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
          {/* Perusahaan */}
          <div>
            <h2 className="text-lg text-black mb-2 font-bold">Perusahaan</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Pasang iklan lowongan kerja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Talent search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Beriklan dengan kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Profil perusahaan
                </a>
              </li>
            </ul>
          </div>
          {/* Tentang JobStreet */}
          <div>
            <h2 className="text-lg text-black mb-2 font-bold">
              Tentang JobStreet
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Berkarier JobStreet
                </a>
              </li>
              {/* Mitra Dropdown */}
              {hideMitra ? (
                <li>
                  <button
                    onClick={() => handleClickMitra()}
                    className="flex items-center gap-2 hover:text-black hover:underline"
                  >
                    Mitra International{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="10"
                        viewBox="0 0 10 5"
                        fill="none"
                      >
                        <path
                          d="M9.36643 0L10 0.4925L5 5L0 0.4925L0.633571 0L5 3.93625L9.36643 0Z"
                          fill="#828282"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              ) : (
                <li>
                  <div>
                    <button
                      onClick={() => handleClickMitra()}
                      className="flex items-center gap-2 hover:text-black hover:underline mb-2"
                    >
                      Mitra International{" "}
                      <span className="rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="10"
                          viewBox="0 0 10 5"
                          fill="none"
                        >
                          <path
                            d="M9.36643 0L10 0.4925L5 5L0 0.4925L0.633571 0L5 3.93625L9.36643 0Z"
                            fill="#828282"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul className="space-y-2 pl-2">
                      {/* Dropdown List */}
                      <li>
                        <Link>
                          <button className=" hover:text-black hover:underline">
                            Bdjobs (Bangladesh)
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <button className=" hover:text-black hover:underline">
                            Catho (Brazil)
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <button className=" hover:text-black hover:underline">
                            JobsDB (SE Asia)
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <button className=" hover:text-black hover:underline">
                            Jora (Hong Kong)
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <button className=" hover:text-black hover:underline">
                            OCC Mundial (Mexico)
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <button className=" hover:text-black hover:underline">
                            Seaman Jobsite (Philippines)
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <button className=" hover:text-black hover:underline">
                            SEEK (Australia)
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <button className=" hover:text-black hover:underline">
                            Work Abroad (Philippines)
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>
          </div>
          {/* Kontak */}
          <div>
            <h2 className="text-lg text-black mb-2 font-bold">Kontak</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black hover:underline">
                  Kirim saran
                </a>
              </li>
              {/* Media sosial Dropdown */}
              {hideMedia ? (
                <li>
                  <button
                    onClick={() => handleClickMedia()}
                    className="flex items-center gap-2 hover:text-black hover:underline"
                  >
                    Media sosial{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="10"
                        viewBox="0 0 10 5"
                        fill="none"
                      >
                        <path
                          d="M9.36643 0L10 0.4925L5 5L0 0.4925L0.633571 0L5 3.93625L9.36643 0Z"
                          fill="#828282"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              ) : (
                <li>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleClickMedia()}
                      className="flex items-center gap-2 hover:text-black hover:underline"
                    >
                      Media sosial{" "}
                      <span className="rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="10"
                          viewBox="0 0 10 5"
                          fill="none"
                        >
                          <path
                            d="M9.36643 0L10 0.4925L5 5L0 0.4925L0.633571 0L5 3.93625L9.36643 0Z"
                            fill="#828282"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="flex flex-col gap-2">
                      <Link>
                        <button className="flex gap-2 pl-3 hover:text-black items-center hover:underline">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M11.6668 11.2498H13.7502L14.5835 7.9165H11.6668V6.24984C11.6668 5.3915 11.6668 4.58317 13.3335 4.58317H14.5835V1.78317C14.3118 1.74734 13.286 1.6665 12.2027 1.6665C9.94016 1.6665 8.3335 3.04734 8.3335 5.58317V7.9165H5.8335V11.2498H8.3335V18.3332H11.6668V11.2498Z"
                                fill="#5A6881"
                              />
                            </svg>
                          </span>
                          Facebook
                        </button>
                      </Link>
                      <Link>
                        <button className="flex gap-2 pl-3 hover:text-black items-center hover:underline">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M18.7165 5.00016C18.0749 5.29183 17.3832 5.4835 16.6665 5.57516C17.3999 5.1335 17.9665 4.4335 18.2332 3.59183C17.5415 4.0085 16.7749 4.30016 15.9665 4.46683C15.3082 3.75016 14.3832 3.3335 13.3332 3.3335C11.3749 3.3335 9.77487 4.9335 9.77487 6.9085C9.77487 7.19183 9.8082 7.46683 9.86654 7.72516C6.89987 7.57516 4.2582 6.15016 2.49987 3.99183C2.19154 4.51683 2.01654 5.1335 2.01654 5.7835C2.01654 7.02516 2.64154 8.12516 3.6082 8.75016C3.01654 8.75016 2.46654 8.5835 1.9832 8.3335V8.3585C1.9832 10.0918 3.21654 11.5418 4.84987 11.8668C4.32548 12.0103 3.77495 12.0303 3.24154 11.9252C3.46788 12.6356 3.91115 13.2572 4.50905 13.7026C5.10695 14.148 5.82941 14.3949 6.57487 14.4085C5.31123 15.4089 3.74487 15.9496 2.1332 15.9418C1.84987 15.9418 1.56654 15.9252 1.2832 15.8918C2.86654 16.9085 4.74987 17.5002 6.76654 17.5002C13.3332 17.5002 16.9415 12.0502 16.9415 7.32516C16.9415 7.16683 16.9415 7.01683 16.9332 6.8585C17.6332 6.3585 18.2332 5.72516 18.7165 5.00016Z"
                                fill="#5A6881"
                              />
                            </svg>
                          </span>
                          Twitter
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b-textGray border mx-auto max-w-[1440px]"></div>
      {/* bottom link*/}
      <div className="flex justify-between mx-auto max-w-[1440px]">
        <div className="flex items-center gap-2 text-black py-10">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 1.875C6.89453 1.875 4.375 4.27305 4.375 7.22656C4.375 10.625 8.125 16.0105 9.50195 17.8707C9.55911 17.9492 9.63402 18.0131 9.72058 18.0572C9.80713 18.1012 9.90288 18.1242 10 18.1242C10.0971 18.1242 10.1929 18.1012 10.2794 18.0572C10.366 18.0131 10.4409 17.9492 10.498 17.8707C11.875 16.0113 15.625 10.6277 15.625 7.22656C15.625 4.27305 13.1055 1.875 10 1.875Z"
                stroke="black"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 9.375C11.0355 9.375 11.875 8.53553 11.875 7.5C11.875 6.46447 11.0355 5.625 10 5.625C8.96447 5.625 8.125 6.46447 8.125 7.5C8.125 8.53553 8.96447 9.375 10 9.375Z"
                stroke="black"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Indonesia
        </div>
        <div className="flex flex-col md:flex-row gap-5 py-10 over:underline">
          <Link to="#" className="hover:text-black hover:underline">
            Pernyataan Privasi
          </Link>
          <Link to="#" className="hover:text-black hover:underline">
            Persyaratan & ketentuan
          </Link>
          <Link to="#" className="hover:text-black hover:underline">
            Hak cipta 2023 &copy; JobStreet
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterKandidat;
