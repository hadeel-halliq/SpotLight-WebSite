import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locals/en/translation.json";
import nl from "./locals/nl/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nl: { translation: nl },
  },
  lng: "nl",       // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
