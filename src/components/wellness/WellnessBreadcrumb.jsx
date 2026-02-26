import { Fade } from './WellnessFade';

export default function WellnessBreadcrumb() {
  return (
    <div className="text-center pb-[52px]">
      <Fade>
        <h1 className="font-header font-serifCustom text-[clamp(38px,4.5vw,54px)] font-bold text-foreground leading-[1.1]">
          Wellness &amp; Spa
        </h1>
        <p className="text-[15px] text-foreground mt-4">
          <span className="text-foreground">Home</span>
          <span className="mx-[10px] text-foreground">/</span>
          <span className="text-foreground/50">Wellness &amp; Spa</span>
        </p>
      </Fade>
    </div>
  );
}
