import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Projects.css";

export default function Home() {
  return (
    <>

      <div className="Box_Presentation">
        <div className="inf">
          <div className="hi">
            <h1>Hi,</h1>
            <h1>I'm Vanina Cucchietti</h1>
            <h2>Full-stack developer</h2>
            {/* <div className="space"></div> */}
            {/* <div className="space"></div> */}
            <h3>CSS / JavaScript / React</h3>
          </div>

          <div className="Resumen">
            <p>
              With over 16 years of experience as an architect, I am taking a determined step into Full Stack Development. 
              <br/>
              I have showcased proficiency in addressing front-end challenges, seamlessly merging
              UX/UI design knowledge with architectural insights and translating
              them effectively into code.
            </p>
          </div>

          <div className="Work_experience">
            <h3> Work experience</h3>
          </div>

          <div className="card-grid">
            <a href="/OliVino" className="card">
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

           
            {/* <a className="card" href="/ROLLXPerience">
              <div className="card__background"></div>
              <div className="card__content">
                <p className="card__category">UI/UX Designer</p>
                <h4 className="card__heading">ROLLXPerience</h4>
              </div>
            </a> */}
          </div>

          {/* <div className="Links">
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
          </div> */}
        </div>

        <div className="Picture">
          <img
            src="./logo.jpg"
            alt="foto"
            className="foto"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
