import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-black font-bold text-center mb-5">
            404NotFound
          </h1>
          <Link to="/">
            <button className="py-2 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-900 hover:font-bold">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
