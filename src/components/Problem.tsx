import {
  Clock,
  AlertTriangle,
  FileSpreadsheet,
  TrendingDown,
} from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Factures impayées qui s'accumulent",
    description:
      "Vos créances s'empilent et votre trésorerie en souffre. Chaque jour de retard coûte de l'argent.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Clock,
    title: "Relances manuelles chronophages",
    description:
      "Vos équipes passent des heures à relancer par mail et téléphone, sans suivi ni cohérence.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: TrendingDown,
    title: "Aucune visibilité sur le cash",
    description:
      "Impossible de prévoir vos encaissements. Le DSO augmente et la direction navigue à vue.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: FileSpreadsheet,
    title: "Des process dispersés et inefficaces",
    description:
      "Excel, mails, ERP… L'information est éclatée, les erreurs se multiplient et rien n'est centralisé.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
];

export function Problem() {
  return (
    <section id="probleme" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">
            Le constat
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Vos impayés vous coûtent plus que vous ne le pensez
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            En France, <strong>25 % des faillites de PME</strong> sont causées
            par des retards de paiement. Si vous vous reconnaissez dans ces
            situations, il est temps d&apos;agir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${point.bg} mb-5`}
              >
                <point.icon className={`h-6 w-6 ${point.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-700">
            Résultat :{" "}
            <span className="text-red-600 font-bold">
              du cash bloqué, du temps perdu et un stress permanent.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
