import { Outlet } from "react-router-dom";

import AuthImage from "../assets/auth/auth img.jpg";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-primary/40">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Outlet*/}
        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

        {/* Right Side  */}
        <div className="hidden md:block relative rounded-xl overflow-hidden">
          <img
            src={AuthImage}
            alt="auth"
            className="w-full h-[90vh] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/5 " />

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-snug">
              Homes as unique as you.
            </h2>
            <p className="text-white/90 text-base md:text-lg">
              Find your perfect space today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
