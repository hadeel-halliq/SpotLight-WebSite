import { useTranslation } from "react-i18next";
export default function Partners() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("partners_title")}</h1>
      <p>{t("partners_desc")}</p>
    </div>
  )
}
