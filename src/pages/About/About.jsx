import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./About.css";

export default function About() {
  const testimonials = [
    {
      quote: "Lovely hotel, the staff are amazing! We had an amazing stay at Rixos Saadiyat Island! We loved every minute and didn't want to leave! We will definitely be back!",
      author: "Ana Bayne",
      title: "Executive Manager"
    },
    {
      quote: "The winter activities were beyond our expectations. From skiing to cozy evenings by the fire, everything was perfect. A truly magical experience!",
      author: "Mark J.",
      title: "Travel Blogger"
    },
    {
      quote: "Absolute luxury in the heart of the mountains. The attention to detail and hospitality made our winter retreat unforgettable. Highly recommend!",
      author: "Sarah L.",
      title: "Guest"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="about-section">
      <div className="about-hero-grid">
        <div className="about-text-content">
          <h1 className="about-heading">
            Discover Serenity At <br />
            Mountain Hotel: Your <br />
            Peak Retreat Awaits!
          </h1>
          <p className="about-description">
            Discover Serenity at Mountain Hotel: Your Peak Retreat Awaits!
          </p>
          <Button className="about-btn">
            Contact Us
          </Button>
        </div>

        <div className="grid-item item-sky">
          <img
            src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=800"
            alt="Sky View"
          />
        </div>

        <div className="grid-item item-mountain">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
            alt="Mountain Peaks"
          />
        </div>

        <div className="grid-item item-hotel">
          <img
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800"
            alt="Hotel Exterior"
          />
        </div>

        <div className="grid-item item-forest">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
            alt="Forest Path"
          />
        </div>

        <div className="grid-item item-landscape">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800"
            alt="Mountain Landscape"
          />
        </div>

        <div className="grid-item item-small-1">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400"
            alt="Peak Detail"
          />
        </div>

        <div className="grid-item item-small-2 ">
          <img
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=400"
            alt="Scenic Detail"
          />
        </div>


        <div className="watermark">
          <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">

            <path d="M50 150 L120 40 L180 110 L220 30 L280 150" stroke="#8fa194" strokeWidth="4" strokeLinejoin="round" />

            <path d="M30 160 L100 80 L140 130" stroke="#8fa194" strokeWidth="3" opacity="0.5" />

            <path d="M230 150 L230 120 M215 145 L230 120 L245 145" stroke="#8fa194" strokeWidth="3" />

            <rect x="250" y="130" width="12" height="12" stroke="#8fa194" strokeWidth="2" />
            <path d="M256 130 V142 M250 136 H262" stroke="#8fa194" strokeWidth="1" />

            <circle cx="200" cy="50" r="12" stroke="#8fa194" strokeWidth="3" />

            <path d="M50 170 H250 M70 180 H230 M90 190 H210" stroke="#8fa194" strokeWidth="2" opacity="0.3" />
          </svg>
        </div>
      </div>

      <div className="achievements-container">
        <div className="achievements-header">
          <span className="achievements-subtitle">OUR ACHIEVEMENTS</span>
          <h2 className="achievements-main-title">Our Achievements At A Glance</h2>
        </div>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3 className="achievement-number">75</h3>
            <p className="achievement-label">YEAR OF HOSPITALITY<br />EXCELLENCE</p>
          </div>
          <div className="achievement-card">
            <h3 className="achievement-number">120k</h3>
            <p className="achievement-label">GUESTS WELCOMED<br />WORLDWIDE</p>
          </div>
          <div className="achievement-card">
            <h3 className="achievement-number">9.5k</h3>
            <p className="achievement-label">UNIQUE LOCAL EXPERIENCES<br />HOSTED</p>
          </div>
          <div className="achievement-card">
            <h3 className="achievement-number">45</h3>
            <p className="achievement-label">INDUSTRY AWARDS &<br />RECOGNITIONS</p>
          </div>
        </div>
      </div>

      <div className="about-content-blocks">
        <div className="content-block history-block">
          <div className="block-text">
            <span className="block-tag">HISTORY</span>
            <h2 className="block-title">Elevate Your Stay:<br />Luxury Room Systems<br />At Our Mountain Hotel</h2>
            <p className="block-description">
              Our high-end rooms are designed to offer unparalleled<br /> comfort and sophistication, ensuring a truly memorable<br /> stay.
            </p>
            <Button className="about-btn-outline">Read More History</Button>
          </div>
          <div className="block-images-grid">
            <div className="main-image-v">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800" alt="Luxury Room" />
            </div>
            <div className="sub-images">
              <div className="sub-img-1">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400" alt="Resort View" />
              </div>
              <div className="sub-img-2">
                <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800" alt="Lounge Area" />
              </div>
            </div>
          </div>
        </div>

        <div className="content-block development-block">
          <div className="block-images-grid">
            <div className="main-image-v">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" alt="Hospitality View" />
            </div>
            <div className="sub-images">
              <div className="sub-img-1">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=400" alt="Outdoor Lounge" />
              </div>
            </div>
          </div>
          <div className="block-text">
            <span className="block-tag">DEVELOPMENT</span>
            <h2 className="block-title">Hospitality That Starts<br />With Ingenuity</h2>
            <p className="block-description">
              Our portfolio showcases a diverse range of<br /> exceptional properties, from breathtaking beach resorts to<br /> rejuvenating spa retreats in exclusive, private clubs,<br /> vibrant urban experiences, and vibrant...
            </p>
          </div>
        </div>
      </div>

      <section className="winter-activities">
        <div className="winter-container">
          <div className="testimonial-section">
            <span className="winter-tag">WINTER ACTIVITIES</span>
            <div className="carousel-wrapper">
              <button className="carousel-btn prev" onClick={prevTestimonial}>
                <ChevronLeft size={24} />
              </button>
              <div className="testimonial-content">
                <p className="testimonial-quote">
                  " {testimonials[currentTestimonial].quote} "
                </p>
                <h4 className="testimonial-author">{testimonials[currentTestimonial].author}</h4>
                <p className="testimonial-title">{testimonials[currentTestimonial].title}</p>
              </div>
              <button className="carousel-btn next" onClick={nextTestimonial}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="activities-gallery">
            <div className="act-img item-1">
              <img src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=600" alt="Winter View 1" />
            </div>
            <div className="act-img item-2">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600" alt="Winter View 2" />
            </div>
            <div className="act-img item-3">
              <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600" alt="Winter Hotel" />
            </div>
            <div className="act-img item-4">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600" alt="Winter Forest" />
            </div>
            <div className="act-img item-5">
              <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600" alt="Winter Landscape" />
            </div>
            <div className="act-img item-6">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600" alt="Winter Peak" />
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <h3 className="partners-title text-xl font-bold mb-5">Trust By 12,000+ World-Class Bands And Organization Of All Sizes</h3>
        <div className="partners-grid">
          <img src="https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2024/03/partner-01.png" alt="Partner 1" className="partner-logo" />
          <img src="https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2024/03/partner-02.png" alt="Partner 2" className="partner-logo" />
          <img src="https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2024/03/partner-03.png" alt="Partner 2" className="partner-logo" />
          <img src="https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2024/03/partner-04.png" alt="Partner 2" className="partner-logo" />
          <img src="https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2024/03/partner-05.png" alt="Partner 2" className="partner-logo" />
          <img src="https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2024/03/partner-06.png" alt="Partner 2" className="partner-logo" />
        </div>
      </section>


    </section >
  );
}
