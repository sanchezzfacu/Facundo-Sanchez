import React from "react";
import Icon from "./Icon";
import Image from "next/image";

function ProjectDisplay({
  projectName,
  projectDescription,
  projectTechnologies,
  projectImage,
  repository,
  website,
  projectUrl,
  reversed,
}) {
  return (
    <div className="project-normal-pos project">
      <div className="project-image">
        <img src={projectImage} alt="project image" />
      </div>

      <div className="project-information">
        <h3 className="developed-text">Proyecto desarrollado</h3>

        <h1 className="project-name">{projectName}</h1>

        <h3 className="project-description">{projectDescription}</h3>

        <div className="project-technologies">
          {projectTechnologies.map((technology) => (
            <div className="technology-square">
              <Icon
                name={technology.technologyIcon}
                height="18px"
                width="18px"
              />
              <span>{technology.technology}</span>
            </div>
          ))}
        </div>

        <div className="project-btns">
          {repository?.length > 0 && (
            <a
              href={repository}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" height="36px" width="36px" fill="#fff" />
            </a>
          )}
          {website?.length > 0 && (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                name="web"
                height="36px"
                width="36px"
                fill="#fff"
                viewBox="0 0 58 58"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;