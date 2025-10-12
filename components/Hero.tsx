export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Navigate the AI Flood
      </h1>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Innovative problem-solving at the crossroads of technology and infrastructure.
      </p>
      <div className="mt-8 flex gap-3 justify-center">
        <a href="/webinar" className="px-5 py-3 rounded-lg bg-black text-white">Register for the Webinar</a>
        <a href="/our-story" className="px-5 py-3 rounded-lg border">Our Story</a>
      </div>
    </section>
  );
}
