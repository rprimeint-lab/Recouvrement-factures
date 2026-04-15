import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-sm font-bold text-white">C</span>
              </div>
              <span className="text-lg font-bold text-white">
                Cash<span className="text-blue-400">Collect</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Le logiciel de recouvrement qui automatise vos relances et
              accélère vos encaissements.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Produit
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#fonctionnalites"
                  className="transition-colors hover:text-white"
                >
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#tarifs" className="transition-colors hover:text-white">
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="#temoignages"
                  className="transition-colors hover:text-white"
                >
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Intégrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Ressources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Guide du recouvrement
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Centre d&apos;aide
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <a
                  href="tel:+33682044776"
                  className="transition-colors hover:text-white"
                >
                  06 82 04 47 76
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-xs md:flex-row">
          <p>&copy; {new Date().getFullYear()} CashCollect. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Politique de confidentialité
            </a>
            <a href="#" className="transition-colors hover:text-white">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
