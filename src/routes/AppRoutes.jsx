import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import IssuesListPage from "../pages/IssuesListPage";
import CreateIssuePage from "../pages/CreateIssuePage";
import { Navigate } from "react-router-dom";
import AnalyticsPage from "../pages/AnalyticsPage";
import SettingsPage from "../pages/SettingsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>
  <Route
  path="/analytics"
  element={
    <ProtectedRoute>
      <AnalyticsPage />
    </ProtectedRoute>
  }
/>
<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <SettingsPage />
    </ProtectedRoute>
  }
/>
{/* <Route
  path="/team"
  element={
    <ProtectedRoute>
      <SettingsPage />
    </ProtectedRoute>
  }
/> */}
      <Route
  path="/issues"
  element={
    <ProtectedRoute>
      <IssuesListPage />
    </ProtectedRoute>
  }
/>
    <Route
  path="/create-issue"
  element={
    <ProtectedRoute>
      <CreateIssuePage />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
};

export default AppRoutes;