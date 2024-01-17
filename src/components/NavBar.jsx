// import { useRef } from 'react'
// import Circle from "./Circle";
function Navbar() {
  return (
    <header>
      <nav>
        <input type="checkbox" id="check" />
        {/* <div className="circle">
          <Circle />
        </div> */}
        {/* <label htmlFor="check" className="checkbtn">
          <img className="menu-btn" src={menu} alt="" height="35px" />
        </label> */}

        <a href="/#about">Acerca de mi</a>

        <a href="/#experience">Experiencia</a>

        <a href="/#technologies">Tecnologías</a>

        <a href="/#projects">Proyectos</a>

        <a href="/#contact">Contáctame</a>
      </nav>
    </header>
  );
}

export default Navbar;
