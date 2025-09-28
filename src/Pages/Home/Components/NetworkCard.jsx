import { useTranslation } from "react-i18next";
export default function NetworkCard({ icon, title, content, listContent, className=""}) {
  const { t } = useTranslation();
  return (
    <div className={`relative bg-[rgba(202,39,102,0.2)] w-[99%] rounded-2xl pl-4 py-1 mt-4 sm:mt-4 md:mt-0 text-white ${className}`}>
      <img src={icon} className="absolute left-[40%] top-[-42px]"/>
      <h3 className="font-bold text-[22px]">{t(title)}</h3>
      <p>{t(content)}</p>
      <ul className="list-disc list-inside">
        {listContent.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
