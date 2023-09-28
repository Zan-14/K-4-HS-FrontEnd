import { Link } from "react-router-dom";

const HomeSearchSectionKandidat = () => {
  return (
    <div>
      {/* background image */}
      {/* Search section */}
      <div className="flex items-center bg-homeBanner py-20 justify-center bg-cover">
        <div className="flex flex-col">
          <p className="text-white font-bold">
            Dapatkan pekerjaan yang berarti bagimu
          </p>
          <div className="flex gap-5 pt-8">
            {/* Input Jabatan */}
            <div className="flex justify-start items-center bg-white rounded-md">
              <div className="my-2 mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M13.738 13.1843L13.7381 13.1845C13.9689 13.4051 13.9712 13.7685 13.7375 13.9871C13.5098 14.2045 13.1441 14.2042 12.9164 13.9867L13.738 13.1843ZM13.738 13.1843L10.3778 9.98248C11.2497 9.01589 11.7828 7.76293 11.7828 6.3845C11.7828 3.32023 9.17898 0.85 5.98219 0.85C2.78539 0.85 0.181543 3.32023 0.181543 6.3845C0.181543 9.44479 2.78547 11.9149 5.98219 11.9149C7.31732 11.9149 8.54671 11.4835 9.52765 10.7586L12.9162 13.9865L13.738 13.1843ZM5.98219 10.7859C3.41734 10.7859 1.35098 8.81023 1.35098 6.3845C1.35098 3.95861 3.41751 1.97903 5.98219 1.97903C8.54688 1.97903 10.6138 3.95863 10.6138 6.3845C10.6138 8.81021 8.54706 10.7859 5.98219 10.7859Z"
                    fill="#0D3880"
                    stroke="#0D3880"
                    strokeWidth="0.3"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="w-96 h-12 px-2 placeholder-textGray"
                placeholder="Jabatan, kata kunci, perusahaan"
              />
              <span className="px-3"></span>
            </div>
            {/* Input Daerah */}
            <div className="flex justify-start items-center bg-white rounded-md">
              <div className="my-2 mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="20"
                  viewBox="0 0 14 17"
                  fill="none"
                >
                  <path
                    d="M6.53021 16.15C6.6321 16.1503 6.73889 16.1082 6.8398 16.0522C6.94447 15.9941 7.06001 15.9113 7.18331 15.8095C7.43021 15.6058 7.72151 15.3153 8.03817 14.9641C8.67221 14.2607 9.41929 13.3009 10.1333 12.27C10.8474 11.239 11.531 10.1332 12.0368 9.13738C12.2896 8.63951 12.4992 8.16688 12.6459 7.74331C12.7918 7.32183 12.8789 6.93942 12.8789 6.625C12.8789 3.42238 10.0222 0.85 6.53022 0.85C3.0382 0.85 0.181543 3.42238 0.181543 6.625C0.181543 6.94311 0.268192 7.32832 0.41376 7.75211C0.560016 8.1779 0.769049 8.65194 1.02132 9.15061C1.5259 10.148 2.20805 11.2529 2.92114 12.2819C3.63421 13.3109 4.38085 14.2679 5.01575 14.9688C5.33284 15.3189 5.6249 15.6083 5.87302 15.8112C5.99695 15.9126 6.1132 15.9951 6.21869 16.0529C6.32061 16.1088 6.42794 16.1503 6.53021 16.15ZM6.53021 16.15C6.52996 16.15 6.52971 16.15 6.52946 16.15L6.53022 16L6.53097 16.15C6.53072 16.15 6.53047 16.15 6.53021 16.15ZM6.53097 14.4437L6.52948 14.4437C6.51487 14.4438 6.4753 14.4357 6.40419 14.3957C6.33655 14.3577 6.25414 14.2987 6.15806 14.218C5.96619 14.057 5.73307 13.821 5.47311 13.5267C4.95391 12.939 4.33896 12.1319 3.74949 11.2618C3.16005 10.3917 2.59865 9.46237 2.1853 8.63075C1.9786 8.2149 1.81003 7.82571 1.69342 7.48207C1.57611 7.13635 1.51466 6.84604 1.51466 6.625C1.51466 4.13277 3.74609 2.0875 6.53022 2.0875C9.31435 2.0875 11.5458 4.13277 11.5458 6.625C11.5458 6.84247 11.4843 7.13012 11.3666 7.47419C11.2496 7.81607 11.0806 8.20418 10.8734 8.61946C10.4589 9.44995 9.89622 10.3802 9.3059 11.2519C8.71554 12.1238 8.1001 12.9334 7.58143 13.5233C7.32173 13.8186 7.08911 14.0556 6.89804 14.2174C6.80235 14.2984 6.72042 14.3576 6.65335 14.3958C6.58261 14.4361 6.54412 14.4438 6.53097 14.4437ZM6.53022 7.88125C5.74309 7.88125 5.13055 7.3055 5.13055 6.625C5.13055 5.9445 5.74309 5.36875 6.53022 5.36875C7.31735 5.36875 7.92989 5.9445 7.92989 6.625C7.92989 7.3055 7.31735 7.88125 6.53022 7.88125ZM6.53022 4.13125C5.03522 4.13125 3.79744 5.23408 3.79744 6.625C3.79744 8.01592 5.03522 9.11875 6.53022 9.11875C8.02521 9.11875 9.263 8.01592 9.263 6.625C9.263 5.23408 8.02521 4.13125 6.53022 4.13125Z"
                    fill="#0D3880"
                    stroke="#0D3880"
                    strokeWidth="0.3"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="w-96 h-12 px-2 placeholder-textGray"
                placeholder="Daerah, kota atau kabupaten"
              />
              <span className="px-3"></span>
            </div>
            {/* selection */}
            <div className="flex">
              <div className="flex items-center bg-white pl-3 rounded-l-md">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M8.87128 4.0625C8.87128 6.02909 7.27466 7.625 5.3034 7.625C3.33213 7.625 1.73552 6.02909 1.73552 4.0625C1.73552 2.09591 3.33213 0.5 5.3034 0.5C7.27466 0.5 8.87128 2.09591 8.87128 4.0625ZM5.3034 9.4375C6.87535 9.4375 8.29019 8.78308 9.28767 7.73931C9.598 8.07377 9.77525 8.49112 9.77525 8.9375V10.5625C9.77525 11.5834 8.83613 12.5 7.56333 12.5H3.04346C1.77067 12.5 0.831543 11.5834 0.831543 10.5625V8.9375C0.831543 8.49112 1.00879 8.07377 1.31913 7.73931C2.31661 8.78308 3.73145 9.4375 5.3034 9.4375Z"
                      fill="#0D3880"
                      stroke="#0D3880"
                    />
                  </svg>
                </div>
              </div>
              <form action="" className="flex gap-5">
                <select
                  name="job-type"
                  id="job-type"
                  className="w-96 rounded-r-md text-textGray px-2"
                >
                  <option value="">Semua spesialisasi pekerjaan</option>
                  <option value="arsitek">Arsitek</option>
                  <option value="teknik-sipil">Teknik Sipil</option>
                </select>
                <button className="bg-pink-1000 py-2 px-12  rounded-md text-white font-bold">
                  Cari
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Search history */}
      {/* container */}
      <div className="bg-white flex justify-center">
        <div className="flex gap-5 items-center py-5 w-[1500px]">
          {/* pencarian terakhir */}
          <div>
            <p className="font-bold">Pencarian terakhir</p>
          </div>
          {/* History 1 */}
          <div className="border-l-2   border-slate-400 pl-8">
            <div className="flex gap-3">
              <span className="px-2 bg-[#12784F] bg-opacity-20 text-[#12784F] rounded-md">
                9 Baru
              </span>
              <Link className="text-blue-500">desain furniture</Link>
            </div>
            <div>
              <p>Semua lokasi</p>
            </div>
          </div>
          {/* History 2 */}
          <div className="border-l-2   border-slate-400 pl-8">
            <div className="flex gap-3">
              <span className="px-2 bg-[#12784F] bg-opacity-20 text-[#12784F] rounded-md">
                2 Baru
              </span>
              <Link className="text-blue-500">Konselor</Link>
            </div>
            <div>
              <p>Semua lokasi</p>
            </div>
          </div>
          {/* History 3 */}
          <div className="border-l-2   border-slate-400 pl-8">
            <div className="flex gap-3">
              <span className="px-2 bg-[#12784F] bg-opacity-20 text-[#12784F] rounded-md">
                99+ Baru
              </span>
              <Link className="text-blue-500">HRD</Link>
            </div>
            <div>
              <p>Semua lokasi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearchSectionKandidat;
