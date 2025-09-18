import { useTranslation } from "react-i18next";
export default function Questions() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("questions_title")}</h1>
      <p>{t("questions_desc")}</p>
    </div>
  )
}
