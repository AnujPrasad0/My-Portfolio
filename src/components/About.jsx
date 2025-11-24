import Button from "./Button";
import { motion } from "motion/react";
import Typewriter from "./Typewriter";
import HeadSection from "./HeadSection";
import { SlBadge } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { PiSuitcaseBold } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";

const About = () => {
  const items = [
    {
      name: "Experience",
      icon: <SlBadge size={20} />,
      extra: "Fresher",
    },
    {
      name: "Completed",
      icon: <PiSuitcaseBold size={20} />,
      extra: "10 + Projects",
    },
    {
      name: "Support",
      icon: <BiSupport size={20} />,
      extra: "Online 24/7",
    },
  ];

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
      rotate: -10,
      scale: 0.9,
    },
    show: {
      rotate: 10,
      scale: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const buttonIconVariant = {
    hidden: {
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    show: {
      rotate: [-10, 10],
      transition: {
        delay: 1,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <HeadSection id={"About"} section={"About Me"} para={"My introduction"} />
      <div className="flex flex-col md:flex-row items-center justify-around md:py-10 px-7 pb-8 gap-10 max-w-lg md:max-w-6xl m-auto md:w-11/12">
        <motion.div
          initial={{
            x: 0,
            borderRadius: "100%",
            scale: 0,
            rotate: 0,
            opacity: 0,
          }}
          whileInView={{
            x: [-100, 0, 0],
            rotate: [-360, 0, 0],
            scale: [0, 1, 1],
            borderRadius: ["100%", "100%", "10%"],
            opacity: [0.4, 1, 1],
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.6, 1],
          }}
          whileHover={{ borderRadius: "100%" }}
          viewport={{ amount: 0.25 }}
          className="rounded-2xl size-55 lg:size-85 bg-[url('src/assets/face.jpg')] bg-center bg-cover filter lg:grayscale lg:brightness-90 hover:filter-none hover:brightness-100 transition-[filter] duration-300 ease-in-out"
        ></motion.div>
        <div className="flex flex-col flex-1 items-center justify-between gap-5 lg:gap-10 max-w-150">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "0% 0px -23% 0px" }}
            className="flex justify-between gap-2 lg:gap-5"
          >
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center gap-2 inset-ring inset-ring-[#e8e8e8] rounded-xl p-2 w-25 lg:w-32"
              >
                <motion.div variants={itemVariant} className="">
                  {item.icon}
                </motion.div>
                <h3 className="text-sm lg:text-base">{item.name}</h3>
                <p className="text-xs lg:text-sm opacity-60">{item.extra}</p>
              </motion.div>
            ))}
          </motion.div>
          <Typewriter
            text="A creative web developer focused on crafting fast, intuitive, and polished web experiences using modern technologies, clean design principles, and attention to every small detail."
            startDelay={0}
            isParagraph={true}
            viewport="true"
            className={"opacity-60 text-sm lg:text-base text-center"}
          />
          <Button
            message={"Download Resume"}
            icon={<IoDocumentTextOutline size={20} />}
            link={"src/assets/AnujResume.pdf"}
            iconAnimation={buttonIconVariant}
          />
        </div>
      </div>
    </>
  );
};

export default About;
