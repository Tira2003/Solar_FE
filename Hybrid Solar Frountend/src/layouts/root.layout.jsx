import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/toaster";

export const RootLayout = () => {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};

export default RootLayout;
