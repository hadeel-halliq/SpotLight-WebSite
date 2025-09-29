import { useTranslation } from "react-i18next";
import designOne from "../../../assets/images/designOne.png";
import designTwo from "../../../assets/images/designTwo.png";
import designThree from "../../../assets/images/designThree.png";

export default function DecorSection() {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary container mx-auto px-3">
        <div className="container mx-auto px-3 mb-8 overflow-hidden relative">
        <h2 className="text-center mt-11 sm:mt-20 mb-2 font-bold text-lg sm:text-2xl [word-spacing:8px] text-white">
            {t("decor-header")}
        </h2>
        <p className="text-center text-sm sm:text-xl mb-10 [word-spacing:5px] text-white">
            {t("decor-p")}
        </p>

        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2">
            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum tempore quia aliquid qui rerum, saepe eos impedit, deleniti id fugit voluptatem laborum, explicabo velit consequatur vitae. Hic, repudiandae minus!</p>
          </div>
          <div className="lg:w-1/2 relative h-[660px]">
              <img src={designTwo} className="absolute md:w-[240px] lg:w-[230px] lg:top-[10%] lg:left-0 xl:w-[250px] xl:left-14" />
              <img src={designOne} className="absolute md:w-[240px]  lg:w-[230px]  lg:top-[50%] lg:left-0 xl:w-[250px] xl:left-12"/>
              <img src={designThree} className="absolute md:w-[240px] lg:w-[230px] lg:right-2 xl:w-[250px] xl:right-12"/>
              <img src={designTwo} className="absolute md:w-[240px] lg:w-[230px] lg:top-[40%] lg:right-3 xl:w-[250px] xl:right-16"/>
          </div>
        </div>
      </div>
  
        
    </div>
  );
}
