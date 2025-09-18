import { useTranslation } from "react-i18next";
export default function OurServices() {
   const { t } = useTranslation();
  return (
    <div>
       <h1>{t("services_title")}</h1>
      <p>{t("services_desc")}</p>
    </div>
  )
}
