import { useTranslation } from "react-i18next";

import ServicesCard from "./ServicesCard";
import securityIcon from "../../../assets/images/securityIcon.png";
import homeIcon from "../../../assets/images/homeIcon.png";
import blueHatMan from "../../../assets/images/blueHatMan.png";
import medal from "../../../assets/images/medal.png";

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-3 mb-8 overflow-hidden relative">
      <h2 className="text-center mt-11 sm:mt-20 mb-2 font-bold text-lg sm:text-2xl [word-spacing:8px]">{t("services-header")}</h2>
      <p className="text-center text-sm sm:text-xl mb-10 [word-spacing:5px]">{t("services-p")}</p>
      <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-center gap-4 mb-2">
            <ServicesCard icon={securityIcon} title="services-card-title" content="services-card-content"  listContent={t("services-card-list", { returnObjects: true })}/>
            <ServicesCard icon={homeIcon} title="services-card2-title" content="services-card2-content"  listContent={t("services-card2-list", { returnObjects: true })}/>
        </div>
        <div className="relative ">
            <img src={blueHatMan}/>
            <div className="absolute bg-primary rounded-xl w-[33%] h-[15%] bottom-1 left-2 sm:w-[26%] sm:h-[15%] sm:bottom-1 sm:left-2 md:w-[30%] md:bottom-16 md:left-3 lg:bottom-0 lg:left-1 lg:w-[34%] flex items-center justify-center">
                <p className="text-center  text-2xl sm:text-6xl font-bold text-[rgba(255,255,255,0.25)] -rotate-6 z-10">30</p>
                <p className="absolute z-20 text-white text-xs sm:text-[16px] md:text-xs lg:text-xl">{t("experience-years")}</p>
                <img src={medal} className="relative top-5 left-5 sm:left-[30px] md:left-0 lg:left-[30px] "/>
            </div>
        </div>
      </div>
    </div>
  )
}
