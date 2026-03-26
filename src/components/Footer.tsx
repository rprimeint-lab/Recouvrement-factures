import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
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

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Produit
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#fonctionnalites" className="hover:text-white transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-white transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-white transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Intégrations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Ressources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Guide du recouvrement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Centre d&apos;aide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a
                  href="mailto:contact@cashcollect.fr"
                  className="hover:text-white transition-colors"
                >
                  contact@cashcollect.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <a
                  href="tel:+33100000000"
                  className="hover:text-white transition-colors"
                >
                  01 00 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-400 mt-0.5" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} CashCollect. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
