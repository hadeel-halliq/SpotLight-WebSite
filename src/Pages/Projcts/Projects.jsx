import { useTranslation } from "react-i18next";
export default function Projects() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("projects_title")}</h1>
      <p>{t("projects_desc")}</p>
    </div>
  )
}
