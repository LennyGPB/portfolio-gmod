"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../../../../public/Data/projects";
import { SparklesCore } from "../../components/UI/Sparkles";
import { useState } from "react";
import Link from "next/link";

export default function ProjectDetails({ params }) {
  const project = projects.find(
    (project) => String(project.slug) === String(params.slug)
  );

  const [mainImage, setMainImage] = useState(project.image[0]);

  const descriptionParagraphs = project.description
    .split("\n")
    .map((p, idx) => (
      <p key={idx} className="text-white">
        {p}
      </p>
    ));

  return (
    <section className="min-h-screen flex flex-col items-center bg-myblack">
      <div className="h-auto relative w-full overflow-hidden rounded-md">
        <div className="w-full absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.2}
            maxSize={1}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#7E5EA5"
          />
        </div>
        <section className="w-full relative flex items-center justify-center z-20">
          <motion.div
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
            className="w-full overflow-hidden pb-20"
          >
            <div className="flex flex-col justify-center items-center gap-8 pt-32">
              <h1 className="text-white text-2xl font-aldrich uppercase">
                {project.title}
              </h1>

              <div className=" flex flex-col justify-center gap-2 px-8 sm:px-0">
                <div>
                  <Image
                    src={mainImage}
                    width={1000}
                    height={1000}
                    alt={project.name}
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="w-16 h-12 md:w-40 md:h-20 flex gap-2">
                  {project.image.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img}
                      width={400}
                      height={400}
                      alt={`${project.name} ${idx + 1}`}
                      className={`object-cover rounded-xl cursor-pointer opacity-50 ${
                        mainImage === img ? "opacity-100" : ""
                      }`}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
                </div>
              </div>
              <div className="px-8 sm:px-0 max-w-[1000px] flex flex-wrap justify-center w-full gap-2 sm:gap-8">
                {project.techno.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-mylightpurple w-20 sm:w-32 text-white font-aldrich text-xs sm:text-sm text-center py-1 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="px-8 sm:px-0 flex flex-col gap-2 text-white tracking-wide text-left text-xs sm:text-sm max-w-[1000px] w-full">
                {descriptionParagraphs}
              </div>
              {/* <div className="flex gap-2">
                <Link target="_blank" href={project.link}>
                  <button className="w-28 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black font-aldrich text-sm font-bold z-50">
                    {" "}
                    {project.finish ? "Voir le site" : "En cours"}
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="w-28 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black font-aldrich text-sm font-bold z-50">
                    Retour
                  </button>
                </Link>
              </div> */}
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
