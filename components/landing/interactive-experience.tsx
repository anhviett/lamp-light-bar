"use client";

import { useState } from "react";
import { LampPreview } from "@/components/landing/lamp-preview";

const finishes = [
  { value: "champagne", label: "Champagne", color: "#d8cabc" },
  { value: "graphite", label: "Graphite", color: "#303030" },
  { value: "silver", label: "Silver", color: "#bfc0bf" },
] as const;

const temperatures = [2700, 3000, 4000] as const;

type Finish = (typeof finishes)[number]["value"];
type Temperature = (typeof temperatures)[number];

export function InteractiveExperience() {
  const [finish, setFinish] = useState<Finish>("champagne");
  const [brightness, setBrightness] = useState(62);
  const [temperature, setTemperature] = useState<Temperature>(2700);

  return (
    <section className="mt-3 grid overflow-hidden rounded-2xl bg-[#f4f2ee] p-6 sm:p-9 lg:grid-cols-[0.72fr_1.2fr_0.8fr] lg:items-center lg:gap-7" id="experience" aria-labelledby="experience-heading">
      <div>
        <p className="text-[0.58rem] font-semibold uppercase tracking-wide text-stone-500">Interactive experience</p>
        <h2 className="mt-3 font-serif text-2xl leading-[1.08] tracking-tight text-stone-800 sm:text-3xl" id="experience-heading">Shape the light<br />to your moment.</h2>
        <ul className="mt-7 space-y-4 text-[0.68rem] text-stone-500">
          <li className="flex flex-col"><strong className="text-xs text-stone-800">Rotate</strong><span>Drag to rotate the lamp</span></li>
          <li className="flex flex-col"><strong className="text-xs text-stone-800">Brightness</strong><span>Adjust to your preference</span></li>
          <li className="flex flex-col"><strong className="text-xs text-stone-800">Light temperature</strong><span>Choose your ambiance</span></li>
        </ul>
      </div>
      <LampPreview finish={finish} brightness={brightness} temperature={temperature} />
      <form className="mt-6 space-y-7 lg:mt-0" onSubmit={(event) => event.preventDefault()}>
        <fieldset>
          <legend className="text-[0.6rem] font-semibold uppercase tracking-wide text-stone-700">Finish</legend>
          <div className="mt-3 flex gap-4">
            {finishes.map((option) => (
              <label className="flex min-w-12 cursor-pointer flex-col items-center gap-1 text-[0.55rem] text-stone-600" key={option.value}>
                <input className="peer sr-only" type="radio" name="finish" value={option.value} checked={finish === option.value} onChange={() => setFinish(option.value)} />
                <span className="h-8 w-8 rounded-full border-2 border-transparent shadow-sm transition peer-checked:border-stone-800 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#ee5660]" style={{ background: option.color }} />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-[0.6rem] font-semibold uppercase tracking-wide text-stone-700">Brightness</legend>
          <div className="mt-3 flex items-center gap-2 text-sm text-stone-700">
            <span aria-hidden="true">☼</span>
            <input className="h-8 w-full cursor-pointer accent-stone-800" type="range" min="0" max="100" value={brightness} aria-label="Brightness" onChange={(event) => setBrightness(Number(event.target.value))} />
            <span aria-hidden="true">☀</span>
          </div>
          <output className="mt-1 block text-[0.6rem] text-stone-500">{brightness}% brightness</output>
        </fieldset>
        <fieldset>
          <legend className="text-[0.6rem] font-semibold uppercase tracking-wide text-stone-700">Light temperature</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {temperatures.map((value) => (
              <label className="cursor-pointer" key={value}>
                <input className="peer sr-only" type="radio" name="temperature" value={value} checked={temperature === value} onChange={() => setTemperature(value)} />
                <span className="block min-w-14 rounded-full border border-stone-300 px-3 py-2 text-center text-[0.62rem] font-semibold text-stone-600 transition peer-checked:border-stone-800 peer-checked:bg-stone-800 peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#ee5660]">{value}K</span>
              </label>
            ))}
          </div>
        </fieldset>
      </form>
    </section>
  );
}
