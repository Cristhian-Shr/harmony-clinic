import FooterInfos from "./components/footerComponents/footerInfos";
import Banner from "./components/headerComponents/banner";
import Navbar from "./components/headerComponents/navBar";
import About from "./components/mainComponents/about";
import { TooltipWhats } from "./components/systemsComponents/tooltipWhats";

export default function Home() {
  return (
    <section className="">
      <Navbar />
      <TooltipWhats />
      <About />
      <Banner />
      <FooterInfos />
    </section>
  );
}
