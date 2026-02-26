import { NavLink } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const HERO_IMAGE =
  "https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/58c6981fd8826441d3b9cbef2ee5c60b0c3485ef-scaled.jpg";

export default function Meetings() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-main">

      {/* Hero */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Meeting & Events"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />

        {/* Title card overlapping bottom of image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-xl">
          <div className="bg-card text-card-foreground rounded-t-2xl px-8 py-8 text-center shadow-xl transition-colors duration-300">
            <h1 className="text-3xl sm:text-4xl font-header font-medium mb-3 text-foreground">
              Meeting &amp; Events
            </h1>
            <Breadcrumb>
              <BreadcrumbList className="justify-center text-sm">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary transition-colors"
                      }
                    >
                      Home
                    </NavLink>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-border">/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-muted-foreground">
                    Events, Meetings
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

    </div>
  );
}
