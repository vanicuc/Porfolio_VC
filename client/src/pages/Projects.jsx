import { Link } from "react-router-dom";
import "./Projects.css";

export default function Project() {
  return (
    <>
      <div className="Work_experience">
        <h1>Work experience</h1>
      </div>

      <div className="Experience">
        <p>
          10+ years work experience in renowned companies in the field of
          architecture, contributing to notable projects such as the Estel
          Building and Corte Inglés of Francesc Macia, in parallel to 5+ years
          experience as freelance professional in small-scale renovations,
          focusing on functional design. My expertise in architecture
          encompasses a range of skills, including architectural design, project
          management, BIM modeling, Revit, AutoCAD, among others. I also have
          teaching experience as an adjunct professor at the National University
          of Córdoba, Argentina, where I taught the Architecture III
          undergraduate course.
        </p>
      </div>

      <div className="Work_experience">
        <h1>Recent Projects</h1>
      </div>

      <section className="hero-section">
        <div className="card-grid">
          <a href="/OliVino" className="card">
            <div className="card__background"></div>
            <div className="card__content">
              <p className="card__category">Group Project</p>
              <h4 className="card__heading"> OliVino</h4>
              <div className="card__logo-container">
              <img
                src="./olivino blanco.png"
                alt="Logo olivino"
                className="card__logo"
                style={{ width: "30%", height: "auto" }}
              />
            </div>
            </div>
          </a>

          <a className="card" href="/PadresEnsync">
            <div className="card__background"></div>
            <div className="card__content">
              <p className="card__category">MVP</p>
              <h4 className="card__heading">PadresEnsync</h4>
              <div className="card__logo-container">
              <img
                src="./PadresEnsync logo.png"
                alt="PadresEnsync"
                className="card__logo"
                style={{ width: '50%', height: 'auto' }}
              />
              </div>
            </div>
          </a>

          <a className="card" href="/Biker">
            <div className="card__background"></div>
            <div className="card__content">
              <p className="card__category">Feature Extension</p>
              <h4 className="card__heading">Bikers</h4>
              <div className="card__logo-container">
              <img
                src="./BIKER 1.png"
                alt="Bikers"
                className="card__logo"
                style={{ width: "30%", height: "auto" }}
                />
                </div>
            </div>
          </a>

          <a className="card" href="/ROLLXPerience">
            <div className="card__background"></div>
            <div className="card__content">
              <p className="card__category">UI/UX Designer</p>
              <h4 className="card__heading">ROLLXPerience</h4>
              <div className="card__logo-container">
              <img
                src="./roller_skating 2 2.png"
                alt="ROLLXPerience"
                className="card__logo"
                  style={{ width: '60%', height: 'auto'}}
              />
            </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
