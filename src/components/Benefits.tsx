import { Clock, TrendingUp, Heart, FolderKanban, Award } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    stat: "10h",
    label: "économisées par semaine",
    description:
      "Vos équipes se concentrent sur les cas complexes. Les relances de routine sont gérées automatiquement.",
  },
  {
    icon: TrendingUp,
    stat: "+25%",
    label: "de cash récupéré",
    description:
      "Des relances systématiques et au bon moment = des paiements plus rapides et un encours en baisse.",
  },
  {
    icon: Heart,
    stat: "-60%",
    label: "de stress opérationnel",
    description:
      "Plus besoin de courir après les paiements. Tout est tracé, structuré et suivi pour vous.",
  },
  {
    icon: FolderKanban,
    stat: "1 outil",
    label: "pour tout centraliser",
    description:
      "Finies les infos éparpillées. Créances, relances, litiges et paiements au même endroit.",
  },
  {
    icon: Award,
    stat: "100%",
    label: "image professionnelle",
    description:
      "Des relances personnalisées et polies qui renforcent votre relation client au lieu de la dégrader.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            Résultats concrets
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ce que CashCollect change au quotidien
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Nos clients constatent des résultats dès les premières semaines.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="text-center rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 mb-4">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-3xl font-extrabold text-blue-600">
                {benefit.stat}
              </p>
              <p className="text-sm font-semibold text-gray-900 mt-1">
                {benefit.label}
              </p>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
