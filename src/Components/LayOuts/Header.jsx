import NavBar from "./NavBar";
import Spotlitelogo from "../../assets/images/Spotlitelogo.png";
import LanguageSwitcher from "../Common/LanguageSwitcher";

export default function Header() {
  return (
    <div className="relative container mx-auto px-3 ">
      <div className="absolute top-0 left-0 w-full z-30 pt-4">
        <div className="container mx-auto px-3 flex items-center">
          <img src={Spotlitelogo} alt="Spotlite Logo" className="h-16" />

          <NavBar />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
