import { useTranslation } from "react-i18next";
import designOne from "../../../assets/images/designOne.png";
import designTwo from "../../../assets/images/designTwo.png";
import designThree from "../../../assets/images/designThree.png";
const images = [
  {
    src: designTwo,
    position:
      "sm:w-[240px] sm:top-[8%] sm:right-[300px] md:top-[40%] md:right-[140px] lg:w-[230px] lg:top-[10%] lg:left-0 xl:w-[250px] xl:left-14",
  },
  {
    src: designOne,
    position:
      "sm:w-[240px] sm:top-[47%] sm:left-[40px] md:top-[50%] md:left-[90px] lg:w-[230px] lg:top-[48%] lg:left-0 xl:w-[250px] xl:top-[50%] xl:left-12",
  },
  {
    src: designThree,
    position:
      "sm:w-[240px] sm:right-[50px] md:right-[120px] lg:w-[230px] lg:right-2 xl:w-[250px] xl:right-12 2xl:right-[160px]",
  },
  {
    src: designTwo,
    position:
      "sm:w-[240px] sm:top-[40%] right-[60px] md:top-[11%] md:left-[100px] lg:w-[230px] lg:top-[37%] lg:left-[250px] xl:w-[250px] xl:left-[320px] xl:top-[40%]",
  },
];

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
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto earum tempore quia aliquid qui rerum, saepe eos
              impedit, deleniti id fugit voluptatem laborum, explicabo velit
              consequatur vitae. Hic, repudiandae minus!
            </p>
          </div>
          <div className="max-sm:h-[350px] max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:justify-center max-sm:gap-4 lg:w-1/2 relative h-[660px]">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                className={`absolute max-sm:static  ${img.position}`}
                alt={`decor-${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
