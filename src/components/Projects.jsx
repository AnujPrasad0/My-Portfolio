import { motion } from "motion/react";
import HeadSection from "./HeadSection";
import novaai from "../assets/novaai.png";
import chefania from "../assets/chefania.png";
import { FaArrowRightLong } from "react-icons/fa6";
import dosajunction from "../assets/dosajunction.png";

const Projects = ({ isMobile }) => {
  const project = [
    {
      img: chefania,
      name: "ChefAnia",
      desc: "Generates personalized recipes from the ingredients you have, helping reduce food waste and discover new dishes.",
      link: "https://chefania.onrender.com",
    },
    {
      img: novaai,
      name: "Nova AI",
      desc: "An intelligent AI tool designed to create content, answer queries, and boost productivity effortlessly.",
      link: "https://nova-ai-acxj.onrender.com",
    },
    {
      img: dosajunction,
      name: "The Dosa Junction",
      desc: "A modern café showcase website presenting the flavors, menu, and story of The Dosa Junction.",
      link: "https://anujprasad0.github.io/TheDosaJunction",
    },
  ];

  return (
    <>
      <HeadSection
        id={"Projects"}
        section={"Projects"}
        para={"My recent Work"}
      />
      <div className="max-w-lg md:max-w-6xl m-auto md:w-11/12 px-7 py-5 flex flex-col md:flex-row justify-center flex-wrap gap-5 lg:gap-8">
        {project.map((item, idx) => (
          <motion.a
            initial={{
              x: isMobile ? (idx % 2 == 0 ? -40 : 40) : idx % 2 == 0 ? -80 : 80,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ amount: 0.75 }}
            key={idx}
            href={item.link}
            target="_blank"
            className="p-5 inset-ring inset-ring-[#e8e8e8] rounded-2xl space-y-5 md:w-[48%] max-w-md overflow-hidden"
          >
            <div className="rounded-2xl overflow-hidden cursor-hide">
              <img
                className="filter lg:grayscale lg:brightness-90 hover:filter-none hover:brightness-100 transition-all duration-300 ease-in-out hover:scale-110 "
                src={item.img}
                alt=""
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-lg flex items-center gap-3">
                {item.name}{" "}
                <motion.div
                  initial={{ x: 4 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className=""
                >
                  <FaArrowRightLong />
                </motion.div>
              </h3>
              <p className="opacity-60 text-sm">{item.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default Projects;
