import { Fade } from './WellnessFade';

const SERVICES = [
  {
    tag: 'SOOTHE YOUR SOUL',
    title: 'Spa Treatment',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa penatibus et...',
    hours: '10 am – 8 pm',
    img: 'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/ada18ed3d7af2cf71cf1a6344389cc5b9890ebc3-1536x1024.jpg',
  },
  {
    tag: 'KEEP UP YOUR HEALTHY ROUTINE',
    title: 'Personal Training',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa penatibus et...',
    hours: '10 am – 8 pm',
    img: 'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/d6e2808f199cd27ba29cbee2e8dabccbc96c831f-1536x1024.jpg',
  },
  {
    tag: 'SOOTHE YOUR SOUL',
    title: 'Steam Baths',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa penatibus et...',
    hours: '10 am – 8 pm',
    img: 'https://sailing.thimpress.com/demo-mountain-hotel/wp-content/uploads/sites/27/2025/06/46299c1cbfbbb09a76dee1c02f7872aade58cb3e-1536x864.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section className="pt-20 pb-24">
      <div className="container mx-auto max-w-[1280px] px-5 md:px-10">
        <Fade>
          <div className="text-center mb-[52px]">
            <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-accentGreen mb-[14px] leading-none">
              Enjoy Your Wellness Journey
            </p>
            <h2 className="font-[family-name:var(--font-header)] text-[clamp(28px,3vw,44px)] font-bold text-primaryDark leading-[1.12]">
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
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accentGreen mb-2">
                    {s.tag}
                  </p>
                  <h3 className="font-[family-name:var(--font-header)] text-[clamp(22px,1.9vw,28px)] font-bold text-primaryDark leading-[1.15] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[15px] text-[#555] leading-[1.78] mb-[14px]">{s.desc}</p>
                  <p className="text-[15px] text-[#888] mb-[18px]">
                    Opening hours: {s.hours}
                  </p>
                  <a
                    href="#"
                    className="text-[15px] font-semibold text-accentGreen no-underline border-b border-transparent inline-block transition-all duration-200 hover:border-accentGreen hover:text-[#2e4a26]"
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
