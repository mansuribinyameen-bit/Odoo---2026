import { Navigate, Route, Routes } from "react-router-dom";

// Layout
import DashboardLayout from "./layouts/DashboardLayout";

// Authentication Pages
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard";

// Organization
import Departments from "./pages/organization/Departments";
import Categories from "./pages/organization/Categories";
import Employees from "./pages/organization/Employees";

// Asset Management
import Assets from "./pages/assets/Assets";
import AssetDetails from "./pages/assets/AssetDetails";
import RegisterAsset from "./pages/assets/RegisterAsset";

// Allocation
import Allocation from "./pages/allocation/Allocation";
import Transfers from "./pages/allocation/Transfers";

// Resource Booking
import Bookings from "./pages/booking/Bookings";

// Maintenance
import Maintenance from "./pages/maintenance/Maintenance";

// Audit
import Audit from "./pages/audit/Audit";

// Reports
import Reports from "./pages/reports/Reports";

// Notifications
import Notifications from "./pages/notifications/Notifications";

function App() {
  return (
    <Routes>

      {/* Authentication */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>

        <Route index element={<Dashboard />} />

        {/* Organization */}
        <Route path="departments" element={<Departments />} />
        <Route path="categories" element={<Categories />} />
        <Route path="employees" element={<Employees />} />

        {/* Assets */}
        <Route path="assets" element={<Assets />} />
        <Route path="assets/register" element={<RegisterAsset />} />
        <Route path="assets/:id" element={<AssetDetails />} />

        {/* Allocation */}
        <Route path="allocation" element={<Allocation />} />
        <Route path="transfers" element={<Transfers />} />

        {/* Booking */}
        <Route path="bookings" element={<Bookings />} />

        {/* Maintenance */}
        <Route path="maintenance" element={<Maintenance />} />

        {/* Audit */}
        <Route path="audit" element={<Audit />} />

        {/* Reports */}
        <Route path="reports" element={<Reports />} />

        {/* Notifications */}
        <Route path="notifications" element={<Notifications />} />

      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center h-screen text-2xl font-bold">
            404 | Page Not Found
          </div>
        }
      />

    </Routes>
  );
}

export default App;