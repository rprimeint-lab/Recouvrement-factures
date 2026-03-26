import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column — Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Nouveau : IA de relance prédictive
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Réduisez vos retards de paiement de{" "}
              <span className="text-blue-600">30&nbsp;%</span> en automatisant
              vos relances
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Reprenez le contrôle de votre trésorerie. CashCollect automatise
              vos relances clients, centralise vos créances et accélère vos
              encaissements — sans effort.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/30"
              >
                Demander une démo
                <ArrowRight size={18} />
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Play size={18} className="text-blue-600" />
                Voir comment ça marche
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Essai gratuit 14 jours
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sans engagement
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Setup en 48 h
              </div>
            </div>
          </div>

          {/* Right column — Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="animate-float">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-blue-900/10 p-6">
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Tableau de bord</p>
                    <p className="text-lg font-bold text-gray-900">Vue d&apos;ensemble</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-xs text-blue-600 font-medium">Encours total</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">847 K€</p>
                    <p className="text-xs text-emerald-600 mt-1">↓ 12% vs M-1</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-xs text-emerald-600 font-medium">Cash récupéré</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">234 K€</p>
                    <p className="text-xs text-emerald-600 mt-1">↑ 25% vs M-1</p>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-4">
                    <p className="text-xs text-amber-600 font-medium">DSO moyen</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">42 j</p>
                    <p className="text-xs text-emerald-600 mt-1">↓ 8 jours</p>
                  </div>
                </div>

                {/* Mock chart */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500 font-medium mb-3">Évolution des encaissements</p>
                  <div className="flex items-end gap-2 h-24">
                    {[35, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-blue-500 opacity-70 hover:opacity-100 transition-opacity"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] text-gray-400">Jan</span>
                    <span className="text-[10px] text-gray-400">Déc</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className="absolute -bottom-4 -left-8 rounded-xl border border-gray-200 bg-white shadow-lg p-4 animate-fade-in-up">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Paiement reçu</p>
                  <p className="text-xs text-gray-500">Société ABC — 12 450 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
