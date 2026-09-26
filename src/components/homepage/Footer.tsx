
import { useIsMobile } from "@/hooks/use-mobile";

const SiteFooter = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-[#101827] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className={isMobile ? "space-y-8 flex flex-col items-center w-full" : "flex gap-16 justify-center w-full"}>
          <div className={isMobile ? "w-full" : "max-w-md"}>
            <h3 className="text-xl font-bold mb-6">Potenza Maschile</h3>
            <p className="text-gray-300">
              La tua guida completa per il benessere maschile con prodotti naturali di alta qualità.
            </p>
            <p className="text-gray-300 mt-4">
              Selezioniamo i migliori prodotti naturali per l'uomo, basandoci su efficacia, innovazione e feedback degli utenti. Alcuni brand ci riconoscono una commissione per ogni acquisto tramite i nostri link, il che può influenzare la visibilità dei prodotti sul sito. Grazie a queste collaborazioni, ti offriamo un servizio sempre gratuito, aggiornato e trasparente.
            </p>
          </div>
          <div className={isMobile ? "w-full" : "max-w-xs"}>
            <h3 className="text-xl font-bold mb-6">Link Utili</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/46320706"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/46320706/cookie-policy"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:maschilepotenza@gmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  Contattaci
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>©2026 Potenza Maschile. Tutti i diritti riservati No Follow</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
