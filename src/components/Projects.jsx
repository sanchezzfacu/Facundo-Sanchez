import CircleLogo from "./CircleLogo";
import ProjectDisplay from "./ProjectDisplay";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">
        <CircleLogo />
        Proyectos
      </h2>

      <ProjectDisplay
        projectName="MyS Accesorios"
        projectDescription="Desarrollo de un ecommerce para un emprendimiento. Cuenta con todas
        las funcionalidades de una tienda online típica."
        projectImage="/mysaccesorios.png"
        projectTechnologies={[
          { technology: "Next.js", technologyIcon: "next.js" },
          { technology: "TypeScript", technologyIcon: "typescript" },
          { technology: "Tailwind", technologyIcon: "tailwind" },
          { technology: "Express.js", technologyIcon: "express" },
          { technology: "MongoDb", technologyIcon: "mongodb" },
          { technology: "Mongoose", technologyIcon: "mongoose" },
        ]}
        website="https://mysaccesorios.com/"
      />

      <ProjectDisplay
        projectName="Gamila Traslados"
        projectDescription="Desarrollo de una landing page (pagina de servicios) para empresa dedicada al
        traslado de pasajeros."
        projectImage="/trasladosgamila.png"
        projectTechnologies={[
          { technology: "Next.js", technologyIcon: "nextjs" },
          { technology: "JavaScript", technologyIcon: "javascript" },
          { technology: "Sass", technologyIcon: "sass" },
          { technology: "Express.js", technologyIcon: "express" },
          { technology: "MongoDb", technologyIcon: "mongodb" },
          { technology: "Mongoose", technologyIcon: "mongoose" },
        ]}
        website="https://trasladosgamila.com/"
      />

      <ProjectDisplay
        projectName="Hola Shop"
        projectDescription="Desarrollo de una landing page (pagina de servicios) para empresa dedicada al
        traslado de pasajeros."
        projectImage="/hshop.png"
        projectTechnologies={[
          { technology: "React", technologyIcon: "react" },
          { technology: "JavaScript", technologyIcon: "javascript" },
          { technology: "CSS", technologyIcon: "css" },
          { technology: "Express.js", technologyIcon: "express" },
          { technology: "PostgreSQL", technologyIcon: "postgresql" },
          { technology: "Sequelize", technologyIcon: "sequelize" },
        ]}
        repository="https://github.com/guidoabelleira/E-Commerce-PF10"
      />

      <ProjectDisplay
        projectName="Weather App"
        projectDescription="Aplicacion que consume una api del clima, donde se puede consultar
        el clima de cualquier ciudad en tiempo real."
        projectImage="/weather-home.png"
        projectTechnologies={[
          { technology: "JavaScript", technologyIcon: "javascript" },
          { technology: "CSS", technologyIcon: "css" },
          { technology: "HTML", technologyIcon: "html" },
        ]}
        website="https://mysaccesorios.com/"
        repository="https://github.com/sanchezzfacu/weather-VanillaJs"
      />

      <ProjectDisplay
        projectName="Calculadora"
        projectDescription="Desarrollo de una calculadora usando JavaScript puro la cual permite
        relizar cualquier operación básica."
        projectImage="/calculadora-home.png"
        projectTechnologies={[
          { technology: "JavaScript", technologyIcon: "javascript" },
          { technology: "CSS", technologyIcon: "css" },
          { technology: "HTML", technologyIcon: "html" },
        ]}
        // website=""
        website=""
        repository="https://github.com/sanchezzfacu/calculadora-vanillaJS"
      />

      {/* <div className="project-reversed-pos project">
        <div className="project-image">
          <img src={homeWeather} alt="" />
        </div>
        <div className="project-information">
          <h3 className="developed-text">Proyecto desarrollado</h3>

          <h1>Aplicación del clima</h1>

          <h3 className="project-description">
            Aplicacion que consume una api del clima, donde se puede consultar
            el clima de cualquier ciudad en tiempo real.
          </h3>

          <div className="tecnologies">
            <h5>JavaScript</h5>
            <h5>SASS</h5>
            <h5>HTML</h5>
            <h5>API</h5>
          </div>
          <div className="repository-btn">
            <a
              href="https://github.com/sanchezzfacu/weather-VanillaJs"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
      </div> */}

      {/* <div className="project-reversed-pos project">
        <div className="project-image">
          <img src={homeproyectofinal} alt="" />
        </div>
        <div className="project-information">
          <h3 className="developed-text">Proyecto desarrollado</h3>

          <h1>Proyecto Final Carrera | Ecommerce</h1>

          <h3 className="project-description">
            Desarrollo de un ecommerce con un grupo de 6 personas usando
            metodología ágil (scrum).
          </h3>

          <div className="tecnologies">
            <h5>React</h5>
            <h5>Redux</h5>
            <h5>CSS</h5>
            <h5>Node</h5>
            <h5>Sequelize</h5>
            <h5>PostgreSQL</h5>
            <h5>Git</h5>
            <h5>SCRUM</h5>
          </div>
          <div className="repository-btn">
            <a
              href="https://github.com/guidoabelleira/E-Commerce-PF10"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="project-normal-pos project">
        <div className="project-image">
          <img src={homeGamila} alt="" />
        </div>
        <div className="project-information">
          <h3 className="developed-text">Proyecto desarrollado</h3>

          <h1>Freelance | Empresa de Traslados</h1>

          <h3 className="project-description">
            Desarrollo freelance de una landing page para empresa dedicada al
            traslado de pasajeros.
          </h3>

          <div className="tecnologies">
            <h5>JavaScript</h5>
            <h5>SASS</h5>
            <h5>HTML</h5>
          </div>
          <div className="repository-btn">
            <a
              href="https://github.com/sanchezzfacu/gamila-traslados"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="project-normal-pos project">
        <div className="project-image">
          <img src={homeFood} alt="" />
        </div>
        <div className="project-information">
          <h3 className="developed-text">Proyecto desarrollado</h3>

          <h1>Sitio Web de Recetas</h1>

          <h3 className="project-description">
            Desarrollo de una SPA que consume la API de spoonacular, a la cual
            se le agregaron funcionalidades extras.
          </h3>

          <div className="tecnologies">
            <h5>React</h5>
            <h5>Redux</h5>
            <h5>CSS</h5>
            <h5>Node</h5>
            <h5>Sequelize</h5>
            <h5>PostgreSQL</h5>
            <h5>API</h5>
          </div>
          <div className="repository-btn">
            <a
              href="https://github.com/sanchezzfacu/Proyecto-individual-Foods"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </div>
      </div>

       */}
    </div>
  );
}

export default Projects;
