import RoomCard from "../../components/rooms/RoomCard";
import RoomFilter from "../../components/rooms/RoomFilter";
import BookingBar from "../../components/rooms/BookingBar";
import MainContainer from "../../components/common/MainContainer";
import Sidebar from "../../components/common/Sidebar";
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

        <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RoomCard room={mockRoom} />
            <RoomCard room={mockRoom} />
          </div>
        </div>

        <div className="hidden md:block md:col-span-3">
          <Sidebar>
            <RoomFilter />
          </Sidebar>
        </div>
      </div>
      </section>
    </MainContainer>
  );
}
