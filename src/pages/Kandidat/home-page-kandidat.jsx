import NavbarKandidat from "../../components/Navbar/Navbar-kandidat";
import FooterKandidat from "../../components/Footer/Footer-kandidat";
import HomeSearchSectionKandidat from "../../components/Kandidat-Home-Page/kandidat-home-search";
import Rekomendasi from "../../components/Kandidat-Home-Page/rekomendasi-home-page";
import PerusahaanTernama from "../../components/Kandidat-Home-Page/list-perusahaan-ternama";

const HomePageKandidat = () => {
  return (
    <div className="bg-bgGray">
      <NavbarKandidat />
      <HomeSearchSectionKandidat />
      <Rekomendasi />
      <PerusahaanTernama />
      <FooterKandidat />
    </div>
  );
};

export default HomePageKandidat;
