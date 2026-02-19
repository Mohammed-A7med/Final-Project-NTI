import { Home, BedSingle, ConciergeBell, Palmtree, Gem } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/", icon: <Home size={22} /> },
  { label: "Rooms", href: "/rooms", icon: <BedSingle size={22} /> },
  { label: "Services", href: "/services", icon: <ConciergeBell size={22} /> },
  { label: "Activities", href: "/activities", icon: <Palmtree size={22} /> },
  { label: "Features", href: "/features", icon: <Gem size={22} /> },
];
