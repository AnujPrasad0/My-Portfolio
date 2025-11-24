import { motion, useAnimation } from "motion/react";

const Button = (prop) => {
  const Tag = prop.as || "a";
  const MotionTag = motion.create(Tag);

  const iconControls = useAnimation();

  const buttonVariant = {
    hidden: {
      scaleX: 0,
    },
    show: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <MotionTag
      variants={buttonVariant}
      initial="hidden"
      whileInView="show"
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      }}
      onHoverStart={() => iconControls.start("hidden")} // reset to initial
      onHoverEnd={() => iconControls.start("show")} // replay animation
      viewport={{ amount: 0.8 }}
      href={prop?.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-[#323232] text-white px-5 py-3 md:px-8 md:py-5 gap-3 rounded-2xl cursor-pointer cursor-hide"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.25 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="font-medium lg:text-xl"
      >
        {prop?.message}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.25 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className=""
      >
        <motion.div
          variants={prop.iconAnimation}
          initial="hidden"
          whileInView="show"
          animate={iconControls}
          viewport={{ amount: 0.25 }}
          className=""
        >
          {prop?.icon}
        </motion.div>
      </motion.div>
    </MotionTag>
  );
};

export default Button;
