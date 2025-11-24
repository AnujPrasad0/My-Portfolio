import Button from "./Button";
import face from "../assets/face.jpg";
import Typewriter from "./Typewriter";
import { motion } from "motion/react";
import { LuSend } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa6";

const Hero = ({ isMobile }) => {
  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: isMobile ? 0.12 : 0.8,
        // time between each child start
        staggerChildren: 0.12,
        // 1 = forward order (logo then items)
        staggerDirection: 1,
      },
    },
  };

  const itemVariant = {
    hidden: (custom) => ({
      y: custom?.y ?? 0,
      x: custom?.x ?? 0,
      opacity: 0,
      scale: 0.98,
    }),
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const buttonIconVariant = {
    hidden: {
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    show: {
      rotate: [0, 45, 45],
      x: [0, 0, 5],
      transition: {
        delay: 1,
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div
        id="Home"
        className="flex flex-wrap gap-10 sm:gap-15 xl:gap-35 md:flex md:flex-nowrap p-7 pt-17 md:pt-45 max-w-lg md:max-w-6xl m-auto md:w-11/12 md:justify-between"
      >
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="order-1 md:order-1 flex flex-col gap-7 md:gap-10 items-center justify-center"
        >
          <motion.a
            variants={itemVariant}
            custom={{ y: -20, x: isMobile ? -40 : -150 }}
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/anujprasad0"
            target="_blank"
            className="p-2 rounded-lg hover:ring-2 transition-shadow duration-300 ease-in-out cursor-hide"
          >
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a
            variants={itemVariant}
            custom={{ y: 0, x: isMobile ? -40 : -150 }}
            whileHover={{ scale: 1.2 }}
            href="https://x.com/anujprasad0"
            target="_blank"
            className="p-2 rounded-lg hover:ring-2 transition-shadow duration-300 ease-in-out cursor-hide"
          >
            <FaXTwitter size={20} color="#323232" />
          </motion.a>
          <motion.a
            variants={itemVariant}
            custom={{ y: 20, x: isMobile ? -40 : -150 }}
            whileHover={{ scale: 1.2 }}
            href="https://github.com/AnujPrasad0"
            target="_blank"
            className="p-2 rounded-lg hover:ring-2 transition-shadow duration-300 ease-in-out cursor-hide"
          >
            <FiGithub size={20} color="#323232" />
          </motion.a>
        </motion.div>
        <div className="order-2 md:order-3">
          <motion.div
            initial={{ scale: 0.3 }}
            animate={{
              scale: 1,
              transition: {
                duration: 2,
                ease: "easeOut",
              },
            }}
            whileInView={{
              borderTopLeftRadius: ["60% 60%", "30% 50%", "60% 60%"],
              borderTopRightRadius: ["40% 30%", "60% 60%", "40% 30%"],
              borderBottomRightRadius: ["30% 70%", "70% 30%", "30% 70%"],
              borderBottomLeftRadius: ["70% 40%", "40% 60%", "70% 40%"],
              transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            viewport={{ once: true }} // animate scale only once
            style={{ backgroundImage: `url(${face})` }}
            className="bg-center bg-cover size-48 md:size-[clamp(10rem,23vw,16rem)] lg:size-70 xl:size-80 inset-shadow-[0_0_0_7px] lg:inset-shadow-[0_0_0_9px] inset-shadow-black/40 rounded-full filter lg:grayscale lg:brightness-90 hover:filter-none hover:brightness-100 transition-[filter] duration-300 ease-in-out cursor-hide"
          ></motion.div>
        </div>
        <div className="order-3 md:order-2 w-full flex flex-col items-start gap-8 md:gap-12 md:flex-1">
          <div className="flex flex-col gap-3 md:gap-8">
            <div className="flex flex-nowrap items-center">
              <Typewriter
                text="Anuj Prasad"
                className={
                  "text-4xl md:text-5xl lg:text-6xl font-semibold whitespace-nowrap"
                }
              />
              <motion.span
                initial={{ rotate: -20 }}
                animate={{ rotate: 20 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{ originY: 1 }}
                className="text-4xl md:text-5xl lg:text-6xl relative -top-2"
              >
                🖐🏻
              </motion.span>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: isMobile ? 32 : 64 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                }}
                className="h-[1.5px] w-8 lg:w-18 bg-[#323232] opacity-60"
              />
              <Typewriter
                text="Web Developer"
                startDelay={1.4}
                className={"font-medium opacity-90 text-xl md:text-2xl"}
              />
            </div>
            <Typewriter
              text="A dedicated web developer creating clean, modern, and reliable digital experiences with a strong passion for quality."
              startDelay={1.8}
              isParagraph={true}
              viewport="true"
              className={"opacity-60 text-sm md:text-base lg:text-lg"}
            />
          </div>
          <Button
            message={"Say Hello"}
            icon={<LuSend size={20} />}
            link={"https://www.linkedin.com/in/anujprasad0"}
            iconAnimation={buttonIconVariant}
          />
        </div>
      </div>
      <div className="w-full xl:max-w-6xl m-auto">
        <div className="hidden w-81 xl:w-90 lg:flex items-center justify-end gap-2 py-17">
          <div className="border-2 rounded-full h-7 w-4 flex flex-col items-center py-[5px]">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 4 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-[1.6px] h-2 bg-[#323232] rounded-full"
            ></motion.div>
          </div>
          <div className="text-lg">Scroll down</div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 4 }}
            transition={{
              delay: 0.2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <FaArrowDown size={15} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
