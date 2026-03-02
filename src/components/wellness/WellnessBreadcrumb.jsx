import { Fade } from './WellnessFade';

export default function WellnessBreadcrumb() {
  return (
    <div className="text-center pt-20 pb-[52px]">
      <Fade>
        <h1 className="font-[family-name:var(--font-header)] font-serifCustom text-[clamp(38px,4.5vw,54px)] font-bold text-primaryDark leading-[1.1]">
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
