import { useState, useEffect } from "react";
import { 
  Menu, X, Home, BedSingle, ConciergeBell, 
  Palmtree, Gem, Moon, Sun, Languages, LogIn 
} from "lucide-react";
import Logo from "@/assets/Logo.webp";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  const navLinks = [
    { label: "Home", href: "/", icon: <Home size={22} /> },
    { label: "Rooms", href: "/rooms", icon: <BedSingle size={22} /> },
    { label: "Services", href: "/services", icon: <ConciergeBell size={22} /> },
    { label: "Activities", href: "/activities", icon: <Palmtree size={22} /> },
    { label: "Features", href: "/features", icon: <Gem size={22} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav className="relative flex items-center justify-between px-6 py-2 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={Logo}
              alt="MountainHotel Logo"
              className="h-8 md:h-10 w-auto"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-4 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <NavLink
                  to={link.href}
                  className={({ isActive }) => `
                    flex items-center justify-center w-11 h-11 rounded-full
                    transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10
                    ${isActive ? "text-[var(--color-primary)] bg-white/20 shadow-inner" : "text-white/80"}
                  `}
                >
                  {link.icon}
                </NavLink>
                
                {/* Glassmorphism Tooltip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="px-4 py-1.5 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-lg whitespace-nowrap text-sm font-medium text-white tracking-wide">
                    {link.label}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Actions Area */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Theme Toggle */}
            <div className="relative group">
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/90 border border-white/10 cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="px-4 py-1.5 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-lg whitespace-nowrap text-sm font-medium text-white tracking-wide">
                  {isDark ? "Light Mode" : "Dark Mode"}
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="relative group">
              <button className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/90 border border-white/10 cursor-pointer">
                <Languages size={20} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="px-4 py-1.5 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-lg whitespace-nowrap text-sm font-medium text-white tracking-wide">
                  Language
                </div>
              </div>
            </div>

            {/* Login Styled like NavLinks */}
            <div className="relative group">
              <NavLink
                to="/login"
                className={({ isActive }) => `
                  flex items-center justify-center w-11 h-11 rounded-full border border-white/20
                  transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10
                  ${isActive ? "text-[var(--color-primary)] bg-white/20 shadow-inner" : "text-white/80 bg-white/5"}
                `}
              >
                <LogIn size={22} />
              </NavLink>
              
              {/* Glassmorphism Tooltip for Login */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="px-4 py-1.5 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-lg whitespace-nowrap text-sm font-medium text-white tracking-wide">
                  Login
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-white rounded-full bg-white/10 border border-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden absolute left-5 right-5 mt-4 overflow-hidden transition-all duration-500
          ${isOpen ? "max-h-[550px] opacity-100" : "max-h-0 opacity-0"}
        `}>
          <div className="p-6 bg-white/10 dark:bg-black/60 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl">
            <ul className="grid grid-cols-1 gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      flex items-center gap-4 p-4 rounded-2xl transition-all
                      ${isActive ? "bg-[var(--color-primary)] text-white shadow-lg" : "text-white/80 hover:bg-white/10"}
                    `}
                  >
                    {link.icon}
                    <span className="font-semibold">{link.label}</span>
                  </NavLink>
                </li>
              ))}
              
              {/* Mobile Login Link */}
              <li>
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-4 p-4 rounded-2xl transition-all
                    ${isActive ? "bg-[var(--color-primary)] text-white shadow-lg" : "text-white/80 hover:bg-white/10"}
                  `}
                >
                  <LogIn size={22} />
                  <span className="font-semibold">Login</span>
                </NavLink>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="flex justify-between items-center px-2">
                <button onClick={toggleTheme} className="flex items-center gap-3 text-white/80 shrink-0 cursor-pointer">
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                </button>
                <button className="text-white/80 p-2 cursor-pointer">
                  <Languages size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
