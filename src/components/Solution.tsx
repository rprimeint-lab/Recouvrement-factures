import { Zap, Target, Eye } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Automatisation intelligente",
    description:
      "Des workflows de relance qui s'adaptent au profil de chaque client : mail, SMS, appel au bon moment.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Centralisation complète",
    description:
      "Toutes vos créances, relances et litiges dans un seul outil. Fini le jonglage entre Excel, mails et ERP.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Eye,
    title: "Visibilité en temps réel",
    description:
      "Dashboard, balance âgée, DSO, prévisions de cash : vous pilotez votre trésorerie en un coup d'œil.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

export function Solution() {
  return (
    <section id="solution" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            La solution
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            CashCollect reprend le contrôle de votre cash pour vous
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Un outil moderne, simple et puissant qui automatise vos relances et
            vous donne une vision claire de votre trésorerie — en quelques clics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl ${pillar.bg} mb-6 group-hover:scale-110 transition-transform`}
              >
                <pillar.icon className={`h-7 w-7 ${pillar.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-3 border border-emerald-100">
            <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-emerald-700 font-semibold">
              Mise en place en 48 h — Aucune compétence technique requise
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
