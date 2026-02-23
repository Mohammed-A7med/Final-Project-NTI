import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink } from "react-router-dom";


export default function Contact() {
  return (
    <>
      <section className="container  mt-16   text-center">
        {/* Header  */}
        <div className="flex flex-col items-center py-16 justify-center">
          <h1 className="text-5xl font-serif font-medium mb-6">Contact Us</h1>

          <Breadcrumb>
            <BreadcrumbList className="text-lg">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-muted-foreground hover:text-primary transition-colors"
                    }
                  >
                    Home
                  </NavLink>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-foreground">Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* map  */}
        <div className=" w-full h-112.5 relative overflow-hidden">
          <div className="absolute inset-0 grayscale invert opacity-80 contrast-125">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Contact section  */}
        <div className="container p-6 md:p-10 lg:px-24 text-left flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            {/* header */}
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Get in touch</p>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
                We Are Always Ready To Help You And Answer Your Questions
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling
                sleeper.
              </p>
            </div>

            {/* contact details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 mt-10">
              {/* Hotline */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold">Hotline</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>+ (123) 1800 234 5678</p>
                  <p>+ (123) 1800 666 6789</p>
                </div>
              </div>
              {/* Location */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold">Location</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>USA, New York – 1060</p>
                  <p>Str. First Avenue 1</p>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold">Email</h3>
                <p className="text-muted-foreground">moutain.sailing@gmail.com</p>
              </div>

              {/* Social Network */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold">Social Network</h3>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <i className="fa-brands fa-facebook-f text-sm"></i>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <i className="fa-brands fa-twitter text-sm"></i>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <i className="fa-brands fa-linkedin-in text-sm"></i>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <i className="fa-brands fa-instagram text-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="static lg:absolute lg:-bottom-70 left-0 w-full bg-[#f9fbfb] p-6 md:p-12 rounded-2xl shadow-sm border border-gray-50">
              <form className="space-y-6">
                <div className="">
                  <h1 className="text-3xl py-3">Get in touch</h1>
                  {/* input Name */}
                  <div className="space-y-2 ">
                    <label className="text-sm font-semibold text-gray-700">Name*</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da399]/20 focus:border-[#8da399] transition-all"
                    />
                  </div>
                  {/* input Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email*</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da399]/20 focus:border-[#8da399] transition-all"
                    />
                  </div>
                </div>
                {/* input Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da399]/20 focus:border-[#8da399] transition-all"
                  />
                </div>
                {/* input Message */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Enter your message"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8da399]/20 focus:border-[#8da399] transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-[#8da399] text-white px-12 py-4 rounded-full font-bold hover:bg-[#768b82] transition-all transform hover:-translate-y-1 shadow-md active:scale-95">
                  Send A Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
