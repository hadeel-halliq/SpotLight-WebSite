import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import EnglishFlag from "../../assets/images/EnglishFlag.png";
import NlFlag from "../../assets/images/NlFlag.png";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = i18n.language === "nl" ? "nl" : "en";

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };
  return (
    <div className=" ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center gap-1 absolute h-10 xl:h-6 right-12 z-40 cursor-pointer"
      >
        <img
          src={currentLang === "en" ? EnglishFlag : NlFlag}
          className="w-6"
        />
        <span className="uppercase font-bold text-white">{currentLang}</span>
        <IoIosArrowDown
          className={`transition-transform text-white text-lg ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="absolute right-10 mt-12 xl:mt-8 w-28 rounded-lg shadow-lg  z-10 p-2 flex flex-col gap-2">
            <motion.div
              key="en"
              onClick={() => handleSelect("en")}
              className="flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <img src={EnglishFlag} className="w-5 h-5 rounded-full" />
              <span>EN</span>
            </motion.div>

            <motion.div
              key="nl"
              onClick={() => handleSelect("nl")}
              className="flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, delay: 0.1 }}
            >
              <img src={NlFlag} className="w-5 h-5 rounded-full" />
              <span>NL</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
