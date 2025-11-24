import React from "react";
import Typewriter from "./Typewriter";

const HeadSection = (prop) => {
  return (
    <div id={prop?.id} className="flex flex-col items-center gap-2 py-10">
      <Typewriter
        text={prop?.section}
        startDelay={0}
        charSpeed={0.1}
        className={"text-3xl md:text-4xl lg:text-5xl font-semibold"}
      />
      <Typewriter
        text={prop?.para}
        startDelay={0}
        charSpeed={0.1}
        className={"opacity-60 lg:text-lg"}
      />
    </div>
  );
};

export default HeadSection;
