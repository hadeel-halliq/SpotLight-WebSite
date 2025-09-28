import { useTranslation } from "react-i18next";
import blue from "../../../assets/images/blue.png"
import orangeHatMan from "../../../assets/images/orangeHatMan.png";
import circleHomeIcon from "../../../assets/images/circleHomeIcon.png";
import dataIcon from "../../../assets/images/dataIcon.png";
import sepairIcon from "../../../assets/images/repairIcon.png";
import buildingIcon from "../../../assets/images/buildingIcon.png";
import NetworkCard from "./NetworkCard";

export default function NetworkExtensions() {
    const { t } = useTranslation();
  return (
     <div className="container mx-auto mt-11 mb-8 overflow-hidden relative">
        <div className="relative">
            <img src={blue} className="w-full h-[1290px] sm:h-[1176px] md:h-[656.59px]"/>
            <div className="container mx-auto px-3 overflow-hidden">
                <img src={orangeHatMan} className="hidden lg:block absolute  top-[160px] lg:h-[500px] xl:h-[550px] xl:top-[110px]" />
                <h2 className="absolute text-white text-[16px] sm:text-2xl [word-spacing:8px] top-5 left-[27%] lg:left-[40%] xl:left-[45%]">{t("electricity-header")}</h2>
                <p className="absolute top-8 right-[30%] text-white mt-8  w-[60%] left-[27%] lg:left-[35%] xl:left-[40%]">{t("electricity-p")}</p>
                <div className="absolute top-32 pr-5 mt-4 flex flex-col justify-center items-center gap-20 md:left-[4%] lg:left-[27%] md:grid md:grid-cols-2 lg:gap-12">
                    <NetworkCard icon={circleHomeIcon} title="first-card-title" content= "first-card-p" listContent={t( "first-card-list", {returnObjects: true})} className="first:mt-12 sm:first:mt-8 md:first:mt-0"/>
                    <NetworkCard icon={dataIcon} title="second-card-title" content= "second-card-p" listContent={t( "second-card-list", {returnObjects: true})}/>
                    <NetworkCard icon={sepairIcon} title="third-card-title" content= "third-card-p" listContent={t( "third-card-list", {returnObjects: true})}/>
                    <NetworkCard icon={buildingIcon} title="fourth-card-title" content= "fourth-card-p" listContent={t( "fourth-card-list", {returnObjects: true})}/>
                </div>
            </div>
        </div>
     </div>
  )
}
