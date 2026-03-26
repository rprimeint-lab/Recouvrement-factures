import {
  Mail,
  BarChart3,
  CreditCard,
  Scale,
  Handshake,
  Plug,
} from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Relances automatiques personnalisées",
    description:
      "Créez des scénarios de relance multi-canal (email, SMS, courrier) adaptés au profil et au comportement de chaque client.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Dashboard & KPI en temps réel",
    description:
      "DSO, balance âgée, taux de recouvrement, prévisions de cash… Pilotez votre performance depuis un tableau de bord clair.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: CreditCard,
    title: "Portail de paiement client",
    description:
      "Offrez à vos clients un espace pour consulter, contester ou payer leurs factures en ligne — et accélérez les encaissements.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Scale,
    title: "Gestion des litiges",
    description:
      "Identifiez, suivez et résolvez les litiges directement dans l'outil. Ne laissez plus un désaccord bloquer un paiement.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Handshake,
    title: "Promesses de paiement",
    description:
      "Enregistrez les engagements de vos clients et suivez leur respect automatiquement. Relancez uniquement quand c'est nécessaire.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Plug,
    title: "Intégrations ERP & Compta",
    description:
      "Connectez CashCollect à vos outils existants (Sage, Cegid, SAP, QuickBooks…) en quelques clics. Zéro ressaisie.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Fonctionnalités
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Tout ce qu&apos;il faut pour maîtriser votre poste client
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            De la relance à l&apos;encaissement, CashCollect couvre l&apos;intégralité
            du cycle de recouvrement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${feature.bg} mb-5 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
