import React from "react";
import CircleLogo from "./CircleLogo";
import Reveal from "./Reveal";
import Icon from "./Icon";
import Image from "next/image";

function About() {
  return (
    <Reveal>
      <section className="about-container" id="about">
        <h1 className="about-title">
          <CircleLogo />
          Acerca de mi
        </h1>

        <div className="about-content">
          <div className="about-text-contact">
            <article>
              <p>
                Soy un apasionado a la tecnología que disfruta el adquirir
                nuevos conocimientos y experiencias. Soy una persona a la que le
                motivan los desafios ya que me fuerzan a mejorar y a aprender
                nuevas cosas.
              </p>
              <p>
                Me motiva ser parte de un grupo de personas en el que todos
                tiramos para el mismo lado para conseguir metas y objetivos en
                el corto y largo plazo.
              </p>
              <p>
                Cuento con buena capacidad de analisis y soy un apasionado a
                todo lo relacionado a crear interfaces de usuarios, es por eso
                que me encuentro en constante aprendizaje de nuevas herramientas
                que me permitan seguir creciendo como desarrollador frontend.
              </p>
              <p>
                Si estás buscando a una persona auto motivada con mucha
                capacidad de adaptación, no dudes en contactarme.
              </p>
            </article>

            <div className="github-linkedin-btn">
              <a
                href="https://www.linkedin.com/in/sanchezzfacu/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin-logo-bg">
                  <Icon name="linkedin" height="32px" width="32px" />
                </div>
              </a>
              <a
                href="https://github.com/sanchezzfacu"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" height="32px" width="32px" fill="#fff" />
              </a>
            </div>
          </div>

          <div className="about-image">
            <Image
              className="img-about"
              src="/about-img.png"
              fill
              alt="imagen no encontada"
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default About;
