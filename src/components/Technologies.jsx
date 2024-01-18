import Image from "next/image";
import CircleLogo from "./CircleLogo";
import nextjs from "../app/assets/svg/nextjs.svg";
import Icon from "./Icon";
import Nextjs from "./Nextjs";

function Technologies() {
  return (
    <div className="technologies-container">
      <h2 className="technologies-title">
        <CircleLogo />
        Tecnologías
      </h2>

      <div className="items-tech-container">
        <div className="tech-item">
          {/* <img src={js} alt=""/> */}
          <Icon
            name="javascript"
            viewBox="0 0 1052 1052"
            height="72px"
            width="72px"
          />
          <h3>JavaScript</h3>
        </div>
        <div className="tech-item">
          <Icon name="typescript" height="72px" width="72px" />
          <h3>TypeScript</h3>
        </div>
        <div className="tech-item">
          <Icon name="react" height="72px" width="72px" />
          <h3>React</h3>
        </div>

        <div className="tech-item">
          <Icon name="react-query" height="72px" width="72px" />
          <h3>React Query</h3>
        </div>

        <div className="tech-item">
          <Icon name="redux" height="72px" width="72px" />
          <h3>Redux</h3>
        </div>

        <div className="tech-item">
          <Icon name="html" height="72px" width="72px" />
          <h3>HTML</h3>
        </div>

        <div className="tech-item">
          <Icon name="css" height="72px" width="72px" />
          <h3>CSS</h3>
        </div>
        <div className="tech-item">
          <Icon name="sass" height="72px" width="72px" />
          <h3>SASS</h3>
        </div>

        <div className="tech-item">
          <Icon name="tailwind" height="72px" width="72px" />
          <h3>Tailwind</h3>
        </div>

        <div className="tech-item">
          <Icon name="git" height="72px" width="72px" />
          <h3>Git</h3>
        </div>

        <div className="tech-item">
          <Icon name="github" height="72px" width="72px" fill="#fff" />
          <h3>Github</h3>
        </div>

        <div className="tech-item">
          <Icon name="node" height="72px" width="72px" />
          <h3>Node</h3>
        </div>

        <div className="tech-item">
          <Icon name="sequelize" height="72px" width="72px" />
          <h3>Sequelize</h3>
        </div>

        <div className="tech-item">
          <Icon name="express" height="72px" width="72px" />
          <h3>Express.js</h3>
        </div>

        <div className="tech-item">
          <Icon name="postgresql" height="72px" width="72px" />
          <h3>PostgreSQL</h3>
        </div>

        <div className="tech-item">
          <Icon name="mongodb" height="72px" width="72px" />
          <h3>MongoDb</h3>
        </div>

        <div className="tech-item relative">
          {/* <Image src="../app/assets/svg/nextjs.svg" width={72} height={72} alt="nextjs" /> */}
          {/* <Image src={nextjs} width={72} height={72} alt="nextjs" /> */}
          {/* <Nextjs /> */}
          <div className="bg-white rounded-[150%] h-[72px] w-[72px] flex items-center justify-center absolute">

          <Icon name="nextjs" height="72px" width="72px" viewBox=".5 -.2 1023 1024.1" />
          </div>
          <h3>Next.js</h3>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
