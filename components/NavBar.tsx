export default function NavBar() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-bold tracking-tight">YourBrand</a>
        <div className="flex gap-6 text-sm">
          <a href="/our-story" className="hover:underline">Our Story</a>
          <a href="/webinar" className="px-3 py-1.5 rounded-lg bg-black text-white">Register</a>
        </div>
      </nav>
    </header>
  );
}
