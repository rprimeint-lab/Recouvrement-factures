import { Sparkles, Rocket, Brain, Building2 } from "lucide-react";

const differentiators = [
  {
    icon: Sparkles,
    title: "Simplicité d'utilisation",
    description:
      "Une interface intuitive pensée pour les équipes finance, pas pour les développeurs. Prise en main immédiate.",
  },
  {
    icon: Rocket,
    title: "Déployé en 48 heures",
    description:
      "Pas de projet IT de 6 mois. Connectez votre ERP, importez vos données et commencez à relancer en 2 jours.",
  },
  {
    icon: Brain,
    title: "IA & automatisation avancées",
    description:
      "Scoring client, relances prédictives, prioritisation intelligente : l'IA travaille pour vous, pas l'inverse.",
  },
  {
    icon: Building2,
    title: "Conçu pour PME & ETI",
    description:
      "Ni trop simple, ni trop complexe. CashCollect s'adapte à votre taille et grandit avec vous.",
  },
];

export function Differentiation() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Pourquoi CashCollect
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ce qui nous différencie
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Il existe d&apos;autres outils. Mais aucun n&apos;offre cette combinaison
            de simplicité, puissance et rapidité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="flex gap-5 rounded-2xl bg-white border border-gray-100 p-7 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <d.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {d.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
