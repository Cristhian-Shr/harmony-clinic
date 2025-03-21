import FooterInfos from "./components/footerComponents/footerInfos";
import Navbar from "./components/headerComponents/navBar";
import About from "./components/mainComponents/about";
import CallToAction from "./components/mainComponents/callToAction";
import CallToActionCorporal from "./components/mainComponents/callToActionCorporal";
import { DepoimentsGrid } from "./components/mainComponents/depoimentsParallax";
import ProfileComponent from "./components/mainComponents/profileComponent";
import ProfileComponent3 from "./components/mainComponents/profileComponent3";
import ProfileComponent2 from "./components/mainComponents/protfileComponent2";
import ResultsGaleryCorporal from "./components/mainComponents/resultsGaleryCorporal";
import ResultsGalery from "./components/mainComponents/resultsGaleryFacial";
import MetaPixel from "./components/systemsComponents/metaPixel";
import { TooltipWhats } from "./components/systemsComponents/tooltipWhats";

export default function Home() {
  return (
    <section className="w-full h-full bg-brownBg text-writingOne">
      <Navbar />
      <MetaPixel />
      <TooltipWhats />
      <About />
      <ProfileComponent />
      <ProfileComponent2 />
      <ProfileComponent3 />
      <CallToAction />
      <DepoimentsGrid />
      <ResultsGaleryCorporal />
      <CallToActionCorporal />
      <ResultsGalery />
      <FooterInfos />
    </section>
  );
}
