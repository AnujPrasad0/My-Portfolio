import { motion } from "motion/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const items = ["About", "Skills", "Projects"];

  const icons = [
    {
      link: "https://www.facebook.com/anujprasad65",
      icon: <FaFacebookF size={20} />,
    },
    {
      link: "https://www.instagram.com/anujprasad0/",
      icon: <FaInstagram size={20} />,
    },
    {
      link: "https://x.com/anujprasad0",
      icon: <FaXTwitter size={20} />,
    },
  ];

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

  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        // time between each child start
        staggerChildren: 0.3,
        // 1 = forward order (logo then items)
        staggerDirection: 1,
      },
    },
  };

  const itemVariant = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="border-t-2 border-[#e8e8e8] w-full flex flex-col items-center pt-10 pb-32 md:pb-15 gap-10">
      <h1
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo("Home");
        }}
        className="font-semibold text-3xl md:text-4xl pb-2 cursor-pointer cursor-hide"
      >
        Anuj
      </h1>
      <div className="flex items-center gap-5 md:gap-8">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={"#" + item}
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo(item);
            }}
            className="font-medium text-base cursor-hide"
          >
            {item}
          </a>
        ))}
      </div>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        className="flex items-center gap-5 md:gap-8"
      >
        {icons.map((item, idx) => (
          <motion.a
            variants={itemVariant}
            key={idx}
            href={item.link}
            target="_blank"
            className="bg-[#323232] text-white p-2 rounded-lg ring-2 ring-[#323232] transition-colors hover:bg-white hover:text-[#323232] duration-300 ease-in-out cursor-hide"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Footer;
