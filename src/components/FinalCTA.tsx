import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Prêt à reprendre le contrôle de votre cash ?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">
          Rejoignez les 500+ entreprises qui ont réduit leur DSO et automatisé
          leurs relances avec CashCollect. Un simple appel suffit pour échanger.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+33682044776"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-xl transition-colors hover:bg-blue-50"
          >
            Appeler maintenant
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:+33682044776"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone size={18} />
            06 82 04 47 76
          </a>
        </div>

        <p className="mt-8 text-sm text-blue-200">
          Appel direct · Sans engagement · Setup en 48 h
        </p>
      </div>
    </section>
  );
}
