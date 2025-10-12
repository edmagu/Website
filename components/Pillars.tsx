const pillars = [
  { title: "AI Literacy", desc: "Understand the coming changes." },
  { title: "Career Ark", desc: "Job transition pathways." },
  { title: "Industry Framework", desc: "IoT/AI integration systems." },
  { title: "Assisted Living", desc: "AR support solutions." },
];

export default function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-bold mb-6 text-center">Transformation Pillars</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {pillars.map(p => (
          <div key={p.title} className="p-6 rounded-xl border hover:shadow-sm text-center">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
