import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components2/Button";

function Dashboard() {
  const { logout, testRefresh } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full shrink-0 bg-gray-900 p-4 text-white md:w-60 md:p-5">
        <h1 className="mb-4 text-2xl font-bold md:mb-8">
          Dashboard
        </h1>

        <nav className="flex flex-row flex-wrap gap-4 md:flex-col">
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
          <Link to="/dashboard/orders">Orders</Link>
        </nav>

        <div className="mt-5 flex flex-wrap gap-2 md:flex-col">
          <Button onClick={handleLogout} variant="danger">
            Logout
          </Button>

          <Button onClick={testRefresh}>
            Test Refresh
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 p-4 sm:p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;