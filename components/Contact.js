import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Image from "next/image";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_ID
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      )
      .finally(() => {
        setInputs({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <section id="contact" className="max-w-screen-2xl mx-auto">
      <motion.div
        ref={ref}
        className="h-full  m-auto flex flex-col lg:flex-row lg:items-center px-10"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="flex-1 flex flex-col justify-center items-center"
          variants={variants}
        >
          <motion.h1
            className="text-8xl text-center text-slate-700"
            variants={variants}
          >
            Let&apos;s Connect
          </motion.h1>
          <Image
            src="/mail.svg"
            width={200}
            height={200}
            className=""
            alt="mail arrow"
          />
        </motion.div>
        <motion.div className="flex-1 w-full">
          <form
            className="flex flex-col gap-5"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div className="flex items-center justify-between gap-[46px]">
              <label
                htmlFor="name"
                className="font-bold text-xl text-slate-700"
              >
                Name:
              </label>
              <input
                id="name"
                className="p-5 bg-transparent border-2 border-orange-500 rounded flex-1"
                type="text"
                required
                placeholder="E.g. Peyton Manning"
                name="name"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-[50px]">
              <label
                htmlFor="email"
                className="font-bold text-xl text-slate-700"
              >
                Email:
              </label>
              <input
                id="email"
                className="p-5 bg-transparent border-2 border-orange-500 rounded flex-1"
                type="text"
                required
                placeholder="E.g. PManning@gmail.com"
                name="email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>
            <div className="flex items-center gap-5">
              <label
                htmlFor="message"
                className="font-bold text-xl text-slate-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                className="p-5 bg-transparent border-2 border-orange-500 rounded flex-1"
                required
                rows={8}
                placeholder="Write your message here..."
                name="message"
                value={inputs.message}
                onChange={(e) =>
                  setInputs({ ...inputs, message: e.target.value })
                }
              />
            </div>
            <button className="px-4 py-3 border-none w-[200px] mx-auto rounded bg-orange-500 cursor-pointer font-medium">
              Send
            </button>
            {error && (
              <span className="bg-red-500 text-center w-fit mx-auto px-2 py-3 rounded font-bold text-slate-800">
                Failed to Send! Please try again.
              </span>
            )}
            {success && (
              <span className="bg-green-500 text-center w-fit mx-auto px-2 py-3 rounded font-bold text-slate-800">
                Message sent successfully!
              </span>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
