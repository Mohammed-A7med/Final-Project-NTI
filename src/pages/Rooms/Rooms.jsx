import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import RoomCard from "../../components/rooms/RoomCard";
import RoomFilter from "../../components/rooms/RoomFilter";
import BookingBar from "../../components/rooms/BookingBar";
import MainContainer from "../../components/common/MainContainer";
import Sidebar from "../../components/common/Sidebar";
import MobileDrawer from "../../components/common/MobileDrawer";
// import AppBreadcrumb from "../../components/common/AppBreadcrumb";

const mockRoom = {
  id: 1,
  type: "DOUBLE ROOM",
  name: "Summit View King Room",
  price: 100,
  beds: 1,
  size: 50,
  guests: 6,
  image: "https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2024/04/cozy-cabin-with-view-mountains-1.png",
  partners: [
    {
      name: "agoda.com",
      logo: "https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2024/04/agoda.png",
      href: "#",
    },
  ],
};

export default function Rooms() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <MainContainer showBreadcrumb={false}>
      <section className="bg-background text-center">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-6xl font-header text-foreground font-medium">
            Rooms
          </h1>
          <div className="mt-12">
            <BookingBar variant="default" className="max-w-full! px-0!" />
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-end mb-6 px-4">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-all"
          >
            <SlidersHorizontal size={18} />
            Filter Rooms
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RoomCard room={mockRoom} />
            <RoomCard room={mockRoom} />
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-3">
          <Sidebar>
            <RoomFilter onFilter={() => setIsFilterOpen(false)} />
          </Sidebar>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileDrawer 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        title="Filter Rooms"
      >
        <RoomFilter onFilter={() => setIsFilterOpen(false)} />
      </MobileDrawer>
      </section>
    </MainContainer>
  );
}
