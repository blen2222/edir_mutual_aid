import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegistrationPage";
import PendingApprovalPage from "./pages/PendingApprovalPage";
import HeadDashboard from "./pages/head-of-edir/HeadDashboardPage";
import TreasurerDashboard from "./pages/finance/TreasurerDashboard";
import EventCoordinatorDashboard from "./pages/event-coordinator/EventCoordinatorDashboard";
import MembersDashboard from "./pages/MembersDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/edir/Admin";

import { ResourceDashboardPage } from "./pages/property-manager/ResourceDashboardPage";
import HomePage from "./pages/HomePage";
import EdirRequestPage from "./pages/edir/EdirRequest";
import AboutPage from "./pages/About";

export const App = () => {
  return (
    <>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:edirslug/login" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:edirslug/register" element={<RegisterPage />} />
        <Route path="/pending-approval" element={<PendingApprovalPage />} />
        <Route path="/:edirslug/head/dashboard" element={<HeadDashboard />} />
        <Route
          path="/:edirslug/treasurer/dashboard"
          element={<TreasurerDashboard />}
        />
        <Route
          path="/:edirslug/propertymanager/dashboard"
          element={<ResourceDashboardPage />}
        />
        <Route
          path="/:edirslug/propertymanager/dashboard/resources"
          element={<ResourceDashboardPage />}
        />
        <Route
          path="/:edirslug/eventcoordinator/dashboard"
          element={<EventCoordinatorDashboard />}
        />{" "}
        <Route
          path="/:edirslug/eventcoordinator/dashboard/resources"
          element={<ResourceDashboardPage />}
        />
        <Route
          path="/:edirslug/member/dashboard"
          element={<MembersDashboard />}
        />
        <Route path="/edir/admin" element={<Admin />} />
        <Route path="/edir/request" element={<EdirRequestPage />} />
      </Routes>
      <Footer />
    </>
  );
};
