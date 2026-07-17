import { socialLinks } from "@/components/landing/landing-data";

export function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Luminance social channels">
      {socialLinks.map((label) => (
        <span aria-hidden="true" key={label}>
          {label}
        </span>
      ))}
    </aside>
  );
}
