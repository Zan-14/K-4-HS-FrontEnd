import LeftSection from "../../components/Company-Profile-Page/left-section";
import RightSection from "../../components/Company-Profile-Page/right-section";
import NavbarCompanyProfile from "../../components/Navbar/Navbar-company-profile";
import Footer from "../../components/Footer/Footer";

const ProfilePage = () => {
  return (
    <>
      <NavbarCompanyProfile />
      <section className="flex justify-center min-h-screen bg-neutral-200">
        <div className="flex max-w-[1650px] px-20 py-11 gap-2.5">
          <LeftSection />
          <RightSection />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfilePage;
