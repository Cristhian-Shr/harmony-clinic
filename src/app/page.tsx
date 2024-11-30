import FooterInfos from "./components/footerComponents/footerInfos";
import Navbar from "./components/headerComponents/navBar";
import About from "./components/mainComponents/about";
import { DepoimentsParallax } from "./components/mainComponents/depoimentsParallax";
import ResultsGalery from "./components/mainComponents/resultsGalery";
import { TooltipWhats } from "./components/systemsComponents/tooltipWhats";

export default function Home() {
  return (
    <section className="bg-brownBg text-writingOne">
      <Navbar />
      <TooltipWhats />
      <About />
      <DepoimentsParallax />
      <ResultsGalery />
      <FooterInfos />
    </section>
  );
}
