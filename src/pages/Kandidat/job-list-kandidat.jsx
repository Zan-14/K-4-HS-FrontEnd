import FooterKandidat from "../../components/Footer/Footer-kandidat";
import CardJob from "../../components/Job-List-Page/card-job";
import JobSearch from "../../components/Job-List-Page/job-search";
import NavbarJobList from "../../components/Navbar/Navbar-job-list";

const JobListPageKandidat = () => {
  return (
    <div className="bg-gray-100">
      <NavbarJobList />
      <JobSearch />
      <CardJob />
      <FooterKandidat />
    </div>
  );
};

export default JobListPageKandidat;
