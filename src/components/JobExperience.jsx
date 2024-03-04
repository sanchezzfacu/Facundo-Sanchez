// import JobExperienceSvg from "./app/assets/svg/Programming-rafiki.svg";
import Image from "next/image";
import JobExperienceSvg from "../app/assets/svg/Programming-rafiki.svg";
import CircleLogo from "./CircleLogo";
import JobSvg from "./JobSvg";
import Reveal from "./Reveal";
import Icon from "./Icon";
// import { ReactSVG } from "react-svg";

function JobExperience() {
  return (
    <Reveal>
      <div className="job-experience-container" id="experience">
        <h1 className="job-experience-title">
          <CircleLogo />
          Experiencia Laboral
        </h1>

        <div className="job-experience-content">
          <div className="job-experience-info">
            <div className="job">
              <h3>Oct. 2022 - Jul. 2023</h3>
              <h1>FrontEnd Developer - Ontiime.</h1>
              <ul>
                <li>
                  - Planificación y desarrollo de la estructura del proyecto
                  para tener una base escalable.
                </li>
                <li>
                  - Implementación del <strong>system design</strong> del equipo
                  de diseño.
                </li>
                <li>
                  - Creación integral de la <strong>versión mobile</strong> del
                  producto siguiendo criterios propios.
                </li>
                <li>- Desarrollo integral de funcionalidades del producto.</li>
                <li>
                  - Creación de dashboard para la visualizacion de datos
                  financieros de las empresas.
                </li>
                <li>
                  - Aporte de ideas a partes del producto que no estaban
                  definidas.
                </li>
              </ul>
              <a href="#ontiime">
                Saber más{" "}
                <Icon
                  name="chevron-right"
                  height="18px"
                  width="18px"
                  viewBox="0 0 24 24"
                  fill="#07fad3"
                />
              </a>
            </div>

            <div className="job">
              <h3>Ago. 2023 - Ene. 2024</h3>

              <h1>FullStack Developer - MyS Accesorios.</h1>
              <ul>
                <li>
                  - Desarrollo de un e-commerce para generar ventas online.
                </li>
                <li>
                  - Generación de un panel de control para publicar/eliminar
                  productos y categorías, crear cupones de descuentos, ver órdenes de compra entre
                  otros.
                </li>
                <li>- Creación e implementación del diseño del ecommerce.</li>
                <li>
                  - Planificación del proyecto para mayor escalabilidad en el
                  tiempo.
                </li>
                <li>
                  - Planificación e implementación de una{" "}
                  <strong>campaña de facebook e instagram ads</strong> para
                  obtener mayor cantidad de ventas y tener un mayor alcance.
                </li>
              </ul>
              <a href="#mysaccesorios">
                Saber más{" "}
                <Icon
                  name="chevron-right"
                  height="18px"
                  width="18px"
                  viewBox="0 0 24 24"
                  fill="#07fad3"
                />
              </a>
            </div>

            <div className="job">
              <h3>Jul. 2022 - Sept. 2022</h3>

              <h1>FrontEnd Developer - Gamila Traslados.</h1>
              <ul>
                <li>- Definí la estructura central del proyecto.</li>
                <li>
                  - Investigación de las necesidades del cliente para
                  desarrollar una solución que impulsara su capacidad de
                  alcanzar una audiencia más amplia y generar mayores ventas.
                </li>
                <li>
                  - Buenas practicas de SEO para obtener un buen posicionamiento
                  en el buscador.
                </li>
                <li>
                  - Creación e implementación del diseño de la landing page.
                </li>
              </ul>
              <a href="#gamila">
                Saber más{" "}
                <Icon
                  name="chevron-right"
                  height="18px"
                  width="18px"
                  viewBox="0 0 24 24"
                  fill="#07fad3"
                />
              </a>
            </div>
          </div>

          <Image
            className="svg-job-experience"
            src={JobExperienceSvg}
            alt="asd"
          />
        </div>
      </div>
    </Reveal>
  );
}

export default JobExperience;
