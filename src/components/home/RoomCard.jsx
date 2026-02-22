import { Bed, Maximize2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RoomCard({ room }) {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-sm flex flex-col h-full select-none group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-4/3 rounded-t-3xl">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          draggable={false}
        />
        {/* Type badge */}
        <span className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-[#fefefed6] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg">
          {room.type}
        </span>
        
        {/* Price Tag Overlay - positioned at the bottom-left of the image */}
        <div className="absolute bottom-0 left-0 bg-card px-5 py-3 rounded-tr-3xl">
          <p className="text-foreground font-semibold text-base leading-none">
            <span className="text-xl font-bold">${room.price}.00</span>
            <span className="text-sm font-normal text-muted-foreground"> /night</span>
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-6 pb-6 pt-2 flex flex-col gap-4 flex-1">
        {/* Name */}
        <h3 className="font-header text-2xl text-foreground leading-tight mt-2">
          {room.name}
        </h3>

        <div className="flex items-end justify-between mt-auto">
          {/* Details */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
              <Bed size={16} className="text-muted-foreground/60" />
              <span>{room.beds} {room.beds > 1 ? "beds" : "bed"}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
              <Maximize2 size={16} className="text-muted-foreground/60" />
              <span>{room.size}sqm m²</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
              <Users size={16} className="text-muted-foreground/60" />
              <span>{room.guests} {room.guests > 1 ? "adults" : "adult"}</span>
            </div>
          </div>

          {/* Book Now Button */}
          <Button
            variant="outline"
            size="sm"
            className="px-8"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
