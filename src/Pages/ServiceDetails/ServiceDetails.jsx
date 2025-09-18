import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServiceDetails() {
  const params = useParams();
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("service_details_title")}</h1>
      <p>{t("service_details_desc")}</p>
    </div>
  );
}
