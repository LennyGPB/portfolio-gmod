import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../UI/3d-card";
import { projects } from "../../../../public/Data/projects";
import Link from "next/link";

export default function CardProject({ filter = "all" }) {
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.categorie === filter);

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {filteredProjects
        .slice()
        .reverse()
        .map((project) => (
          <CardContainer key={project.id} className="inter-var">
            <CardBody className="relative group/card w-[20rem] sm:w-[25rem] h-full p-6 rounded-md purpleBg bg-opacity-20">
              <CardItem
                translateZ="50"
                className="text-xl text-center font-aldrich text-white dark:text-white h-8"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white font-aldrich text-sm max-w-sm mt-2 dark:text-neutral-300 h-12"
              >
                {project.descriptionCard}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-2">
                {project.categorie === "web" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={project.image[0]}
                      height="1000"
                      width="1000"
                      className="h-70 w-full rounded-md object-cover group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  </a>
                ) : (
                  <Link href={`/projects/${project.slug}`}>
                    <Image
                      src={project.image[0]}
                      height="1000"
                      width="1000"
                      className="h-70 w-full rounded-md object-cover group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  </Link>
                )}
              </CardItem>
              <div className="flex justify-center items-center pt-6">
                <CardItem
                  translateZ={50}
                  as="a"
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black font-aldrich text-xs font-bold z-50"
                >
                  {project.finish ? "Consulter" : "En cours"}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
    </div>
  );
}
