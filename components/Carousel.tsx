"use client";
import { useEffect, useState } from "react";

const imgs = ["/next.svg", "/vercel.svg", "/globe.svg"]; // just reuse built-in SVGs for now

export default function Carousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % imgs.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <img src={imgs[i]} alt="slide" className="w-full h-40 object-contain rounded-lg" />
      </div>
    </section>
  );
}
