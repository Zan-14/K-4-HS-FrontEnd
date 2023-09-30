import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";

const JobListMockApi = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch("https://651811ff582f58d62d355c5d.mockapi.io//jobs")
      .then(res => res.json())
      .then(data => setJobList(data));
  }, []);

  return (
    <div>
      {jobList.length < 0 && <h1>Loading...</h1>}
      {jobList.length > 0 &&
        jobList.map(job => (
          <div key={job.id} className="flex flex-col">
            <div className="flex-initial mb-1.5 cursor-pointer bg-white max-w-[435px] rounded-[5px] text-[14px]  hover:drop-shadow-md relative">
              <div className="flex flex-col px-6 py-6 border-violet-700 border-l-[5px] rounded-[5px] ">
                <div className=" flex justify-between capitalize">
                  <h2 className="font-semibold text-blue-700 pt-3">
                    {job.jobTitle}
                  </h2>
                  <div className="py-1.5 px-3 bg-white hover:bg-gray-200 rounded hover:rounded-full">
                    <svg
                      width="20px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#676869"
                      strokeWidth="0.21600000000000003"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20.9425C20 22.6114 18.0766 23.5462 16.7644 22.5152L12 18.7717L7.23564 22.5152C5.92338 23.5462 4 22.6114 4 20.9425V4ZM7 3C6.44772 3 6 3.44772 6 4V20.9425L12 16.2283L18 20.9425V4C18 3.44772 17.5523 3 17 3H7Z"
                          fill="#696969"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <h2 className="text-[14px] capitalize">{job.companyName}</h2>
                <h4 className="text-[14px] font-semibold pt-5 capitalize">
                  {job.companyLocation}
                </h4>
                <ul className="list-disc pl-5 text-[14px] pt-3 capitalize">
                  <li>{job.jobDescription}</li>
                  <li>$ {job.salary} /week</li>
                </ul>
                <p className="mt-2">
                  {moment.duration(moment().diff(job.createdAt)).humanize() +
                    " ago"}
                </p>
              </div>
              <div>
                <hr className=" h-px bg-gray-300 border-0 dark:bg-gray-700 " />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JobListMockApi;
