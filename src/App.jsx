import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Company/homePages";
import LoginPage from "./pages/Company/loginPages";
import NotFound from "./pages/404NotFound";
import ProfilePage from "./pages/Company/profilePages";
import Perusahaan from "./pages/Company/perusahaan";
import RegisterPages from "./pages/Company/perusahaan";
import HomePageKandidat from "./pages/Kandidat/home-page-kandidat";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Perusahaan />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/home-kandidat" element={<HomePageKandidat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
