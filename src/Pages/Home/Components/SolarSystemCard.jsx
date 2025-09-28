import { useTranslation } from "react-i18next";


export default function SolarSystemCard({image, title, content, contentList}) {
    const { t } = useTranslation();
    return (
    <div className="rounded shadow-[0,0,4px,0,rgba(0,0,0,0.25)]">
      <img src={image} className="w-[80%]"/>
      <h3>{t(title)}</h3>
      <p className="w-[70%]">{t(content)}</p>
      <ul className="list-disc list-inside">
        {contentList.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}
