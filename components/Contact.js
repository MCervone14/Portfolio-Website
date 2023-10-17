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
            <input
              className="p-5 bg-transparent border-2 border-orange-500 rounded"
              type="text"
              required
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
            <input
              className="p-5 bg-transparent border-2 border-orange-500 rounded"
              type="text"
              required
              placeholder="Your Email"
              name="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <textarea
              className="p-5 bg-transparent border-2 border-orange-500 rounded"
              required
              rows={8}
              placeholder="Message"
              name="message"
              value={inputs.message}
              onChange={(e) =>
                setInputs({ ...inputs, message: e.target.value })
              }
            />
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
