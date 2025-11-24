import { useState } from "react";
import { motion } from "motion/react";
import Typewriter from "./Typewriter";
import HeadSection from "./HeadSection";
import { CiCalendar } from "react-icons/ci";
import { RiSuitcaseLine } from "react-icons/ri";
import { VscMortarBoard } from "react-icons/vsc";

const Qualification = () => {
  const education = [
    {
      course: "Mern with DSA",
      institute: "Sheryians",
      date: "2025",
      left: true,
    },
    {
      course: "BSc CS",
      institute: "NBU - Siliguri",
      date: "2022 - 2025",
      left: false,
    },
    {
      course: "Science",
      institute: "WBCHSE - Demdima",
      date: "2020 - 2022",
      left: true,
    },
    {
      course: "ZBMS",
      institute: "CBSE - Birpara",
      date: "2020",
      left: false,
    },
  ];
  const experience = [
    {
      course: "Fresher",
      institute: "Your Company",
      date: "2025",
      left: true,
    },
  ];

  const [event, setEvent] = useState("education");

  const parentVariants = {
    hidden: {},
    show: (custom) => ({
      transition: {
        delayChildren: custom,
        // time between each child start
        staggerChildren: 0.3,
        // 1 = forward order (logo then items)
        staggerDirection: 1,
      },
    }),
  };

  const itemVariant = {
    hidden: (custom) => ({
      x: custom?.x ?? 0,
      opacity: custom?.opacity ?? 0,
      scale: custom?.scale ?? 1,
    }),
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <HeadSection
        id={"Qualification"}
        section={"Qualification"}
        para={"My personal journey"}
      />
      <div className="max-w-lg m-auto px-7">
        <div className="font-medium text-lg flex items-center justify-evenly pt-5 pb-10">
          <div
            onClick={() => setEvent("education")}
            className={`flex items-center gap-1 cursor-pointer ${
              event == "education" ? "opacity-100" : "opacity-70"
            }`}
          >
            <VscMortarBoard size={27} />{" "}
            <Typewriter text="Education" startDelay={0} />
          </div>
          <div
            onClick={() => setEvent("experience")}
            className={`flex items-center gap-1 cursor-pointer ${
              event == "experience" ? "opacity-100" : "opacity-70"
            }`}
          >
            <RiSuitcaseLine size={25} />{" "}
            <Typewriter text="Experience" startDelay={0} />
          </div>
        </div>
        <motion.div
          key={`timeline-${event}`}
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: "0% 0px -25% 0px", once: false }}
          custom={0}
          className="relative my-5 flex flex-col"
        >
          <motion.div
            className="absolute w-0.5 bg-[#323232] opacity-70 top-0 left-1/2 transform -translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{
              height: `${
                ((event === "education"
                  ? education.length - 1
                  : experience.length - 1) /
                  (event === "education"
                    ? education.length
                    : experience.length)) *
                100
              }%`,
            }}
            transition={{
              delay: 0.3,
              duration:
                (event === "education" ? education.length : experience.length) *
                  0.3 +
                0.1,
              ease: "easeOut",
            }}
            viewport={{ margin: "0% 0px -25% 0px", once: false }}
          />

          {(event === "education" ? education : experience).map((item, idx) => (
            <div key={idx} className="flex relative gap-8">
              <motion.div
                variants={itemVariant}
                custom={{ x: 0, opacity: 1, scale: 0 }}
                style={{ originY: 0 }}
                className="absolute size-4 bg-[#696969] rounded-full top-0 left-1/2 transform -translate-x-1/2"
              />
              <motion.div
                variants={itemVariant}
                custom={{ x: item.left ? -20 : 20 }}
                className={`flex-1/2 flex cursor-default ${
                  item.left ? "order-1 justify-start" : "order-2 justify-end"
                }`}
              >
                <div className="space-y-1">
                  <h2 className="font-medium text-nowrap">{item.course}</h2>
                  <h3 className="opacity-60 text-sm text-nowrap">
                    {item.institute}
                  </h3>
                  <div className="opacity-60 flex items-center text-sm gap-1 pt-3 text-nowrap">
                    <CiCalendar /> {item.date}
                  </div>
                </div>
              </motion.div>
              <div
                className={`flex-1/2 w-full ${
                  item.left ? "order-2" : "order-1"
                }`}
              ></div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Qualification;
