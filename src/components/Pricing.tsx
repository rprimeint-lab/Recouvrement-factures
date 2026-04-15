import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description:
      "Pour les petites équipes qui démarrent le recouvrement structuré.",
    price: "149",
    period: "/mois",
    features: [
      "Factures illimitées",
      "Relances email automatiques",
      "Dashboard & KPI de base",
      "Jusqu'à 3 utilisateurs",
      "Support standard",
    ],
    cta: "Appeler maintenant",
    highlighted: false,
  },
  {
    name: "Business",
    description:
      "Pour les équipes finance qui veulent accélérer leurs encaissements.",
    price: "499",
    period: "/mois",
    features: [
      "Factures illimitées",
      "Relances multi-canal (email + SMS France)",
      "200 SMS/mois inclus — supp. à 0,12 €/SMS",
      "Portail de paiement client",
      "Gestion des litiges",
      "Jusqu'à 5 utilisateurs",
      "Intégrations ERP",
      "Support prioritaire",
    ],
    cta: "Appeler maintenant",
    highlighted: true,
    badge: "Le plus populaire",
  },
  {
    name: "Enterprise",
    description:
      "Pour les ETI avec des besoins avancés et un volume important.",
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
    cta: "Appeler maintenant",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Tarifs
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Un tarif simple et transparent
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Choisissez l&apos;offre adaptée à votre taille. Essai gratuit de 10
            jours sur toutes les formules.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "scale-105 border-blue-600 bg-white shadow-xl shadow-blue-600/10"
                  : "border-gray-200 bg-white hover:shadow-lg"
              }`}
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
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                  {plan.period && (
                    <span className="text-lg font-medium text-gray-400">
                      {plan.period}
                    </span>
                  )}
                </span>
                {plan.price !== "Sur devis" && (
                  <span className="text-lg font-medium text-gray-400"> HT</span>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+33682044776"
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700"
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
