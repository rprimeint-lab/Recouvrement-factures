import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Nouveau : IA de relance prédictive
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Réduisez vos retards de paiement de{" "}
              <span className="text-blue-600">30&nbsp;%</span> en automatisant
              vos relances
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Reprenez le contrôle de votre trésorerie. CashCollect automatise
              vos relances clients, centralise vos créances et accélère vos
              encaissements, sans effort.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+33682044776"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
              >
                Appeler au 06 82 04 47 76
                <ArrowRight size={18} />
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                <Play size={18} className="text-blue-600" />
                Voir comment ça marche
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Essai gratuit 10 jours
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Sans engagement
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Setup en 48 h
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="animate-float">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl shadow-blue-900/10">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Tableau de bord
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      Vue d&apos;ensemble
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-xs font-medium text-blue-600">
                      Encours total
                    </p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      847 K€
                    </p>
                    <p className="mt-1 text-xs text-emerald-600">
                      ↓ 12% vs M-1
                    </p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-xs font-medium text-emerald-600">
                      Cash récupéré
                    </p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      234 K€
                    </p>
                    <p className="mt-1 text-xs text-emerald-600">
                      ↑ 25% vs M-1
                    </p>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-4">
                    <p className="text-xs font-medium text-amber-600">
                      DSO moyen
                    </p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      42 j
                    </p>
                    <p className="mt-1 text-xs text-emerald-600">↓ 8 jours</p>
                  </div>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-3 text-xs font-medium text-gray-500">
                    Évolution des encaissements
                  </p>
                  <div className="flex h-24 items-end gap-2">
                    {[35, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 92].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-blue-500 opacity-70 transition-opacity hover:opacity-100"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span className="text-[10px] text-gray-400">Jan</span>
                    <span className="text-[10px] text-gray-400">Déc</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up absolute -bottom-4 -left-8 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    className="h-5 w-5 text-emerald-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Paiement reçu
                  </p>
                  <p className="text-xs text-gray-500">
                    Société ABC — 12 450 €
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
