import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Company/homePages";
import LoginPage from "./pages/Company/loginPages";
import NotFound from "./pages/404NotFound";
import ProfilePage from "./pages/Company/profilePages";
import RegisterPages from "./pages/Company/registerPages";
import HomePageKandidat from "./pages/Kandidat/home-page-kandidat";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home-kandidat" element={<HomePageKandidat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
