import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Company/homePages";
import LoginPage from "./pages/Company/loginPages";
import NotFound from "./pages/404NotFound";
import ProfilePage from "./pages/Company/profilePages";
import Perusahaan from "./pages/Company/perusahaan";
import RegisterPages from "./pages/Company/perusahaan";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Perusahaan />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPages />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
