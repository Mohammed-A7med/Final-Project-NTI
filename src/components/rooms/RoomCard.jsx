import { Button } from "@/components/ui/button";
import { BedDouble, Maximize2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RoomCard({ room, className }) {
  if (!room) return null;

  return (
    <div className={cn("bg-card rounded-3xl overflow-hidden shadow-sm flex flex-col h-full select-none group border border-transparent hover:border-primary transition-all duration-300", className)}>
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-4/3 rounded-t-3xl">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          draggable={false}
        />
        {/* Type badge */}
        <span className="absolute top-0 left-0 bg-primary backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-6 py-2.5 rounded-br-2xl">
          {room.type}
        </span>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-0 left-0 bg-card px-5 py-3 rounded-tr-3xl transition-colors duration-300">
          <p className="text-foreground font-semibold text-base leading-none">
            <span className="text-xl font-bold">${room.price}.00</span>
            <span className="text-sm font-normal text-muted-foreground"> /night</span>
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-1 flex-col gap-4 px-6 pt-2 pb-6 box-border">
        {/* Name */}
        <h3 className="font-header text-2xl text-foreground leading-tight mt-2 text-left group-hover:text-primary transition-colors">
          {room.name}
        </h3>

        {/* Details */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
            <BedDouble size={16} className="text-primary/60" />
            <span>
              {room.beds} {room.beds > 1 ? "beds" : "bed"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
            <Maximize2 size={16} className="text-primary/60" />
            <span>{room.size}sqm m²</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
            <Users size={16} className="text-primary/60" />
            <span>
              {room.guests} {room.guests > 1 ? "adults" : "adult"}
            </span>
          </div>
        </div>

        {/* Buttons & Partners */}
        <div className="flex items-center justify-between gap-4 mt-auto pt-2">
          <Button
            variant="outline"
            size="sm"
            className="px-8 font-bold border-2 hover:bg-primary hover:text-white transition-all rounded-xl"
          >
            Book Now
          </Button>
          
          {room.partners && room.partners.length > 0 && (
            <div className="flex items-center gap-2">
              {room.partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.name}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-8 h-8 rounded-lg object-contain bg-white p-1 border border-border/50 shadow-sm"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
