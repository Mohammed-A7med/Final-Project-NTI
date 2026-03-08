import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";

import { routes } from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <RouterProvider router={routes} />
    </>
  );
}
