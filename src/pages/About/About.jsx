import React from 'react'
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section className="py-12 bg-white min-h-screen overflow-hidden font-inter relative">

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end mb-8">

          <div className="md:col-span-2 space-y-4 mb-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-playfair leading-tight text-[#1a1a1a]">
              Discover Serenity At <br /> Mountain Hotel: Your <br /> Peak Retreat Awaits!
            </h1>
            <p className="text-gray-400 text-[10px] md:text-xs max-w-[250px] font-medium leading-relaxed">
              Discover Serenity at Mountain Hotel: Your Peak Retreat Awaits!
            </p>
            <div className="pt-2">
              <Button className="bg-[#82917d] hover:bg-[#6c7b68] text-white rounded-full px-8 py-2 text-xs font-semibold h-9 shadow-md">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="md:col-span-1 h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=600"
              alt="Mountain Sky"
              className="w-full h-full object-cover rounded-[1.5rem] shadow-lg"
            />
          </div>

          <div className="md:col-span-1 h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1000"
              alt="Pine Trees"
              className="w-full h-full object-cover rounded-[1.5rem] shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">

          <div className="md:col-span-1 h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000"
              alt="Mountain Hotel"
              className="w-full h-full object-cover rounded-[1.5rem] shadow-lg"
            />
          </div>

          <div className="md:col-span-1 h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000"
              alt="Mountain Bench"
              className="w-full h-full object-cover rounded-[1.5rem] shadow-lg"
            />
          </div>

          <div className="md:col-span-1 h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000"
              alt="Mountain Path"
              className="w-full h-full object-cover rounded-[1.5rem] shadow-lg"
            />
          </div>

          <div className="md:col-span-1 h-[140px]">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000"
              alt="Forest Tree"
              className="w-full h-full object-cover rounded-[1.2rem] shadow-md"
            />
          </div>

          <div className="md:col-span-1 flex flex-col justify-end items-center h-[320px] pb-4 opacity-15">
            <div className="text-center">
              <svg
                className="w-24 h-24 grayscale mx-auto mb-2"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 90L50 10L90 90H10Z" stroke="currentColor" strokeWidth="2" />
                <path d="M30 90L50 40L70 90" stroke="currentColor" strokeWidth="2" />
              </svg>
              <p className="text-[10px] font-bold tracking-widest">PEAK HOTEL</p>
              <div className="flex justify-center space-x-1 mt-1">
                <div className="w-1 h-1 bg-black rounded-full text-black"></div>
                <div className="w-1 h-1 bg-black rounded-full text-black"></div>
                <div className="w-1 h-1 bg-black rounded-full text-black"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-[#f2f4f1] py-20 mt-20">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <p className="text-[#82917d] text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">OUR ACHIEVEMENTS</p>
          <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-16">
            Our Achievements At A Glance
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-[#82917d] font-playfair">75</h3>
              <p className="text-[9px] md:text-[10px] font-light text-gray-500 uppercase tracking-tight leading-tight">
                YEAR OF HOSPITALITY<br />EXCELLENCE
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-[#82917d] font-playfair">120k</h3>
              <p className="text-[9px] md:text-[10px] font-light text-gray-500 uppercase tracking-tight leading-tight">
                GUESTS WELCOMED<br />WORLDWIDE
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-[#82917d] font-playfair">9.5k</h3>
              <p className="text-[9px] md:text-[10px] font-light text-gray-500 uppercase tracking-tight leading-tight">
                UNIQUE LOCAL EXPERIENCES<br />HOSTED
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-[#82917d] font-playfair">45</h3>
              <p className="text-[9px] md:text-[10px] font-light text-gray-500 uppercase tracking-tight leading-tight">
                INDUSTRY AWARDS &<br />RECOGNITIONS
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* History Section */}
      <div className="py-24 px-4 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">

            <div className="space-y-12">
              <div className="max-w-md space-y-6">
                <p className="text-[#82917d] text-[12px] font-extralight tracking-[0.2em] uppercase">HISTORY</p>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#1a1a1a]">
                  Elevate Your Stay: <br /> Luxury Room Systems <br /> At Our Mountain Hotel
                </h2>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Our high-end rooms are designed to offer personalized comfort and sophistication, ensuring a truly memorable stay.
                </p>
                <Button variant="outline" className="border-[#82917d] text-[#82917d] hover:bg-[#82917d] hover:text-white rounded-full px-8 py-2 text-xs font-semibold h-auto">
                  Read More History
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-12">
                <div className="h-[300px] md:h-[350px]">
                  <img
                    src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=1000"
                    alt="Luxury Bedroom"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="h-[500px] md:h-[650px] md:translate-y-12">
                  <img
                    src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1000"
                    alt="Balcony View"
                    className="w-full h-[150%] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-12 md:pt-24">
              <div className="grid grid-cols-1 gap-12">
                <div className="h-[600px] md:h-[750px]">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000"
                    alt="Room View"
                    className="w-full h-full object-cover rounded-[2rem] shadow-lg"
                  />
                </div>
                <div className="h-[350px] md:h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1000"
                    alt="Glamping Tent"
                    className="w-full h-90 object-cover rounded-[2rem] shadow-lg"
                  />
                </div>
              </div>

              <div className="max-w-md space-y-6 pt-12">
                <p className="text-[#82917d] text-[12px] font-extralight tracking-[0.2em] uppercase">DEVELOPMENT</p>
                <h2 className="text-3xl md:text-4xl font-semibold font-playfair leading-tight text-[#1a1a1a]">
                  Hospitality That Starts <br /> With Ingenuity
                </h2>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Our portfolio showcases a diverse landscape of exceptional properties, from breathtaking resort layouts and rejuvenating spa retreats to exclusive private clubs, vibrant urban experiences, and opulent...
                </p>
                <Button variant="outline" className="border-[#82917d] text-[#82917d] hover:bg-[#82917d] hover:text-white rounded-full px-8 py-2 text-xs font-semibold h-auto">
                  Read More
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
