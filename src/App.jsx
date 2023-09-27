import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Company/homePages";
import LoginPage from "./pages/Company/loginPages";
import RegisterPage from "./pages/registerPages";
import NotFound from "./pages/404NotFound";
import ProfilePage from "./pages/profilePages";
import Perusahaan from "./pages/Company/perusahaan";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Perusahaan />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
