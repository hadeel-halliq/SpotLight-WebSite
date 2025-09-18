import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-4">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("nl")}
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        NL
      </button>
    </div>
  );
}
