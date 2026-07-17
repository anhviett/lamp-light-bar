import { useId } from "react";

type Finish = "champagne" | "graphite" | "silver";
type Temperature = 2700 | 3000 | 4000;

type LampPreviewProps = {
  finish: Finish;
  brightness: number;
  temperature: Temperature;
};

const finishColors = {
  champagne: {
    highlight: "#f4eee2",
    base: "#cfc2ae",
    shadow: "#80715d",
    edge: "#5f5345",
  },
  graphite: {
    highlight: "#777b7e",
    base: "#35383a",
    shadow: "#151719",
    edge: "#0b0c0d",
  },
  silver: {
    highlight: "#f5f5f4",
    base: "#aaacad",
    shadow: "#5e6163",
    edge: "#343638",
  },
};

const glowColors = {
  2700: "#f4bf78",
  3000: "#ffe1ae",
  4000: "#e5f1ff",
};

export function LampPreview({ finish, brightness, temperature }: LampPreviewProps) {
  const id = useId();
  const colors = finishColors[finish];
  const glow = glowColors[temperature];
  const intensity = brightness / 100;
  const ledOpacity = 0.08 + intensity * 0.92;
  const beamOpacity = 0.03 + intensity * 0.72;
  const beamScale = 0.78 + intensity * 0.48;
  const blurDeviation = 8 + intensity * 12;
  const bodyGradientId = `${id}-body`;
  const clipGradientId = `${id}-clip`;
  const beamGradientId = `${id}-beam`;
  const blurFilterId = `${id}-blur`;
  const glowFilterId = `${id}-glow`;

  return (
    <div
      className="relative flex min-h-[17rem] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f6f3ee] px-4 pt-5 sm:min-h-[22rem]"
      aria-hidden="true"
    >
      <svg
        className="h-auto w-full max-w-[50rem]"
        viewBox="0 0 800 400"
        role="presentation"
      >
        <defs>
          <linearGradient id={bodyGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.highlight} />
            <stop offset="30%" stopColor={colors.base} />
            <stop offset="70%" stopColor={colors.shadow} />
            <stop offset="100%" stopColor={colors.edge} />
          </linearGradient>
          <linearGradient id={clipGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.shadow} />
            <stop offset="50%" stopColor={colors.base} />
            <stop offset="100%" stopColor={colors.edge} />
          </linearGradient>
          <linearGradient id={beamGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={0.85 * beamOpacity} />
            <stop offset="20%" stopColor={glow} stopOpacity={0.5 * beamOpacity} />
            <stop offset="60%" stopColor={glow} stopOpacity={0.15 * beamOpacity} />
            <stop offset="100%" stopColor={glow} stopOpacity="0" />
          </linearGradient>
          <filter id={blurFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={blurDeviation} />
          </filter>
          <filter id={glowFilterId} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation={2 + intensity * 3} />
          </filter>
        </defs>

        <g transform={`translate(400 82) scale(${beamScale} 1) translate(-400 -82)`}>
          <polygon
            points="160,82 640,82 780,380 20,380"
            fill={`url(#${beamGradientId})`}
            filter={`url(#${blurFilterId})`}
          />
        </g>

        <g>
          <rect x="365" y="75" width="70" height="35" rx="4" fill={`url(#${clipGradientId})`} />
          <rect x="380" y="65" width="40" height="15" fill={colors.edge} />
          <rect x="140" y="50" width="520" height="32" rx="6" fill={`url(#${bodyGradientId})`} stroke={colors.edge} strokeWidth="1" />
          <ellipse cx="142" cy="66" rx="3" ry="15" fill={colors.shadow} stroke={colors.edge} />
          <ellipse cx="658" cy="66" rx="3" ry="15" fill={colors.shadow} stroke={colors.edge} />
          <rect x="150" y="72" width="500" height="3" fill={colors.edge} />
        </g>

        <g opacity={ledOpacity}>
          <rect
            x="152"
            y="75"
            width="496"
            height="6"
            rx="1"
            fill={glow}
            filter={`url(#${glowFilterId})`}
          />
          <rect x="155" y="76" width="490" height="4" rx="1" fill="#fffde8" />
        </g>
      </svg>
    </div>
  );
}
