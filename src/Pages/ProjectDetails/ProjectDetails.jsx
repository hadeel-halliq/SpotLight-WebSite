import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next";

export default function ProjectDetails() {
    const params = useParams();
    const { t } = useTranslation();
  return (
    <div>
      <h1>{t("project_details_title")}</h1>
      <p>{t("project_details_desc")}</p>
    </div>
  )
}
