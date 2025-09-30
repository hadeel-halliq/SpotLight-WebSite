import { useTranslation } from "react-i18next";
import SolarSystemCard from "./SolarSystemCard";
import solar1 from "../../../assets/images/solar1.png";
import solar2 from "../../../assets/images/solar2.png";
import solar3 from "../../../assets/images/solar3.png";

const cards = [
  {
    image: solar1,
    title: "first-solar-card-title",
    content: "first-solar-card-p",
    listKey: "first-solar-card-list",
  },
  {
    image: solar2,
    title: "second-solar-card-title",
    content: "second-solar-card-p",
    listKey: "second-solar-card-list",
  },
  {
    image: solar3,
    title: "third-solar-card-title",
    content: "third-solar-card-p",
    listKey: "third-solar-card-list",
  },
];

export default function SolarSystems() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-3 mb-8 overflow-hidden relative">
      <h2 className="text-center mt-11 sm:mt-20 mb-2 font-bold text-lg sm:text-2xl [word-spacing:8px]">
        {t("solar-header")}
      </h2>
      <p className="text-center text-sm sm:text-xl mb-10 [word-spacing:5px]">
        {t("solar-p")}
      </p>
      <div className="flex flex-col items-center gap-8 mb-2 lg:flex-row lg:justify-between ">
        {cards.map((card, index) => (
          <SolarSystemCard
            key={index}
            image={card.image}
            title={card.title}
            content={card.content}
            contentList={t(card.listKey, { returnObjects: true })}
          />
        ))}
      </div>
    </div>
  );
}
