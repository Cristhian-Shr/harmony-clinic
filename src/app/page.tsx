import FooterInfos from "./components/footerComponents/footerInfos";
import Navbar from "./components/headerComponents/navBar";
import About from "./components/mainComponents/about";
import { DepoimentsParallax } from "./components/mainComponents/depoimentsParallax";
import { TooltipWhats } from "./components/systemsComponents/tooltipWhats";

export default function Home() {
  return (
    <section>
      <Navbar />
      <TooltipWhats />
      <About />
      <DepoimentsParallax />
      <FooterInfos />
    </section>
  );
}
