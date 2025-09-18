import { useTranslation } from "react-i18next";

export default function ElectricTips() {
  const { t } = useTranslation();
  return (
    <div>
       <h1>{t("electric_tips_title")}</h1>
      <p>{t("electric_tips_desc")}</p>
    </div>
  )
}
