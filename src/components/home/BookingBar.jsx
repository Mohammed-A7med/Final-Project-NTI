import { Calendar, Users, Home, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BookingBar() {
  const segments = [
    {
      icon: <Calendar size={20} />,
      label: "Checkin - Checkout",
      value: "2026/02/22 - 2026/02/23",
    },
    {
      icon: <Users size={20} />,
      label: "Adults",
      value: "1 Adults",
    },
    {
      icon: <UserPlus size={20} />,
      label: "Children",
      value: "0 Children",
    },
    {
      icon: <Home size={20} />,
      label: "Rooms",
      value: "1 Rooms",
    },
  ];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="w-full max-w-7xl mx-auto px-4 absolute bottom-6 md:bottom-23 left-1/2 -translate-x-1/2 z-30"
    >
      <div className="bg-card/95 dark:bg-card/80 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-3 shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-0">
        <div className="flex-1 flex flex-col md:flex-row items-stretch md:items-center">
          {segments.map((segment, index) => (
            <div key={index} className="flex flex-1 items-center gap-4 px-6 py-2 group cursor-pointer hover:bg-primary/5 transition-colors rounded-3xl lg:rounded-none relative">
              <div className="text-primary/60 group-hover:text-primary transition-colors">
                {segment.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                  {segment.label}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {segment.value}
                </span>
              </div>
              
              {/* Divider for Desktop */}
              {index < segments.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-border/50" />
              )}
            </div>
          ))}
        </div>

        <div className="px-3">
          <Button 
            className="w-full lg:w-auto px-10 h-14 text-sm font-bold uppercase tracking-widest shadow-xl hover:shadow-primary/20 transition-all"
          >
            Check Availability
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
