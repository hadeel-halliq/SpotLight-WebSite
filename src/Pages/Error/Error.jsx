import LanguageSwitcher from "../../Components/Common/LanguageSwitcher"
import { useTranslation } from "react-i18next";
export default function Error() {
   const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher/>
       <h1>{t("error_title")}</h1>
      <p>{t("error_desc")}</p>
    </div>
  )
}
