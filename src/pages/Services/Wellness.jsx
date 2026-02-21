import { useState, useEffect, useRef } from 'react';
import { 
  Wifi, 
  Waves, 
  Wind, 
  Droplets, 
  RefreshCw, 
  Cloud, 
  Flame, 
  Snowflake, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const IMG = {
  pool_hero:
    'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/Wellness.png',
  waterfall:
    'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/siwming1.png',
  pool_stairs:
    'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/siwming2.png',
  spa_sauna:
    'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/06e2dc24df4e521fc73e8af4e0c01cb49afaf675-1536x1025.jpg',
  fitness:
    'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/b4936f5062d4eda7f652d5ab25d89c23e5def68d-1536x1024.jpg',
  spa_treatment:
    'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/ada18ed3d7af2cf71cf1a6344389cc5b9890ebc3-1536x1024.jpg',
  personal_training:
    'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/d6e2808f199cd27ba29cbee2e8dabccbc96c831f-1536x1024.jpg',
  steam_baths:
    'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/46299c1cbfbbb09a76dee1c02f7872aade58cb3e-1536x864.jpg',
};

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Fade({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const AMENITIES = [
  { label: 'Indoor Pool (29° C)', icon: 'wifi' },
  { label: "Children's Pool (34° C)", icon: 'pool' },
  { label: 'Open-Air-Pool (34° C)', icon: 'air' },
  { label: 'Salt Water Grotto (45° C)', icon: 'salt' },
  { label: 'Whirlpool (34° C)', icon: 'swirl' },
  { label: 'Steam Baths (45° C)', icon: 'steam' },
  { label: 'Finnish Sauna (90° C)', icon: 'sauna' },
  { label: 'Ice Fountain (12° C)', icon: 'ice' },
];

function AmenityIcon({ type }) {
  const iconProps = {
    className: 'w-[18px] h-[18px] shrink-0 mt-[1px] text-accentGreen',
    strokeWidth: 1.6,
  };

  const icons = {
    wifi: <Wifi {...iconProps} />,
    pool: <Waves {...iconProps} />,
    air: <Wind {...iconProps} />,
    salt: <Droplets {...iconProps} />,
    swirl: <RefreshCw {...iconProps} />,
    steam: <Cloud {...iconProps} />,
    sauna: <Flame {...iconProps} />,
    ice: <Snowflake {...iconProps} />,
  };
  return icons[type] || <Wifi {...iconProps} />;
}

const HOURS = [
  { label: 'Pool & Fitness', time: '07.00 – 20.00 h' },
  { label: 'Earlier upon request', time: '5:00h' },
  { label: 'Treatments in Summer', time: '850m' },
  { label: 'Treatments in Winter', time: '08.00 – 20.00 h' },
  { label: 'Saunas', time: '16.00 – 20.00 h' },
];

const SERVICES = [
  {
    tag: 'SOOTHE YOUR SOUL',
    title: 'Spa Treatment',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa penatibus et...',
    hours: '10 am – 8 pm',
    img: IMG.spa_treatment,
  },
  {
    tag: 'KEEP UP YOUR HEALTHY ROUTINE',
    title: 'Personal Training',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa penatibus et...',
    hours: '10 am – 8 pm',
    img: IMG.personal_training,
  },
  {
    tag: 'SOOTHE YOUR SOUL',
    title: 'Steam Baths',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa penatibus et...',
    hours: '10 am – 8 pm',
    img: IMG.steam_baths,
  },
];

/* ════ NAVBAR ════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] bg-white/98 backdrop-blur-[10px] transition-all duration-300 ${
        scrolled ? 'border-b border-[#e8e1d6] shadow-[0_2px_20px_rgba(0,0,0,0.07)]' : 'border-b border-transparent shadow-none'
      }`}
    >
      <div className="container mx-auto max-w-[1280px] px-5 md:px-10 h-[72px] flex items-center justify-between">
        <span className="font-serifCustom text-[22px] font-bold text-primaryDark tracking-[0.3px]">
          Mountain Hotel
        </span>
        <nav className="hidden md:flex gap-10">
          {['Home', 'Rooms', 'Wellness & Spa', 'Dining', 'Contact'].map(
            (n) => (
              <a
                key={n}
                href="#"
                className={`font-sansCustom text-[14.5px] tracking-[0.2px] transition-colors duration-200 ${
                  n === 'Wellness & Spa' ? 'font-semibold text-primaryDark' : 'font-normal text-[#666] hover:text-primaryDark'
                }`}
              >
                {n}
              </a>
            )
          )}
        </nav>
        <button className="font-sansCustom bg-primaryDark text-white border-none rounded-[3px] px-[26px] py-[10px] text-[14px] font-semibold tracking-[0.5px] cursor-pointer hover:bg-[#4a6741]">
          Book Now
        </button>
      </div>
    </header>
  );
}

/* ════ BREADCRUMB ════ */
function Breadcrumb() {
  return (
    <div className="text-center pt-20 pb-[52px]">
      <Fade>
        <h1 className="font-serifCustom text-[clamp(38px,4.5vw,54px)] font-bold text-primaryDark leading-[1.1]">
          Wellness &amp; Spa
        </h1>
        <p className="font-sansCustom text-[15px] text-[#aaa] mt-4">
          <span className="text-[#555]">Home</span>
          <span className="mx-[10px] text-[#ccc]">/</span>
          <span>Wellness &amp; Spa</span>
        </p>
      </Fade>
    </div>
  );
}

/* ════ SECTION 1 — Water Pools ════ */
function SectionWaterPools() {
  return (
    <section className="font-sansCustom pb-[28px]">
      <div className="container mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <Fade>
            <div className="bg-[#F6F7F6] rounded-[8px] p-[52px_48px] h-full box-border">
              <p className="text-[14px] tracking-wide uppercase text-[#777] mb-3">
                Water Pools
              </p>
              <h2 className="text-[clamp(26px,2.5vw,36px)] font-bold text-primaryDark leading-[1.15] mb-[20px]">
                Wellness At Mountain Hotel
              </h2>
              <p className="text-[16px] text-[#555] leading-[1.8]">
                Step in and enjoy life with all your senses. In a fast paced
                world, the luxurious 2000m2 Kulm Spa St. Moritz presents itself
                as a haven and ideal hideaway for those seeking ultimate
                relaxation, comfort and harmony.
              </p>
              <h3 className="text-[20px] font-bold text-primaryDark mt-[36px] mb-[20px]">
                Amenities
              </h3>
              <div className="grid grid-cols-2 gap-y-[15px] gap-x-[12px]">
                {AMENITIES.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-start gap-[9px] text-[15px] text-[#444]"
                  >
                    <AmenityIcon type={a.icon} />
                    {a.label}
                  </div>
                ))}
              </div>
            </div>
          </Fade>
          <Fade delay={0.14}>
            <div className="rounded-[8px] overflow-hidden h-full min-h-[500px]">
              <img
                src={IMG.pool_hero}
                alt="Pool"
                className="w-full h-full object-cover block"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ════ SECTION 2 — Gallery + Opening Hours ════ */
function SectionGalleryHours() {
  return (
    <section className="pb-0">
      <div className="container mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] items-stretch">
          <div className="rounded-lg overflow-hidden min-h-[300px]">
            <img
              src={IMG.waterfall}
              alt="Waterfall"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="rounded-lg overflow-hidden min-h-[300px]">
            <img
              src={IMG.pool_stairs}
              alt="Pool stairs"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="bg-cardBeige rounded-lg p-9">
            <h3 className="font-serifCustom text-2xl font-bold mb-7 text-primaryDark">
              Opening Hours
            </h3>
            {HOURS.map((h, i) => (
              <div
                key={h.label}
                className={`flex justify-between py-[14px] ${
                  i < HOURS.length - 1 ? 'border-b border-[#e0d9ce]' : ''
                }`}
              >
                <span className="font-sansCustom text-sm text-gray-600">
                  {h.label}
                </span>
                <span className="font-sansCustom text-sm font-semibold text-primaryDark">
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════ IMAGE CARD ════ */
function ImageCard({ image, title }) {
  return (
    <div className="relative h-[420px] rounded-[16px] overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover brightness-[0.82] transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-[0.72]"
      />
      <div className="absolute bottom-0 left-0 w-full p-[70px_28px_24px] bg-gradient-to-t from-black/52 to-transparent pointer-events-none">
        <h3 className="font-serifCustom text-[22px] font-bold text-white m-0">
          {title}
        </h3>
      </div>
    </div>
  );
}

/* ════ ARROW ════ */
function Arrow({ direction }) {
  const isLeft = direction === 'left';
  const Icon = isLeft ? ChevronLeft : ChevronRight;
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full border border-[#ddd] bg-white/90 backdrop-blur-[6px] flex items-center justify-center cursor-pointer text-[#333] shadow-[0_2px_14px_rgba(0,0,0,0.12)] z-[3] hover:bg-white transition-colors duration-200 ${
        isLeft ? '-left-[24px]' : '-right-[24px]'
      }`}
    >
      <Icon size={20} />
    </button>
  );
}

/* ════ SECTION 3 — Wellness Journey ════ */
function SectionWellnessJourney() {
  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mb-[60px] items-start">
          <div>
            <div className="font-sansCustom text-[13px] font-semibold tracking-[0.2em] uppercase text-accentGreen mb-4">
              ENJOY YOUR WELLNESS JOURNEY
            </div>
            <h2 className="font-serifCustom text-[clamp(36px,4vw,52px)] leading-[1.1] font-bold text-primaryDark">
              Enjoy Your Wellness
              <br />
              Journey
            </h2>
          </div>
          <div className="font-sansCustom text-[16.5px] leading-[1.85] text-[#555] pt-[2px]">
            Step in and enjoy life with all your senses. In a fast paced world,
            the luxurious 2000m2 Kulm Spa St. Moritz presents itself as a haven
            and ideal hideaway for those seeking ultimate relaxation, comfort
            and harmony. Experience the aromas of fine pine wood, the unique
            views over Lake St. Moritz and let your mind wander.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
          <ImageCard image={IMG.spa_sauna} title="Spa And Sauna" />
          <ImageCard image={IMG.fitness} title="Fitness Center" />
          <Arrow direction="left" />
          <Arrow direction="right" />
        </div>
      </div>
    </section>
  );
}

/* ════ SECTION 4 — Services ════ */
function SectionServices() {
  return (
    <section className="pt-20 pb-24">
      <div className="container mx-auto max-w-[1280px] px-5 md:px-10">
        <Fade>
          <div className="text-center mb-[52px]">
            <p className="font-sansCustom text-[12px] font-semibold tracking-[0.18em] uppercase text-accentGreen mb-[14px] leading-none">
              Enjoy Your Wellness Journey
            </p>
            <h2 className="font-serifCustom text-[clamp(28px,3vw,44px)] font-bold text-primaryDark leading-[1.12]">
              Enjoy Your Wellness Journey
            </h2>
          </div>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-start">
          {SERVICES.map((s, i) => (
            <Fade key={s.title} delay={i * 0.1}>
              <div>
                <div className="rounded-[8px] overflow-hidden h-[290px] group">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pt-6">
                  <p className="font-sansCustom text-[11px] font-semibold tracking-[0.18em] uppercase text-accentGreen mb-2">
                    {s.tag}
                  </p>
                  <h3 className="font-serifCustom text-[clamp(22px,1.9vw,28px)] font-bold text-primaryDark leading-[1.15] mb-3">
                    {s.title}
                  </h3>
                  <p className="font-sansCustom text-[15px] text-[#555] leading-[1.78] mb-[14px]">
                    {s.desc}
                  </p>
                  <p className="font-sansCustom text-[15px] text-[#888] mb-[18px]">
                    Opening hours: {s.hours}
                  </p>
                  <a
                    href="#"
                    className="font-sansCustom text-[15px] font-semibold text-[#4a6741] no-underline border-b border-transparent inline-block transition-all duration-200 hover:border-[#4a6741] hover:text-[#2e4a26]"
                  >
                    Request Information
                  </a>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════ FOOTER ════ */
function Footer() {
  return (
    <footer className="bg-primaryDark py-11">
      <div className="container mx-auto max-w-[1280px] px-5 md:px-10 text-center">
        <p className="font-serifCustom text-white text-[22px] tracking-[1px] mb-[10px]">
          Mountain Hotel
        </p>
        <p className="font-sansCustom text-[14px] text-[#777]">
          © 2026 Mountain Hotel · All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default function WellnessSpa() {
  return (
    <div className="font-sansCustom bg-white text-primaryDark antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-[72px]">
        <Breadcrumb />
        <SectionWaterPools />
        <SectionGalleryHours />
        <SectionWellnessJourney />
        <SectionServices />
      </main>
      <Footer />
    </div>
  );
}
