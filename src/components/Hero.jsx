import { motion } from "framer-motion";

export default function Hero({ onBook }) {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#6e0f1b]/10 to-[#b08a57]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#7A8C7C]/10 to-[#b08a57]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="uppercase tracking-[0.2em] text-xs text-[#7A8C7C]">Temecula • Murrieta</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#2E2E2E] leading-tight">
            Modern Dental Care in Temecula
          </h1>
          <p className="mt-4 text-lg text-[#333333]/80 max-w-xl">
            Paris Dental delivers technology-driven dentistry with a patient-first approach.
            From preventive care to cosmetic makeovers and implants, we create healthy, confident smiles.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button onClick={onBook} className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#6e0f1b] text-white hover:bg-[#5d0d17] transition">
              Book Appointment
            </button>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-[#b08a57]/40 text-[#2E2E2E] hover:bg-white/60 transition">
              Explore Services
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-white">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop" alt="Modern dental studio interior" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
