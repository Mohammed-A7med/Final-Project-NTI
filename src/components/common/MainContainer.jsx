import React from 'react';
import { useLocation } from 'react-router-dom';


const MainContainer = ({ children, className = "" }) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <div className={`max-w-7xl mx-auto ${isHomePage ? 'pt-0' : 'pt-30'} sm:px-4 w-full lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default MainContainer;