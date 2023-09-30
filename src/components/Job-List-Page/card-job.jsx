import JobDetails from "./job-details";
import JobListMockApi from "./job-list-mock-api";

const CardJob = () => {
  return (
    <div className="mx-80 flex">
      <div className="w-96">
        <div className="ml-9 py-3">
          <p>
            <span className="font-semibold">1-30</span> dari 44.717 lowongan
          </p>
        </div>
        {/* left section */}
        <JobListMockApi />
      </div>
      <JobDetails />
    </div>
  );
};

export default CardJob;
