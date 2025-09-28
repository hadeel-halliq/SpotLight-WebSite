import { useTranslation } from "react-i18next";
export default function ServicesCard({ icon, title, content, listContent }) {
  const { t } = useTranslation();
  return (
    <div className="bg-[rgba(149,149,149,0.05)] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] w-11/12 p-4 rounded-3xl">
      <div className="flex items-center gap-2">
        <img src={icon} />
        <h3 className="font-bold">{t(title)}</h3>
      </div>
      <div>
        <p>{t(content)}</p>
        <ul className="list-disc list-inside">
          {listContent.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
