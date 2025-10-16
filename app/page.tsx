import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Pillars from "@/components/Pillars";
import LogoWall from "@/components/LogoWall";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Carousel />
      <Pillars />
      <LogoWall />
      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <a href="/webinar" className="px-6 py-3 rounded-lg bg-black text-white">Board the Ark Today</a>
      </section>
    </main>
  );
}
