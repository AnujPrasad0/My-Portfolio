import { FiHome } from "react-icons/fi";
import { TbSend2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";
import { useEffect, useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isMobile }) => {
  const [navbox, setNavbox] = useState(false);

  const [hidden, setHidden] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const navItems = [
    { name: "Home", icon: <FiHome size={20} color="#323232" /> },
    { name: "About", icon: <LuUserRound size={20} color="#323232" /> },
    {
      name: "Skills",
      icon: <IoDocumentTextOutline size={20} color="#323232" />,
    },
    {
      name: "Qualification",
      icon: <GiDiploma size={20} color="#323232" />,
    },
    {
      name: "Projects",
      icon: <IoImageOutline size={20} color="#323232" />,
    },
    { name: "Contact", icon: <TbSend2 size={20} color="#323232" /> },
  ];

  function bottomBar() {
    setNavbox((v) => !v);
  }

  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        // small delay before children start (so logo can feel like "first")
        delayChildren: 0.05,
        // time between each child start
        staggerChildren: 0.12,
        // 1 = forward order (logo then items)
        staggerDirection: 1,
      },
    },
  };

  const itemVariant = {
    hidden: { y: isMobile ? 80 : -40, opacity: 0, scale: 0.98 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Add shadow only after scrolling 10px
      setShadow(current > 70);

      // Hide when scroll down, show when scroll up
      if (current > lastScroll && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const smoothScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const currentScroll = window.scrollY;
    const elementTop = el.getBoundingClientRect().top + currentScroll;

    // if target is BELOW → scrolling down → offset = 0
    // if target is ABOVE → scrolling up → offset = 72
    const offset = elementTop > currentScroll ? 0 : 72;

    const y = elementTop - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* TOP / BOTTOM NAVBAR */}
      <div
        className={`z-50 bg-white fixed w-full bottom-0 md:bottom-auto md:top-0 transition-all duration-300 shadow-[0_-2px_4px_0_rgba(0,0,0,0.1)] ${
          hidden
            ? isMobile
              ? "translate-y-full"
              : "-translate-y-full"
            : "translate-y-0"
        } ${
          isMobile
            ? ""
            : shadow
            ? "shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]"
            : "shadow-none"
        }`}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={parentVariants}
          className="flex items-center justify-between px-8 py-5 relative w-full md:w-11/12 max-w-300 mx-auto bottom-0 md:bottom-auto md:top-0"
        >
          <motion.a
            href="#Home"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("Home");
            }}
            variants={itemVariant}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="text-xl font-normal md:font-medium lg:text-2xl cursor-hide"
          >
            Anuj
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-4">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                variants={itemVariant} // <-- entrance/stagger stays here (unchanged)
                href={"#" + item.name}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(item.name);
                }}
                className="lg:px-2 px-1 py-1 flex flex-col items-center cursor-pointer relative"
              >
                {/* INNER wrapper controls only hover (does NOT touch entrance variants) */}
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={{ rest: {}, hover: {} }}
                  className="flex flex-col items-center"
                >
                  <p className="font-normal md:font-medium text-md lg:text-lg cursor-hide">
                    {item.name}
                  </p>

                  {/* underline: starts collapsed (rest) and grows on hover.
            Using scaleX prevents layout shift and won't trigger outer variants. */}
                  <motion.div
                    className="h-0.5 bg-[#323232]"
                    variants={{
                      rest: { width: 0 },
                      hover: { width: "110%" },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            onClick={bottomBar}
            className="md:hidden"
          >
            <HiOutlineSquares2X2 size={28} color="#323232" />
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM SHEET + BACKDROP */}
      <AnimatePresence>
        {navbox && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setNavbox(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* BOTTOM BAR */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "tween",
                duration: 0.28,
                ease: [0.2, 0.9, 0.2, 1],
              }}
              className="md:hidden z-50 bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.12)] fixed flex flex-col p-8 pb-5 gap-5 w-full bottom-0 rounded-t-2xl"
            >
              <motion.div
                variants={parentVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 grid-rows-2 justify-items-center gap-x-10 gap-y-7"
              >
                {navItems.map((item, idx) => (
                  <motion.a
                    key={idx}
                    variants={itemVariant}
                    href={"#" + item.name}
                    onClick={bottomBar}
                    role="button"
                    tabIndex={0}
                    // tactile tap: slight shrink + downward nudge
                    whileTap={{ scale: 0.92, y: 2 }}
                    // subtle hover lift on supported devices
                    whileHover={{ translateY: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    // optional: keyboard activation (Enter / Space)
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.currentTarget.click();
                      }
                    }}
                    className="flex flex-col items-center justify-center rounded py-3 px-2 min-w-20 max-w-30 w-full duration-200 active:scale-95"
                    aria-label={item.name}
                  >
                    {item.icon}
                    <p className="font-normal text-sm mt-1">{item.name}</p>
                  </motion.a>
                ))}
              </motion.div>

              {/* CLOSE ICON */}
              <div
                onClick={bottomBar}
                className="flex justify-end items-center"
              >
                <IoClose size={28} color="#323232" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
