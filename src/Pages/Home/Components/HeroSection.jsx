import { useTranslation } from "react-i18next";
import { LuPhone } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

import LanguageSwitcher from "../../../Components/Common/LanguageSwitcher";
import Button from "../../../Components/Common/Button";
import Spotlitelogo from "../../../assets/images/Spotlitelogo.png";
import overlay from "../../../assets/images/overlay.png";
import RightArrow from "../../../assets/images/RightArrow.png";
import LeftArrow from "../../../assets/images/LeftArrow.png";
import man from "../../../assets/images/man.png";
import girl1 from "../../../assets/images/girl1.png";
import girl2 from "../../../assets/images/girl2.png";
import boy1 from "../../../assets/images/boy1.png";
import boy2 from "../../../assets/images/boy2.png";
import star from "../../../assets/images/star.png";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-3 overflow-hidden relative">
      <div className="relative h-[690px] mt-2.5 md:mt-0">
        {/* صورة الخلفية الرئيسية */}
        <img
          src={man}
          alt="Background"
          className="absolute top-0 left-0 w-full h-[690px] object-cover object-center"
        />

        {/* Overlay */}
        <img
          src={overlay}
          alt="Overlay"
          className="absolute top-0 left-0 w-full h-[697px] z-0 object-cover"
        />

        <div className="relative z-10">
          <div className="flex justify-between pt-12 xl:pt-4">
            <img
              src={Spotlitelogo}
              alt="Spotlite Logo"
              className="relative left-8 h-16"
            />
            {/* <NavBar/> */}
            <LanguageSwitcher />
          </div>
          <div className="mt-16 ml-10">
            <h1 className="p-2 sm:p-0 text-xl md:text-4xl lg:text-[40px] mb-2.5 w-sm text-primary font-bold">
              {t("hero-header")}
            </h1>
            <p className="w-xs p-2 sm:p-0 md:w-xl mb-8 text-white">
              {t("hero-disc")}
            </p>
            <div className="flex gap-2">
              <Button
                buttonName={t("button-name")}
                buttonIcon={<LuPhone />}
                buttonStyle="mainStyle"
              />
              <Button
                buttonName={t("second-button-name")}
                buttonIcon={<FaPlay />}
                buttonStyle="secondStyle"
              />
            </div>
          </div>
          <div className="absolute right-3 bottom-[-150px] md:bottom-[-180px] xl:bottom-[-293px] xl:right-[50px] flex gap-4">
            <img
              src={LeftArrow}
              alt="Left Arrow"
              className="w-8 md:w-10 cursor-pointer"
            />
            <img
              src={RightArrow}
              alt="Right Arrow"
              className="w-8 md:w-10 cursor-pointer"
            />
          </div>
          <div className="absolute flex items-center  gap-2 bottom-[-240px] sm:bottom-[-260px] md:bottom-[-270px] xl:bottom-[-303px]">
             <div className="relative flex">
              <img src={girl1} className="w-[40px] h-[40px] lg:w-[63px] lg:h-[63px]  z-10"/>
              <img src={boy1} className="w-[40px] h-[40px] lg:w-[63px] lg:h-[63px]  -ml-4 lg:-ml-5 z-20"/>
              <img src={girl2} className="w-[40px] h-[40px] lg:w-[63px] lg:h-[63px]  -ml-4 lg:-ml-5 z-30"/>
              <img src={boy2} className="w-[40px] h-[40px] lg:w-[63px] lg:h-[63px]  -ml-4 lg:-ml-5 z-40"/>
            </div>
            <div className="flex flex-col">
                <div className="flex">
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                  <img src={star}/>
                </div>
                <p className="text-xs sm:text-lg">{t("review-text")}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    
  );
}


