export default function Services() {
  const services = [
    { title: "General Dentistry", desc: "Cleanings, exams, and preventive care for the whole family.", icon: "🦷" },
    { title: "Cosmetic Dentistry", desc: "Veneers, whitening, and smile design for confident smiles.", icon: "✨" },
    { title: "Dental Implants", desc: "Modern implant solutions to replace missing teeth.", icon: "🛠️" },
    { title: "Periodontal Care", desc: "Laser-assisted therapy and maintenance for healthy gums.", icon: "❤️" },
  ];
  return (
    <section id="services" className="bg-[#F7F7F7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2E2E2E]">Comprehensive Dentistry</h2>
        <p className="mt-2 text-[#333333]/80 max-w-2xl">State-of-the-art care including CAD/CAM same-day restorations, laser gum therapy, and precision implant dentistry.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-lg p-5 shadow-sm border border-black/5">
              <div className="text-2xl" aria-hidden>{s.icon}</div>
              <h3 className="mt-3 font-semibold text-[#2E2E2E]">{s.title}</h3>
              <p className="text-sm text-[#333333]/80 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
