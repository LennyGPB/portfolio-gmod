"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "../../app/components/UI/Sparkles";
import styles from "./Presentation/Presentation.module.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    fonction: "",
    objet: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2wk87pr",
        "template_u9m00rn",
        e.target,
        "OQpdfRliSb-itPKwp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            name: "",
            fonction: "",
            objet: "",
            email: "",
            message: "",
          });
          setConfirmationMessage("Email envoyé avec succès !");
          setTimeout(() => {
            setConfirmationMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center bg-myblack"
    >
      <div className="h-auto relative w-full overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={3}
            particleDensity={5}
            className="w-full h-full"
            particleColor="#7E5EA5"
          />
        </div>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              delay: 0.5,
              transition: { ease: "easeOut", duration: 3 },
            },
          }}
          className="w-full relative h-screen flex flex-col items-center justify-center z-20"
        >
          <div className={styles.container__title}>
            <motion.h2
              className={styles.titleAndMore}
              initial={{ x: "-100%" }}
              animate={{ x: "65%" }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              CONTACT ME <span className={styles.titleName}>CONTACTEZ-MOI</span>{" "}
              CONTACT ME <span className={styles.titleName}>CONTACTEZ-MOI</span>{" "}
              CONTACT ME <span className={styles.titleName}>CONTACTEZ-MOI</span>{" "}
              CONTACT ME
            </motion.h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="pt-[2rem] md:pt-[4rem] flex justify-center flex-col gap-5 relative"
          >
            {confirmationMessage && (
              <p className="text-white font-aldrich text-center">
                {confirmationMessage}
              </p>
            )}
            <p className="text-white font-aldrich text-center">
              lennygomes.hp@gmail.com
            </p>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="NOM & PRENOM"
                className="px-[2rem] py-[0.3rem] w-[20rem] md:py-[0.5rem] bg-slate-50 bg-opacity-10 text-white rounded-md focus:outline-none focus:border-purple-500 transition-all duration-300 ease-in-out"
                onChange={handleChange}
                value={form.name}
                minLength="2"
                maxLength="30"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="fonction"
                name="fonction"
                placeholder="FONCTION"
                className="px-[2rem] py-[0.3rem] w-[20rem] md:py-[0.5rem] bg-slate-50 bg-opacity-10 text-white rounded-md focus:outline-none focus:border-purple-500 transition-all duration-300 ease-in-out"
                onChange={handleChange}
                value={form.fonction}
                minLength="2"
                maxLength="20"
              />
            </div>
            <div>
              <input
                type="text"
                id="objet"
                name="objet"
                placeholder="OBJET"
                className="px-[2rem] py-[0.3rem] w-[20rem] md:py-[0.5rem] bg-slate-50 bg-opacity-10 text-white rounded-md focus:outline-none focus:border-purple-500 transition-all duration-300 ease-in-out"
                onChange={handleChange}
                value={form.objet}
                minLength="2"
                maxLength="20"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL"
                className="px-[2rem] py-[0.3rem] w-[20rem] md:py-[0.5rem] bg-slate-50 bg-opacity-10 text-white rounded-md focus:outline-none focus:border-purple-500 transition-all duration-300 ease-in-out"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="MESSAGE"
                className="px-[2rem] py-[0.5rem] w-[20rem] bg-slate-500 bg-opacity-10 rounded-md  text-white focus:outline-none focus:border-purple-800 transition-all duration-300 ease-in-out "
                onChange={handleChange}
                value={form.message}
                required
                minLength="2"
                maxLength="350"
              />
            </div>
            <button
              type="submit"
              className="p-[0.5rem] text-white neon hover:text-white font-aldrich tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-purple-800 hover:ring-2 hover:ring-purple-600 hover:shadow-xl"
            >
              ENVOYER
            </button>
          </form>
        </motion.section>
      </div>
    </section>
  );
}
