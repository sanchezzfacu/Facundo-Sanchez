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
          <article className="presentation-text">
            <p>Soy el Frontend Developer que estás buscando para tu equipo.</p>

            <p>
              Tengo mas de 1 año de experiencia trabajando y actualmente me
              encuentro aprendiendo nuevas tecnologías a la vez que hago
              trabajos freelance.
            </p>
          </article>

          <div className="contact-buttons">
            <a href="mailto:sanchezfacundocristian@hotmail.com" target="_blank">
              <Icon name="mail" fill="#fff" viewBox="0 0 24 24" />
              Contactame
            </a>

            <a href="https://www.linkedin.com/in/sanchezzfacu/" target="_blank">
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
