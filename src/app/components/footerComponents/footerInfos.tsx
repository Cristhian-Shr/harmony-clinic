import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterInfos: React.FC = ({}) => {
  return (
    <footer className="bg-brownBgNav py-12 w-full px-10 md:px-20 lg:px-40 h-[600px]">
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between px-10">
          {/* Section - sobre */}
          <div className="mb-8 lg:mb-0 text-center lg:text-start text-writingOne">
            <h2 className="text-xl font-bold text-center md:text-start">
              Harmony Clinic Bagé
            </h2>
            <p className="mt-2 max-w-xs">
              Quer saber mais sobre nós?
            </p>
            <p className="mt-2 max-w-xs">
              Veja nossas redes sociais!
            </p>
            <div className="flex mt-8 space-x-4 text-writingOne">
              <ul className="flex gap-5 mx-auto md:mx-0">
                <li>
                  <Link
                    href="https://www.facebook.com/harmonyclinicbage"
                    aria-label="Facebook"
                    className="hover:text-slate-600"
                  >
                    <FaFacebook size={40} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/harmonyclinicbage/"
                    aria-label="Intagram"
                    className=" hover:text-slate-600"
                  >
                    <FaInstagram size={40} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/5553999097340?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Harmony%20Clinic%20Bag%C3%A9..."
                    aria-label="Whatsapp"
                    className="hover:text-slate-600"
                  >
                    <FaWhatsapp size={40} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 text-center md:text-start text-writingOne">
              <h3 className="text-sm lg:text-xl font-semibold uppercase tracking-wide">
                Empresa
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#intro"
                    className="hover:text-slate-600"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-slate-600"
                  >
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-slate-600"
                  >
                    Procedimentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-slate-600"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-slate-600"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - serviços faciais */}
          <div className="lg:gap-2 pt-10 md:pt-0 text-writingOne">
            <div className="flex flex-col text-center md:text-start">
              <h3 className="text-sm lg:text-xl font-semibold uppercase tracking-wide">
                Estética Facial
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Limpeza%20de%20pele!"
                    className="hover:text-slate-600"
                  >
                    Limpeza de Pele
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Hidrata%C3%A7%C3%A3o%20Profunda!"
                    className="hover:text-slate-600"
                  >
                    Hidratação Profunda
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Peeling%20Qu%C3%ADmico!"
                    className="hover:text-slate-600"
                  >
                    Peeling Químico
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20Microagulhamento!"
                    className="hover:text-slate-600"
                  >
                    Microagulhamento
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20Skinbooster!"
                    className="hover:text-slate-600"
                  >
                    Skinbooster
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20PDRN%20DNA%20do%20Salm%C3%A3o!"
                    className="hover:text-slate-600"
                  >
                    PDRN DNA do Salmão
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20os%20Fios%20de%20PDO!"
                    className="hover:text-slate-600"
                  >
                    Fios de PDO
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20Endolifting!"
                    className="hover:text-slate-600"
                  >
                    Endolifting
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20Preenchimento%20Full%20Face!"
                    className="hover:text-slate-600"
                  >
                    Preenchimento Full Face
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20Bioestimilador%20de%20Col%C3%A1geno!"
                    className="hover:text-slate-600"
                  >
                    Bioestimilador de Colágeno
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Toxina%20Botul%C3%ADnica!"
                    className="hover:text-slate-600"
                  >
                    Toxina Botulínica
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Hidrolifting!"
                    className="hover:text-slate-600"
                  >
                    Hidrolifting
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20Exossomos."
                    className="hover:text-slate-600"
                  >
                    Exossomos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - serviços corporal */}
          <div className="lg:gap-2 pt-10 md:pt-0 text-writingOne">
            <div className="flex flex-col text-center md:text-start">
              <h3 className="text-sm lg:text-xl font-semibold uppercase tracking-wide">
                Estética Corporal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20Acompanhamento%20Nutricional%20Personalizado!"
                    className="hover:text-slate-600 duration-300"
                  >
                    Acompanhamento Nutricional Personalizado
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Carboxiterapia!"
                    className="hover:text-slate-600"
                  >
                    Carboxiterapia
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20as%20Enzimas!"
                    className="hover:text-slate-600"
                  >
                    Enzimas
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Termoredux!"
                    className="hover:text-slate-600"
                  >
                    Termoredux
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Drenagem%20Linf%C3%A1tica!"
                    className="hover:text-slate-600"
                  >
                    Drenagem Linfática
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Hidrolipoclasia!"
                    className="hover:text-slate-600"
                  >
                    Hidrolipoclasia
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Radiofrequ%C3%AAncia!"
                    className="hover:text-slate-600"
                  >
                    Radiofrequência
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Lipo%20Sem%20Corte!"
                    className="hover:text-slate-600"
                  >
                    Lipo Sem Corte
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Criomodelagrem!"
                    className="hover:text-slate-600"
                  >
                    Criomodelagrem
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20Endolifting!"
                    className="hover:text-slate-600"
                  >
                    Endolifting
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20a%20Harmoniza%C3%A7%C3%A3o%20de%20Gl%C3%BAteos!"
                    className="hover:text-slate-600"
                  >
                    Harmonização de Glúteos
                  </Link>
                </li>
                <li>
                  <Link
                    target="_black"
                    href="https://wa.me/5553999097340?text=Quero%20saber%20mais%20sobre%20o%20Peim%20(Secagem%20de%20microvasos)!"
                    className="hover:text-slate-600"
                  >
                    Peim (Secagem de microvasos)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-2 text-center text-slate-400 flex items-center justify-center">
          <p>Harmony Clinic Bagé © 2024. Todos os direitos reservados.</p>
          <p className="px-2">|</p>
          <Link href="#">
            <p className="hover:text-white">Shr Agência Digital © 2024.</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfos;
