const JobSearch = () => {
  return (
    <div className="flex justify-center bg-blue-900">
      <nav className="flex-col md:flex gap-4 py-4 text-slate-50 ">
        <div className="flex mx-10">
          {/* Jabatan */}
          <form className=" mx-1">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-blue-500 dark:text-blue-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-[45px] w-[365px] p-4 pl-10 outline-blue-400 text-sm text-gray-900 border border-blue-300 rounded-[4px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jabatan, kata kunci, perusahaan"
                required=""
              />
            </div>
          </form>
          {/* Daerah */}
          <form className="mx-1">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-blue-500 dark:text-blue-400"
                  aria-hidden="true"
                  fill="none"
                  viewBox=" 0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-[45px] w-[365px] p-4 pl-10 outline-blue-400  text-sm text-gray-900 border border-blue-300 rounded-[4px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Daerah, kota atau kabupaten"
                required=""
              />
            </div>
          </form>
          {/* Spesialisasi pekerjaan */}
          <form className="mx-1">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-5 text-blue-500 dark:text-blue-400"
                  viewBox="0 0 28 28"
                  aria-hidden="true"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M8 7.29805C8 6.85622 8.35817 6.49805 8.8 6.49805H25.2C25.6418 6.49805 26 6.85622 26 7.29805V7.69805C26 8.13987 25.6418 8.49805 25.2 8.49805H8.8C8.35817 8.49805 8 8.13987 8 7.69805V7.29805Z"
                    fill="#000000"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M8 21.298C8 20.8562 8.35817 20.498 8.8 20.498H25.2C25.6418 20.498 26 20.8562 26 21.298V21.698C26 22.1399 25.6418 22.498 25.2 22.498H8.8C8.35817 22.498 8 22.1399 8 21.698V21.298Z"
                    fill="#000000"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M8 14.298C8 13.8562 8.35817 13.498 8.8 13.498H25.2C25.6418 13.498 26 13.8562 26 14.298V14.698C26 15.1399 25.6418 15.498 25.2 15.498H8.8C8.35817 15.498 8 15.1399 8 14.698V14.298Z"
                    fill="#000000"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 7.5C5 8.32843 4.32843 9 3.5 9C2.67157 9 2 8.32843 2 7.5C2 6.67157 2.67157 6 3.5 6C4.32843 6 5 6.67157 5 7.5Z"
                    fill="#000000"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 21.498C5 22.3265 4.32843 22.998 3.5 22.998C2.67157 22.998 2 22.3265 2 21.498C2 20.6696 2.67157 19.998 3.5 19.998C4.32843 19.998 5 20.6696 5 21.498Z"
                    fill="#000000"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 14.498C5 15.3265 4.32843 15.998 3.5 15.998C2.67157 15.998 2 15.3265 2 14.498C2 13.6696 2.67157 12.998 3.5 12.998C4.32843 12.998 5 13.6696 5 14.498Z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-[45px] w-[365px] p-4 pl-10 outline-blue-400  text-sm text-gray-900 border border-blue-300 rounded-[4px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Semua spesialisasi pekerjaan"
                required=""
              />
            </div>
          </form>
          {/* Cari */}
          <form className="ml-1">
            <button
              className="h-[45px] text-[14px] border-2 font-bold rounded relative z-[2] flex items-center px-8 py-2.5  leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-white-300 focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
            >
              Cari
            </button>
          </form>
        </div>
        <div className="flex px-5 mx-5">
          <div className="">
            <ul className="flex text-[12px] font-semibold ">
              <li>
                <a href="#" className="border p-2 rounded-[3px] mx-1">
                  Gaji
                </a>
              </li>
              <li>
                <a href="#" className="border p-2 rounded-[3px] mx-1">
                  Jenis Pekerjaan
                </a>
              </li>
              <li>
                <a href="#" className="border p-2 rounded-[3px] mx-1">
                  Tanggal Ditanyakan
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-2 border w-0 h-[20px] " />
          <div className="text-[12px]">
            <a href="#" className="hover:border-b-white">
              Urut Berdasarkan Relevansi
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default JobSearch;
