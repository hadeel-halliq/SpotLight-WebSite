import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navContent = [
  { key: "home", to: "/" },
  { key: "last_projects", to: "/projects" },
  { key: "services", to: "/ourservices" },
  { key: "contact", to: "/contact" },
  { key: "about_us", to: "/aboutus" },
];

export default function NavBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <ul className="hidden w-[876px] xl:w-[880px] mb-6 py-0.5 rounded-bl-[200px] rounded-br-[200px]   md:flex justify-center gap-[10px] lg:gap-[30px] relative left-[37px] text-[16px] lg:text-lg bg-white font-bold"> */}
     <ul className="hidden md:flex sp-md-range:w-[900px] ">
        {navContent.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `relative px-2 py-1 ${isActive ? "text-primary" : "text-black"}`
            }
          >
            {({ isActive }) => (
              <>
                {t(item.key)}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-1 h-[2px] bg-primary rounded"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </ul>
      <div className="md:hidden relative">
        <button
          className="text-2xl p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <AnimatePresence>
          {isOpen &&
            navContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
                className="absolute left-2 w-[200px]"
                style={{ top: `${50 + index * 50}px` }} // كل لينك ينزل شوي لتحت
              >
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block w-full px-4 py-3 z-50 rounded-lg shadow ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-black"
                    }`
                  }
                >
                  {t(item.key)}
                </NavLink>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
