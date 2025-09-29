import { useTranslation } from "react-i18next";

export default function SolarSystemCard({image, title, content, contentList}) {
    const { t } = useTranslation();
    return (
      <div className="rounded-4xl shadow-[0_0_4px_0_rgba(0,0,0,0.25)] w-full max-w-md lg:max-w-none mx-auto lg:mx-0  ">
      <img src={image} className="w-full"/>
      <div className="p-4">
        <h3>{t(title)}</h3>
        <p className="w-[70%]">{t(content)}</p>
        <ul className="list-disc list-inside">
          {contentList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}
