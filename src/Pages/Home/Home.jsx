import DecorSection from "./Components/DecorSection";
import HeroSection from "./Components/HeroSection";
import NetworkExtensions from "./Components/NetworkExtensions";
import Services from "./Components/Services";
import SolarSystems from "./Components/SolarSystems";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <NetworkExtensions />
      <SolarSystems />
      <DecorSection/>
    </div>
  );
}
