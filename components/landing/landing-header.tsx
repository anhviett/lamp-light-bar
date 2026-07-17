"use client";
import { useState } from "react";
import { CartIcon, MenuIcon } from "@/components/icons/line-icons";
import { navigation } from "@/components/landing/landing-data";

export function LandingHeader() {
  const [isToggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="landing-header">
      <a className="wordmark" href="#top" aria-label="Luminance home">
        luminance<span>.</span>
      </a>
      <nav
        className={`primary-nav ${isToggleMenu ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        {navigation.map((item, index) => (
          <a
            className={index === 0 ? "is-active" : undefined}
            href={`#${item.toLowerCase()}`}
            key={item}
            onClick={() => setToggleMenu(false)}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="header-tools" aria-label="Store tools">
        <span aria-label="Shopping bag" role="img">
          <CartIcon aria-hidden="true" />
        </span>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={isToggleMenu}
          onClick={() => {
            return setToggleMenu((previous) => !previous);
          }}
        >
          <MenuIcon className="md:hidden" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
