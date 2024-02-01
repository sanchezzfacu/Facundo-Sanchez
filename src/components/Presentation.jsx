import DecorationCircle from "./DecorationCircle";
import Icon from "./Icon";

import Reveal from "./Reveal";

function Presentation() {
  return (
    <Reveal>
      <div className="presentation-container">
        <div className="presentation-content">
          <h4 className="greeting">Hola, mi nombre es</h4>
          <h1 className="big-font-name">Facundo Sánchez.</h1>
          <h2 className="gradient-text big-font-presentation">
            Frontend Developer.
          </h2>
          <h3 className="presentation-text">
            <p>
              • Soy un Frontend Developer de Salta Argentina apasionado a
              desarrollar interfaces de usuario.
            </p>

            {/* <p>
                    • Actualmente me encuentro en búsqueda de trabajo como programador a la vez que desarrollo
                    proyectos de manera freelance  a la vez que sigo expandiendo mis conocimientos.
                </p> */}

            <p>
              Tengo mas de 1 año de experiencia trabajando y actualmente me
              encuentro aprendiendo nuevas tecnologías a la vez que hago
              trabajos freelance.
            </p>
          </h3>


          <div className="contact-buttons">
            <a
              href="mailto:sanchezfacundocristian@hotmail.com"
              className="flex items-center justify-center px-2 "
            >
              <Icon name="mail" fill="#fff" viewBox="0 0 24 24" />
              Contactame
            </a>

            <a href="https://www.linkedin.com/in/sanchezzfacu/">
              <Icon name="linkedin" fill="#fff" />
              LinkedIn
            </a>
          </div>
          <DecorationCircle />
        </div>
      </div>
    </Reveal>
  );
}

export default Presentation;
