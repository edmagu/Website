const logos = ["/next.svg", "/vercel.svg", "/file.svg", "/window.svg", "/globe.svg"];

export default function LogoWall() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Trusted by Industry Leaders</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-80">
        {logos.map(src => (
          <img key={src} src={src} alt="logo" className="h-10 object-contain mx-auto" />
        ))}
      </div>
    </section>
  );
}
