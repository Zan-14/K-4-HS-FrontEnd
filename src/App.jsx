import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Company/homePages";
import LoginPage from "./pages/Company/loginPages";
import NotFound from "./pages/404NotFound";
import ProfilePage from "./pages/Company/profilePages";
import RegisterPages from "./pages/Company/registerPages";
import HomePageKandidat from "./pages/Kandidat/home-page-kandidat";
import JobListPageKandidat from "./pages/Kandidat/job-list-kandidat";
import ProtectedRoute from "./routers/protectedRoute";
import PrivateRoute from "./routers/privateRoute";
import LayoutCompany from "./layout/LayoutCompany";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/job-list" element={<JobListPageKandidat />} />
        </Route>

        <Route path="/" element={<LayoutCompany />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPages />} />
        </Route>

        <Route path="/home-kandidat" element={<HomePageKandidat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
