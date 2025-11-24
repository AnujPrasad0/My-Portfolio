import { motion } from "motion/react";

const Typewriter = ({
  text = "",
  className = "",
  startDelay = 1,
  charSpeed = 0.06,
  wordSpeed = 0.12,
  isParagraph = false, // ⭐ boolean to switch mode
  viewport = false,
  as = "p",
}) => {
  const Tag = as;

  // WORD MODE (when isParagraph = true)
  if (isParagraph) {
    const words = text.split(" ");
    return (
      <Tag
        aria-label={text}
        className={`${className} cursor-hide cursor-default`}
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1, once: viewport }}
            transition={{
              delay: startDelay + i * wordSpeed,
            }}
            style={{ whiteSpace: "pre-wrap", display: "inline" }}
          >
            {w + (i === words.length - 1 ? "" : " ")}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // CHARACTER MODE (when isParagraph = false)
  const chars = Array.from(text);
  return (
    <Tag
      aria-label={text}
      className={`${className} cursor-hide cursor-default`}
    >
      <span style={{ display: "inline-block" }}>
        {chars.map((c, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.25, once: viewport }}
            transition={{
              delay: startDelay + i * charSpeed,
              duration: 0.02,
            }}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {c}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
};

export default Typewriter;
