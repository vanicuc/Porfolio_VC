import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
// import "./Projects.css";


export default function Home() {
  return (
    <>
      <div className="Box_Presentation">
        <div className="inf">
          <div className="hi">
            <h1>Hi,</h1>
            <h1>I'm Vanina Cucchietti</h1>
            <h2>Full-stack developer</h2>
            <div className="space"></div>
            <div className="space"></div>
            <h3>CSS / JavaScript / React</h3>
          </div>

          <div className="Resumen">
            <p>
              16+ years working as an architect, transitioning to Full Stack
              Development after completing a 3-month full-time bootcamp. I
              demonstrated proficiency in tackling front-end challenges,
              seamlessly blending UX/UI design knowledge with architectural
              insights and translating them effectively into code.
            </p>
          </div>
        
          

          {/* <div className="box-link">
            <Link
              to="/Projects"
              className="link-button"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "solid 0.5px #989898bb",
                padding: "10px 40px",
                borderRadius: "10px", // Ajusta el valor según sea necesario
                textDecoration: "none", // Elimina la línea subrayada
              }}
            >
              Work experience
            </Link>
            <div className="space"></div>
          </div> */}


<div className='Work_experience'>
        <h3> Work experience</h3>
       </div>

  <div className="card-grid">
  
    <a href="/OliVino" className="card" >
     <div className="card__background"></div>
      <div className="card__content">
       <p className="card__category">group project</p>
      <h4 className="card__heading"> OliVino</h4>
      </div>
    </a>
  
    <a className="card" href="/PadresEnsync">
    <div className="card__background"></div>
      <div className="card__content">
        <p className="card__category">MVP</p>
        <h4 className="card__heading">PadresEnsync</h4>
         </div>
    </a>
  
    <a className="card" href="/Biker">
    <div className="card__background"></div>
      <div className="card__content">
        <p className="card__category">Functionality Extension</p>
        <h4 className="card__heading">Bikers</h4>
      </div>
    </a>
  
    <a className="card" href="/ROLLXPerience">
    <div className="card__background"></div>
      <div className="card__content">
        <p className="card__category">UI/UX Designer</p>
        <h4 className="card__heading">ROLLXPerience</h4>
      </div>
    </a>
  
    </div>

    
    <div className="space"></div>
 
  

          <div className="Links">
            <li>
              <a href="mailto:vanicuc@gmail.com" target="_blank">
                <img src="email.png" alt="Icono de Mail" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vanina-c-90954248"
                target="_blank"
              >
                <img src="linkedin.png" alt="Icono de Linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/vanicuc/Porfolio_VC" target="_blank">
                <img src="social.png" alt="Icono de Github" />
              </a>
            </li>
            <li>
              <a href="CV  vanina cucchietti.pdf" target="_blank">
                <img src="cv.png" alt="Icono de cv" />
              </a>
            </li>
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
