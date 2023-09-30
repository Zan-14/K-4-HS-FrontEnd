import NavbarKandidat from "../../components/Navbar/Navbar-kandidat";
import FooterKandidat from "../../components/Footer/Footer-kandidat";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";

export default function App() {
  const [jobList, setJobList] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState();

  useEffect(() => {
    fetch("https://65158770dc3282a6a3ce8ff9.mockapi.io/jobs")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);

  return (
    <div className="App">
      <NavbarKandidat />
      <div>
        <h1>Job Terpilih</h1>
        {selectedJobs ? <h1>{selectedJobs.jobTitle}</h1> : <h4>Belum ada job yang terpilih</h4>}
      </div>
      {jobList.length < 0 && <h1>Loading...</h1>}
      {jobList.length > 0 &&
        jobList.map((job) => (
          <div style={{ border: "1px solid red", margin: "5px" }}>
            <h1>{job.companyLogo}</h1>
            <h4>{job.jobTitle}</h4>
            <h5>{job.companyName}</h5>
            <h5>{job.companyLocation}</h5>
            <p>${job.salary}</p>
            {moment.duration(moment().diff(job.createdAt)).humanize() + " lalu"}
            <button onClick={() => setSelectedJobs(job)}>Pilih Job Ini</button>
          </div>
        ))}
      <FooterKandidat />
    </div>
  );
}
