import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("home_title")}</h1>
      <p>{t("home_desc")}</p>
    </div>
  );
}
