import { Link, useParams } from "react-router-dom";
import { Bed, Maximize2, Users, Star } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mockRoomData = {
  id: 1,
  name: "Summit View King Room",
  images: [
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=2074&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  ],
  rating: 3,
  beds: 1,
  bedType: "Bed",
  size: 50,
  adults: 6,
};

export default function RoomDetails() {
  const { id } = useParams();
  const room = mockRoomData;

  return (
    <div className="container mx-auto px-4 pt-28 pb-8 max-w-6xl font-main">
      {/* Breadcrumb Section */}
      <div className="flex justify-center mb-8 relative z-10">
        <Breadcrumb>
          <BreadcrumbList className="text-xs sm:text-sm flex items-center justify-center">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-gray-500 hover:text-primary transition-colors font-medium">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-300 px-1">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/rooms" className="text-gray-500 hover:text-primary transition-colors font-medium">Room</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-300 px-1">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-400 font-medium">{room.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section with Carousel */}
      <div className="relative group">
        <Carousel className="w-full">
          <CarouselContent>
            {room.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
                  <img
                    src={image}
                    alt={`${room.name} - image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay to darken slightly if needed, matching the image look */}
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Styled Navigation Buttons */}
          <CarouselPrevious className="left-6 bg-white/90 hover:bg-white hover:text-black text-gray-800 border-none shadow-md h-10 w-10 
            opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-0" />
          <CarouselNext className="right-6 bg-white/90 hover:bg-white  hover:text-black text-gray-800 border-none shadow-md h-10 w-10 
            opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-0" />

          {/* Room Summary Card Overlay */}
          <div className="absolute bottom-0 left-0 w-full sm:w-auto sm:min-w-[550px]">
            <div className="bg-white p-6 sm:p-10 rounded-tr-xl shadow-lg relative z-20">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-8 font-header leading-tight">
                {room.name}
              </h1>

              <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-[13px] sm:text-sm text-gray-500 font-medium">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                  <span>{room.rating}/5</span>
                </div>

                <div className="flex items-center gap-3">
                  <Bed className="w-5 h-5 text-gray-400" />
                  <span>{room.beds} {room.bedType}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Maximize2 className="w-5 h-5 text-gray-400" />
                  <span>{room.size}sqm m²</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span>{room.adults} Adults</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
