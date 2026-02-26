import RoomCard from "../../components/rooms/Roomcard";
import RoomFilter from "../../components/rooms/RoomFilter";

export default function Rooms() {
  return (
    <section className="container bg-background text-center">
      {/* Header */}
      <div className="flex flex-col items-center mb-16 justify-center">
        <h1 className="text-5xl font-header text-foreground font-medium mb-6">
          Rooms
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RoomCard />
            <RoomCard />
          </div>
        </div>

        <div className="hidden md:block md:col-span-3">
          <RoomFilter />
        </div>
      </div>
    </section>
  );
}
