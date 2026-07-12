import KPICards from "./components/KPICards";
import QuickActions from "./components/QuickActions";
import AssetStatusChart from "./components/AssetStatusChart";
import RecentActivity from "./components/RecentActivity";
import UpcomingReturns from "./components/UpcomingReturns";
import MaintenanceToday from "./components/MaintenanceToday";
import NotificationPanel from "./components/NotificationPanel";

const Dashboard = () => {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome to AssetFlow Enterprise Resource Management System
        </p>
      </div>

      <KPICards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <AssetStatusChart />

        <QuickActions />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <UpcomingReturns />

        <MaintenanceToday />

      </div>

      <RecentActivity />

      <NotificationPanel />

    </div>
  );
};

export default Dashboard;
