import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "En 3 mois, notre DSO est passé de 58 à 41 jours. CashCollect a transformé notre gestion du poste client.",
    author: "Marie Dupont",
    role: "DAF",
    company: "TechVision SAS",
    avatar: "MD",
  },
  {
    quote:
      "On gagnait 2 jours par semaine rien que sur les relances. Maintenant on se concentre sur la relation client.",
    author: "Thomas Bernard",
    role: "Credit Manager",
    company: "IndustriePlus",
    avatar: "TB",
  },
  {
    quote:
      "Le portail de paiement a été un game-changer. Nos clients paient plus vite et nous appellent moins.",
    author: "Sophie Legrand",
    role: "Dirigeante",
    company: "GreenLogistics",
    avatar: "SL",
  },
];

const logos = [
  "TechVision",
  "IndustriePlus",
  "GreenLogistics",
  "DataFlow",
  "NeoCompta",
  "Axelio",
];

const stats = [
  { value: "500+", label: "entreprises utilisatrices" },
  { value: "2,3 Mds€", label: "de créances gérées" },
  { value: "98%", label: "de satisfaction client" },
  { value: "-35%", label: "de DSO en moyenne" },
];

export function SocialProof() {
  return (
    <section id="temoignages" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Ils nous font confiance
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            +500 entreprises accélèrent leur cash avec CashCollect
          </h2>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white"
            >
              <p className="text-3xl md:text-4xl font-extrabold">
                {stat.value}
              </p>
              <p className="text-sm text-blue-100 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16 opacity-60">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-lg font-bold text-gray-400 tracking-wider"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
