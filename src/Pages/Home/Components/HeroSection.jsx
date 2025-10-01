import { useTranslation } from "react-i18next";
import { LuPhone } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

import Button from "../../../Components/Common/Button";
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
      <div className="relative mt-2.5 md:mt-0 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {/* صورة الخلفية الرئيسية */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={man}
            alt="Background"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={overlay}
            alt="Overlay"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full">
          <div className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-32 lg:pb-40 px-4 md:px-10">
            <h1 className="text-xl md:text-4xl lg:text-[40px] mb-2.5 text-primary font-bold">
              {t("hero-header")}
            </h1>
            <p className="max-w-md md:max-w-xl mb-8 text-white">
              {t("hero-disc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
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
          <div className="absolute right-3 bottom-[-150px] md:bottom-[-180px] xl:bottom-[-200px] xl:right-[50px] flex gap-4">
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
              <img
                src={girl1}
                className="w-[40px] h-[40px] lg:w-[63px] lg:h-[63px]  z-10"
              />
              <img
                src={boy1}
                className="w-[40px] h-[40px] lg:w-[63px] lg:h-[63px]  -ml-4 lg:-ml-5 z-20"
              />
              <img
                src={girl2}
                className="w-[40px] h-[40px] lg:w-[63px] lg:h-[63px]  -ml-4 lg:-ml-5 z-30"
              />
              <img
                src={boy2}
                className="w-[40px] h-[40px] lg:w-[63px] lg:h-[63px]  -ml-4 lg:-ml-5 z-40"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
              <p className="text-xs sm:text-lg">{t("review-text")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
