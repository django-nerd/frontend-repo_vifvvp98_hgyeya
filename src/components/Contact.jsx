import { useState } from "react";
import { apiPost } from "../lib/api";

export default function Contact() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", preferred_date: "", preferred_time: "", service_type: "", message: "" });
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await apiPost("/api/appointment", {
        ...form,
        source: "website_form",
      });
      setStatus({ ok: true, id: res.id });
      setForm({ full_name: "", email: "", phone: "", preferred_date: "", preferred_time: "", service_type: "", message: "" });
    } catch (err) {
      setStatus({ ok: false, error: String(err) });
    }
  }

  return (
    <section className="bg-[#F7F7F7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2E2E2E]">Contact & Location</h2>
            <p className="mt-2 text-[#333333]/80">31285 Temecula Parkway, Suites C8-205, Temecula, CA 92592</p>
            <p className="mt-1 text-[#333333]/80">Call: <a href="tel:19515749073" className="underline">(951) 574-9073</a></p>
            <div className="mt-4 overflow-hidden rounded-lg border border-black/5">
              <iframe title="Paris Dental Map" src="https://www.google.com/maps?q=31285%20Temecula%20Parkway%2C%20Temecula%2C%20CA%2092592&output=embed" className="w-full h-64" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-white border border-black/5 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#2E2E2E]">Request an Appointment</h3>
              <form onSubmit={submit} className="mt-4 grid sm:grid-cols-2 gap-4">
                <input aria-label="Full Name" required value={form.full_name} onChange={(e)=>setForm({...form, full_name:e.target.value})} placeholder="Full Name" className="border border-black/10 rounded-md px-3 py-2" />
                <input aria-label="Phone" required value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} placeholder="Phone" className="border border-black/10 rounded-md px-3 py-2" />
                <input aria-label="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email (optional)" className="border border-black/10 rounded-md px-3 py-2 col-span-2" />
                <input aria-label="Preferred Date" value={form.preferred_date} onChange={(e)=>setForm({...form, preferred_date:e.target.value})} placeholder="Preferred Date" className="border border-black/10 rounded-md px-3 py-2" />
                <input aria-label="Preferred Time" value={form.preferred_time} onChange={(e)=>setForm({...form, preferred_time:e.target.value})} placeholder="Preferred Time" className="border border-black/10 rounded-md px-3 py-2" />
                <input aria-label="Service Type" value={form.service_type} onChange={(e)=>setForm({...form, service_type:e.target.value})} placeholder="Service Type (e.g., cleaning, veneers)" className="border border-black/10 rounded-md px-3 py-2 col-span-2" />
                <textarea aria-label="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Message" rows={4} className="border border-black/10 rounded-md px-3 py-2 col-span-2" />
                <div className="col-span-2 flex items-center gap-3">
                  <button type="submit" className="px-5 py-2 rounded-md bg-[#6e0f1b] text-white hover:bg-[#5d0d17] transition">Send Request</button>
                  {status === "loading" && <span className="text-sm text-[#333]">Submitting...</span>}
                  {status?.ok && <span className="text-sm text-green-700">Thanks! We’ll be in touch shortly.</span>}
                  {status?.ok === false && <span className="text-sm text-red-700">Something went wrong.</span>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
