import { Outlet, Navigate, useLocation } from "react-router";
import { useUser } from "@clerk/clerk-react";

export default function ProtectedLayout() {
  const { isLoaded, isSignedIn, user } = useUser();
  const location = useLocation();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  // Redirect admins to /admin/solar-units if they're on a non-admin page
  const isAdmin = user?.publicMetadata?.role === "admin";
  const isOnAdminPage = location.pathname.startsWith("/admin");
  const isOnDashboard = location.pathname === "/dashboard" || location.pathname.startsWith("/dashboard");

  // If admin signs in and lands on dashboard, redirect to admin page
  if (isAdmin && isOnDashboard && !isOnAdminPage) {
    return <Navigate to="/admin/solar-units" replace />;
  }

  return <Outlet />;
}
