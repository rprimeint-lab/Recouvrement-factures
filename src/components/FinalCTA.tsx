import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="demo"
      className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Prêt à reprendre le contrôle de votre cash ?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
          Rejoignez les 500+ entreprises qui ont réduit leur DSO et automatisé
          leurs relances avec CashCollect. Essai gratuit, sans engagement.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-xl hover:bg-blue-50 transition-colors"
          >
            Demander une démo gratuite
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:+33100000000"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Phone size={18} />
            Nous appeler
          </a>
        </div>

        <p className="mt-8 text-sm text-blue-200">
          Essai gratuit 14 jours · Sans carte bancaire · Setup en 48 h
        </p>
      </div>
    </section>
  );
}
