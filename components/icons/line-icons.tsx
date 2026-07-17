import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function CartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 5h2l1.4 9.2h9.8L19 8H7" />
      <circle cx="9.2" cy="18.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.8" cy="18.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M5 7h14M5 12h10M5 17h7" />
    </svg>
  );
}

export function ArrowIcon({ direction = "right", ...props }: IconProps & { direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <path d={direction === "right" ? "M4 12h15m-5-5 5 5-5 5" : "M20 12H5m5 5-5-5 5-5"} />
    </svg>
  );
}

export function FeatureIcon({ type, ...props }: IconProps & { type: "glow" | "form" | "material" | "detail" }) {
  const paths = {
    glow: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" /></>,
    form: <><path d="m12 3 7 4v8l-7 4-7-4V7l7-4Z" /><path d="m5 7 7 4 7-4M12 11v8" /></>,
    material: <><path d="M12 3 5 6v5c0 4.4 3 8.5 7 10 4-1.5 7-5.6 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    detail: <><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 4V2m6 2V2M9 17h6" /></>,
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>{paths[type]}</svg>;
}
