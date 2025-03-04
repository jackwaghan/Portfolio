import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "@/Types/type";
import { AiOutlineLoading } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "@/utils/hook";
const Contact = () => {
  const contactVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const contactFormVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const contactVisibleVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div id="contact" className="container mx-auto flex transform-gpu flex-col">
      <motion.div
        variants={contactVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="flex items-center justify-center pt-20 md:pt-36"
      >
        <h1 className="font-mono text-4xl font-bold tracking-tight text-orange-300 md:text-6xl">
          Hire Me
        </h1>
      </motion.div>
      <div className="container mx-auto mt-16 grid h-full w-full grid-rows-1 items-center gap-4 px-4 md:mt-32 md:grid-cols-2">
        <motion.div
          variants={contactFormVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="order-2 md:order-1"
        >
          <Form />
        </motion.div>
        <motion.div
          variants={contactVisibleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="order-1 md:order-2"
        >
          <Email />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
const Form = () => {
  const [data, setdata] = useState();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const submit = async (data: FormValues) => {
    const request = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
    const response = await request.json();
    if (response) {
      setdata(response.message);
      setTimeout(() => reset(), 3000);
      reset();
    }
  };
  return (
    <div className="relative mx-auto mt-10 w-5/6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl md:mt-0 md:w-1/2 md:p-10">
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-md font-mono text-white/80 md:text-xl"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="on"
              {...register("name")}
              placeholder="Jack"
              className={`rounded-lg border border-white/10 bg-white/10 px-4 py-1.5 placeholder:text-white/30 focus:outline-none focus:ring-2 ${errors.name ? "ring-red-600" : "ring-orange-300"}`}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-md font-mono text-white/80 md:text-xl"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="on"
              {...register("email")}
              placeholder="jackwaghan@gmail.com"
              className={`rounded-lg border border-white/10 bg-white/10 px-4 py-1.5 placeholder:text-white/30 focus:outline-none focus:ring-2 ${errors.email ? "ring-red-600" : "ring-orange-300"}`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-md font-mono text-white/80 md:text-xl"
            >
              Message
            </label>
            <textarea
              id="message"
              autoComplete="on"
              {...register("message")}
              placeholder="Hello Jack, I want to hire you for my project."
              className={`rounded-lg border border-white/10 bg-white/10 px-4 py-1.5 placeholder:text-white/30 focus:outline-none focus:ring-2 ${errors.message ? "ring-red-600" : "ring-orange-300"}`}
              rows={3}
            />
          </div>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message?.message}</p>
          )}

          <motion.button
            whileTap={{ scale: 0.85, transition: { duration: 0.2 } }}
            whileHover={
              useWindowSize().width! > 768
                ? { scale: 0.95, transition: { duration: 0.2 } }
                : {}
            }
            type="submit"
            className={`text-md mt-5 flex items-center justify-center rounded-md p-2 font-mono font-semibold text-black md:text-xl ${isSubmitting ? "cursor-not-allowed opacity-50" : ""} ${isSubmitSuccessful ? "cursor-not-allowed bg-orange-400 opacity-50" : "bg-orange-300"}`}
            disabled={isSubmitting || isSubmitSuccessful}
          >
            {isSubmitting && (
              <AiOutlineLoading size={25} className="animate-spin" />
            )}
            {isSubmitSuccessful && data}
            {!isSubmitSuccessful && !isSubmitting && "Submit"}
          </motion.button>
        </div>
      </form>
      <div className="absolute inset-0 -z-10 bg-orange-300/10 blur-3xl" />
    </div>
  );
};

const Email = () => {
  return (
    <div className="mx-auto flex justify-center">
      <div className="flex flex-col gap-2 rounded-2xl border-4 border-dotted border-orange-200/60 p-4 md:gap-4 md:p-8">
        <div className="flex justify-center gap-2 font-mono text-xl font-semibold text-orange-200/30 md:text-4xl">
          <h1>91+</h1>
          <h1>6374364766</h1>
        </div>
        <div className="font-mono text-xl font-semibold text-orange-200/30 md:text-4xl">
          <h1>jackwaghan@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};
