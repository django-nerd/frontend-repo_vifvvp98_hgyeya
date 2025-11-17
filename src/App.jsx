import { useRef } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const contactRef = useRef(null);

  function scrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2E2E2E]">
      <header className="sticky top-0 z-40 backdrop-blur supports-backdrop-blur:bg-white/70 bg-white/60 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img alt="Paris Dental logo" src="/favicon.ico" className="w-8 h-8" />
            <span className="font-semibold">Paris Dental</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:19515749073" className="hidden sm:inline text-sm underline text-[#333]">Call (951) 574-9073</a>
            <button onClick={scrollToContact} className="px-4 py-2 rounded-md bg-[#6e0f1b] text-white hover:bg-[#5d0d17]">Book Appointment</button>
          </div>
        </div>
      </header>

      <main>
        <Hero onBook={scrollToContact} />
        <Services />
        <Testimonials />
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>

      <footer className="bg-[#2E2E2E] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold">Paris Dental</p>
            <p className="opacity-80 mt-2">31285 Temecula Parkway, Suites C8-205, Temecula, CA 92592</p>
            <p className="opacity-80">parisdds.com</p>
          </div>
          <div>
            <p className="font-semibold">Hours</p>
            <p className="opacity-80 mt-2">Mon–Fri: 8am–5pm</p>
          </div>
          <div>
            <p className="font-semibold">Connect</p>
            <div className="opacity-80 mt-2 space-y-1">
              <a className="block underline" href="tel:19515749073">Call (951) 574-9073</a>
              <a className="block underline" href="#">Instagram</a>
              <a className="block underline" href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs opacity-70">© {new Date().getFullYear()} Paris Dental. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
