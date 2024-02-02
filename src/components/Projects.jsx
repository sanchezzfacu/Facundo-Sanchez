import CircleLogo from "./CircleLogo";
import ProjectDisplay from "./ProjectDisplay";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">
        <CircleLogo />
        Proyectos
      </h2>

      <ProjectDisplay
        projectName="Ontiime"
        projectDescription="Ontiime es una solución SaaS B2B para el seguimiento de cuentas de clientes y recuperación de deudas. Su objetivo es minimizar los plazos de pago mediante estrategias innovadoras y, de esta manera, reducir las deudas de las empresas."
        projectImage="/dashboard.jpeg"
        projectTechnologies={[
          { technology: "React", technologyIcon: "react" },
          { technology: "TypeScript", technologyIcon: "typescript" },
          { technology: "Redux", technologyIcon: "redux" },
          { technology: "React Query", technologyIcon: "react-query" },
          { technology: "SASS", technologyIcon: "sass" },
          { technology: "Express.js", technologyIcon: "express" },
          { technology: "Mongoose", technologyIcon: "mongoose" },
          { technology: "MongoDb", technologyIcon: "mongodb" },
          // { technology: "Figma", technologyIcon: "figma" },
        ]}
        website="https://mysaccesorios.com/"
      />

      <ProjectDisplay
        projectName="MyS Accesorios"
        projectDescription="Ecommerce de accesorios de belleza para emprendimiento que brinda una solución a la digitalización de los datos del negocio y a un mayor alcance de audiencia. (panel de administrador, carrito de compra, cupones de descuentos, órdenes de compra, etc.)"
        projectImage="/mysaccesorios.png"
        projectTechnologies={[
          { technology: "Next.js", technologyIcon: "nextjs" },
          { technology: "TypeScript", technologyIcon: "typescript" },
          { technology: "Tailwind", technologyIcon: "tailwind" },
          { technology: "Express.js", technologyIcon: "express" },
          { technology: "MongoDb", technologyIcon: "mongodb" },
          { technology: "Mongoose", technologyIcon: "mongoose" },
          // { technology: "Figma", technologyIcon: "figma" },
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
        // website="https://mysaccesorios.com/"
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
        repository="https://github.com/sanchezzfacu/calculadora-vanillaJS"
      />
    </div>
  );
}

export default Projects;
