import FooterInfos from "./components/footerComponents/footerInfos";
import Banner from "./components/headerComponents/banner";
import Navbar from "./components/headerComponents/navBar";

export default function Home() {
  return (
    <section className="bg-customMarron">
      <Navbar />
      <Banner />
      <FooterInfos />
    </section>
  );
}