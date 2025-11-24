import Button from "./Button";
import Typewriter from "./Typewriter";
import { motion } from "motion/react";
import { toast } from "react-toastify";
import HeadSection from "./HeadSection";
import { LuSend } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  const contact = [
    {
      name: "Email",
      detail: "prasadanuj65@gmail.com",
      link: "mailto:prasadanuj65@gmail.com",
      icon: <MdOutlineMail size={30} />,
    },
    {
      name: "Whatsapp",
      detail: "+91 - 79085 147722",
      link: "https://wa.me/917908514772",
      icon: <FaWhatsapp size={30} />,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(e) {
    console.log(e);
  }

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
      <HeadSection
        id={"Contact"}
        section={"Contact Me"}
        para={"Get in touch"}
      />
      <div className="max-w-lg md:max-w-6xl m-auto md:w-11/12 px-7 pt-5 pb-30 flex flex-col md:flex-row md:justify-evenly gap-20 md:gap-0">
        <div className="space-y-8 lg:w-1/3">
          <Typewriter
            text="Talk to me"
            startDelay={0.6}
            className="text-center font-semibold text-xl"
          />
          <div className="flex flex-col gap-5 items-center">
            {contact.map((item, idx) => (
              <motion.a
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.5 }}
                href={item.link}
                target="_blank"
                key={idx}
                className="flex flex-col items-center w-full gap-5 inset-ring inset-ring-[#e8e8e8] rounded-2xl p-5 overflow-hidden"
              >
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{
                      rotate: [0, -10, 10],
                      transition: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.4,
                        ease: "easeInOut",
                        originY: 0,
                      },
                    }}
                    className="cursor-hide"
                  >
                    {item.icon}
                  </motion.div>
                  <h2 className="font-medium text-base">{item.name}</h2>
                  <Typewriter
                    text={item.detail}
                    startDelay={0.8}
                    className="text-sm opacity-60"
                  />
                </div>
                <div className="flex items-center gap-3 text-base opacity-60">
                  Write me{" "}
                  <motion.span
                    initial={{ x: 4 }}
                    whileInView={{ x: 0 }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <FaArrowRightLong />
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="space-y-8 lg:w-1/3">
          <Typewriter
            text="Write me your project"
            startDelay={0.6}
            className="text-center font-semibold text-xl"
          />
          <form
            onSubmit={handleSubmit(submitHandler, (err) => {
              toast.error(err?.name?.message);
              toast.error(err?.email?.message);
              toast.error(err?.textarea?.message);
            })}
            className="flex flex-col items-start gap-7"
          >
            <motion.label
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.75 }}
              htmlFor="name"
              className="relative inset-ring-2 inset-ring-[#8a8a8a] px-6 py-4 rounded-2xl w-full"
            >
              <h3 className="absolute -top-2 left-4 bg-white px-2 text-sm font-medium text-[#767676]">
                Name
              </h3>
              <input
                type="text"
                id="name"
                className="outline-none text-lg w-full cursor-hide"
                placeholder="Insert your name"
                {...register("name", { required: "Name is required" })}
              />
            </motion.label>
            <motion.label
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.75 }}
              htmlFor="email"
              className="relative inset-ring-2 inset-ring-[#8a8a8a] px-6 py-4 rounded-2xl w-full"
            >
              <h3 className="absolute -top-2 left-4 bg-white px-2 text-sm font-medium text-[#767676]">
                Email
              </h3>
              <input
                type="email"
                id="email"
                className="outline-none text-lg w-full cursor-hide"
                placeholder="Insert your email"
                {...register("email", { required: "Email is required" })}
              />
            </motion.label>
            <motion.label
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.75 }}
              htmlFor="textarea"
              className="relative inset-ring-2 inset-ring-[#8a8a8a] px-6 py-4 rounded-2xl w-full"
            >
              <h3 className="absolute -top-2 left-4 bg-white px-2 text-sm font-medium text-[#767676]">
                Project
              </h3>
              <textarea
                id="textarea"
                className="outline-none text-lg w-full min-h-30 cursor-hide"
                placeholder="Write your project"
                {...register("textarea", {
                  required: "Description is required",
                })}
              />
            </motion.label>
            <Button
              message={"Send Message"}
              icon={<LuSend size={20} />}
              as={"button"}
              iconAnimation={buttonIconVariant}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
