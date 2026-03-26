import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Pour les petites équipes qui démarrent le recouvrement structuré.",
    price: "199",
    period: "/mois",
    features: [
      "Jusqu'à 500 factures/mois",
      "Relances email automatiques",
      "Dashboard & KPI de base",
      "1 utilisateur",
      "Support par email",
    ],
    cta: "Commencer l'essai gratuit",
    highlighted: false,
  },
  {
    name: "Business",
    description: "Pour les équipes finance qui veulent accélérer leurs encaissements.",
    price: "499",
    period: "/mois",
    features: [
      "Factures illimitées",
      "Relances multi-canal (email, SMS)",
      "Portail de paiement client",
      "Gestion des litiges",
      "Jusqu'à 5 utilisateurs",
      "Intégrations ERP",
      "Support prioritaire",
    ],
    cta: "Demander une démo",
    highlighted: true,
    badge: "Le plus populaire",
  },
  {
    name: "Enterprise",
    description: "Pour les ETI avec des besoins avancés et un volume important.",
    price: "Sur devis",
    period: "",
    features: [
      "Tout Business +",
      "IA prédictive & scoring",
      "Workflows sur-mesure",
      "Utilisateurs illimités",
      "API & intégrations custom",
      "Account manager dédié",
      "SLA garanti",
    ],
    cta: "Contacter l'équipe",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Un tarif simple et transparent
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Choisissez l&apos;offre adaptée à votre taille. Essai gratuit de 14 jours sur toutes les formules.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "border-blue-600 bg-white shadow-xl shadow-blue-600/10 scale-105"
                  : "border-gray-200 bg-white hover:shadow-lg"
              } transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                  {plan.period && <span className="text-lg font-medium text-gray-400">{plan.period}</span>}
                </span>
                {plan.price !== "Sur devis" && (
                  <span className="text-lg font-medium text-gray-400"> HT</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
