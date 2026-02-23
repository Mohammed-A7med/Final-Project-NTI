import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar/Navbar";
import CartSidebar from "@/components/common/CartSidebar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <CartSidebar />
      <Outlet />
    </>
  );
}
