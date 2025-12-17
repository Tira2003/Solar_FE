
import Navbar from "@/components/Navigation/navbar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      
      <Navbar />
      <Outlet />
    </>
  );
};
