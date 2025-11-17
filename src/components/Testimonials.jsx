import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    apiGet("/api/testimonials?featured=true")
      .then((d) => mounted && setItems(d))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2E2E2E]">Patient Stories</h2>
            <p className="mt-2 text-[#333333]/80">Real experiences from our Temecula patients.</p>
          </div>
        </div>

        {loading ? (
          <p className="mt-8 text-[#333]">Loading...</p>
        ) : (
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {items.map((t, i) => (
              <figure key={i} className="rounded-lg border border-black/5 p-6 bg-[#FAFAFA]">
                <div className="flex items-center gap-2 text-[#b08a57]" aria-label={`${t.rating} star rating`}>
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <blockquote className="mt-3 text-[#2E2E2E]">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-[#333333]/70">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
