import { motion } from "motion/react";
import HeadSection from "./HeadSection";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Typewriter from "./Typewriter";
import { useRef } from "react";

const Skills = ({ isMobile }) => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);

  const items = [
    {
      name: "Frontend Developer",
      ref: frontendRef,
      skills: [
        "React",
        "GSAP",
        "Motion",
        "Tailwind",
        "Bootstrap",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "Backend Developer",
      ref: backendRef,
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "JWT"],
    },
  ];

  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        // time between each child start
        staggerChildren: 0.2,
        // 1 = forward order (logo then items)
        staggerDirection: 1,
      },
    },
  };

  const itemVariant = {
    hidden: {
      scale: 1,
      opacity: 0,
    },
    show: (isMobile) => ({
      scale: [0, isMobile ? 1.2 : 1.5, 1],
      opacity: [1, 1, 1],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <HeadSection
        id={"Skills"}
        section={"Skills"}
        para={"My technical level"}
      />
      <div className="max-w-lg md:max-w-6xl m-auto md:w-11/12 px-7 py-5 flex flex-col md:flex-row items-stretch gap-7">
        {items.map((item, idx) => (
          <div
            ref={item.ref}
            key={idx}
            className="flex flex-col md:flex-1/2 gap-6 lg:gap-10 items-center inset-ring inset-ring-[#e8e8e8] rounded-2xl px-5 py-8 lg:py-12"
          >
            <Typewriter
              text={item.name}
              startDelay={0}
              className={"text-lg lg:text-2xl font-medium text-center"}
            />
            <motion.div
              variants={parentVariants}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-2 gap-x-[15vw] grid-rows-4 md:gap-x-[6vw] gap-y-3 lg:gap-y-6 xl:gap-x-30"
            >
              {item.skills.map((skill, idx) => (
                <motion.div
                  variants={itemVariant}
                  custom={isMobile}
                  drag
                  dragConstraints={item.ref}
                  dragTransition={{
                    bounceStiffness: 600,
                    bounceDamping: 10,
                  }}
                  key={idx}
                  className="flex items-center gap-2 cursor-grab active:cursor-grabbing"
                >
                  <span>
                    <BsFillPatchCheckFill />
                  </span>
                  <p className="text-lg cursor-hide">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
