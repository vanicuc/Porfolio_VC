import "./Home.css";
import { Link } from "react-router-dom";
import Project from "./Projects";

export default function Home() {
  return (
    <>
      <div className="Box_Presentation">
        <div className="inf">
          {/* <h3 className='name' >Vanina Cucchietti</h3> */}
          <div className="hi">
            <h3>Hi,</h3>
            <h1>I'm Vanina Cucchietti</h1>
            <h2>Full-stack developer</h2>
            <div className="space"></div>
            <h3>CSS / JavaScript / React</h3>
          </div>

          <div className="Resumen">
            <p>
              16+ years working as an architect, transitioning to Full Stack
              Development after completing a a 3-month full-time bootcamp. I
              demonstrated proficiency in tackling front-end challenges,
              seamlessly blending UX/UI design knowledge with architectural
              insights and translating them effectively into code
            </p>
          </div>
          <div className="space"></div>

          <div className="box-link">
            <Link
              to="/Projects"
              className="link-button"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "solid 0.5px #b0b57de7",
                padding: "10px 40px",
                borderRadius: "10px", // Ajusta el valor según sea necesario
                textDecoration: "none", // Elimina la línea subrayada
              }}
            >
              Work experience
            </Link>
            <div className="space"></div>

            <div className="Links">
              <li>
                <a href="mailto:vanicuc@gmail.com">
                  <img src="email.png" alt="Icono de Mail" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vanina-c-90954248">
                  <img src="linkedin.png" alt="Icono de Linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/vanicuc/Porfolio_VC">
                  <img src="social.png" alt="Icono de Github" />
                </a>
              </li>
              <li>
                <a href="CV  vanina cucchietti  .pdf">
                  <img src="cv.png" alt="Icono de cv" />
                </a>
              </li>
            </div>
          </div>
        </div>

        <div className="Picture">
          <img
            src="./public/logo.jpg"
            alt="foto"
            className="foto"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}

{
  /* <a href="mailto:vanicuc@gmail.com"><img src="email.png" alt="Icono de Mail" /></a>
    <a href="https://www.linkedin.com/in/vanina-c-90954248"><img src="linkedin.png" alt="Icono de Linkedin" /></a>
    <a href="https://github.com/vanicuc/Porfolio_VC"><img src="social.png" alt="Icono de Github" /></a> */
}

{
  /* <h4>Design_Thinking</h4> 
      <img
          src="./fases-del-design-thinking.png"  
          alt="Design Thinking"
          className="Design_Thinking"
          style={{ width: '80%', height: 'auto' }}
          />  */
}
