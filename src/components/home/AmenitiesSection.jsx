import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Waves, Flower2, UtensilsCrossed, Landmark, Anchor, UserCheck } from "lucide-react";

// ... (amenities array remains the same above)
const amenities = [
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Nile View Infinity Pool",
    description: "Relax in our climate-controlled infinity pool overlooking the majestic Nile River and the West Bank mountains.",
    delay: 0.1
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: "Royal Spa & Wellness",
    description: "Indulge in ancient Egyptian-inspired treatments and modern therapy in our state-of-the-art wellness center.",
    delay: 0.2
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: "Fine Dining Restaurant",
    description: "Savor a fusion of local Egyptian flavors and international cuisine prepared by our award-winning chefs.",
    delay: 0.3
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Heritage Concierge",
    description: "Exclusive access to private tours of Luxor's ancient wonders with our expert Egyptologists.",
    delay: 0.4
  },
  {
    icon: <Anchor className="w-8 h-8" />,
    title: "Private River Transport",
    description: "Traditional feluccas and luxury motorboats available 24/7 for private crossings and sunset cruises.",
    delay: 0.5
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "24/7 Royal Butler",
    description: "Personalized service tailored to your every need, ensuring a seamless and regal stay from check-in to check-out.",
    delay: 0.6
  }
];

export default function AmenitiesSection() {
  const containerRef = useRef(null);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] // Start animating when top hits center, finish when bottom hits center
  });

  // Add a spring physics effect for smoother filling
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="amenities" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary text-sm font-bold uppercase tracking-widest"
          >
            World-Class Facilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-header font-bold text-foreground"
          >
            Elevate Your Experience
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-1 bg-secondary mx-auto rounded-full"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Line Background (Faded) */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-secondary/10 hidden md:block" />
          
          {/* Animated Filling Line */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-secondary to-primary hidden md:block origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-12 md:space-y-0">
            {amenities.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between mb-8 md:mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* 1. Content Card */}
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -40 : 40,
                    filter: "blur(10px)" 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    filter: "blur(0px)" 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="w-full md:w-[45%] p-8 bg-card/40 backdrop-blur-md rounded-[2rem] shadow-xl border border-secondary/10 hover:border-secondary transition-all group relative z-10"
                >
                  <div className="mb-6 p-4 bg-secondary/10 rounded-2xl w-fit text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-header font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>

                {/* 2. Central Circle (Visible on md and up) */}
                <motion.div 
                  initial={{ scale: 0, backgroundColor: "rgba(var(--background), 1)" }}
                  whileInView={{ scale: 1, backgroundColor: "var(--secondary)" }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }} // Triggers closer to the center of viewport
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                  className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-background hidden md:flex items-center justify-center z-20 shadow-lg"
                  style={{
                     // Start as hollow/border-only, fill with secondary color when scrolled into view
                     backgroundColor: 'transparent',
                     borderColor: 'hsl(var(--secondary))',
                  }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-3 h-3 rounded-full bg-secondary" 
                  />
                </motion.div>

                {/* 3. Empty spacer for the other side */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
