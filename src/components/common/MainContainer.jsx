import React from 'react';
import { useLocation } from 'react-router-dom';
import AppBreadcrumb from './AppBreadcrumb';
import { cn } from "@/lib/utils";


const MainContainer = ({ children, className = "", showBreadcrumb = true }) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <div className={cn("max-w-7xl mx-auto sm:px-4 w-full lg:px-2", isHomePage ? 'pt-0' : 'pt-10', className)}>
      {!isHomePage && showBreadcrumb && <AppBreadcrumb />}
      {children}
    </div>
  );
};

export default MainContainer;