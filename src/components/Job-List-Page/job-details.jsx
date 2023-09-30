import { useParams } from "react-router";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className="flex items-center justify-center border-gray-300 border-l-[1px] bg-white text-center ml-1 w-[900px] h-screen">
        <div>
          <p className="font-semibold ">Ada 44.717 lowongan untuk kamu</p>
          <p className="">pilih lowongan untuk melihat lebih detail</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
