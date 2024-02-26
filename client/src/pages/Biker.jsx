import React from "react";

export default function Biker() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="section_1">
        <div className="section_1_rigth_biker">
          <div className="titulo">
            <h2 className="titulo_section">Functionality Extension 'Bikers'</h2>
            <h4>Where are we going today, biker?</h4>
          </div>
          <div>
            <p className="box_Explication_project">
              I developed a full-stack application specially designed for
              cyclists. I implemented login authentication, user credential
              validation, and token functionality. I integrated Leaflet for
              mapping and ping functionality.
            </p>
          </div>

          {/* <div className="contenedor_design_biker"> */}
          {/* <h4>Design Thinking</h4> */}

          <div className="contenedor_botton_biker">
            <a
              className="Design_Thinking_botton"
              href="#Define"
              onClick={() => scrollToSection("Define")}
            >
              Define
            </a>
            <a
              className="Design_Thinking_botton"
              href="#Ideate"
              onClick={() => scrollToSection("Ideate")}
            >
              Ideate
            </a>
            {/* <a
                  className="Design_Thinking_botton"
                  href="#Prototype"
                  onClick={() => scrollToSection("Prototype")}
                >
                  Prototype
                </a> */}
            <a
              className="Design_Thinking_botton"
              href="#Test"
              onClick={() => scrollToSection("Test")}
            >
              Trip
            </a>
          </div>
        </div>
        <div className="img_box_logo">
          <div className="img_logo_project">
            <img
              src="./BIKER 1.png"
              alt="biker"
              className="card__logo"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <div className="space"></div>

      <section className="section_3">
        <div className="card_mvp_Biker">
          <div className="card_mvp_biker_2">
            <div className="text_section" id="Define">
              <h3 className="titulo_section">MVP 2.1 </h3>
              <div className="card_inf">
                <h4>Login</h4>
                <ul className="box_Explication_project">
                  <li>Setting up the frontend:</li>
                  <li>
                    implementing login authentication validating the user’s
                    credentials protecting routes and pages tokens
                  </li>
                  <li></li>
                  <li>MYsql:</li>
                  <li>user table</li>
                </ul>
              </div>
              <div className="card_inf">
                <h4>Button</h4>
                <ul className="box_Explication_project">
                  <li>play/tsop/continuo:</li>
                </ul>
              </div>
              <div className="card_inf">
                <h4>Map</h4>
                <ul className="box_Explication_project">
                  <li>marck route -ping</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card_mvp_biker_2">
            <div className="card_inf">
              <h4>Biker user flow</h4>
              <ul>
                <img
                  src="user flow bototon biker.png"
                  alt="user flow bototon biker.png"
                  style={{ width: "80%", height: "auto" }}
                />
              </ul>
              <h4>Botton user flow</h4>
              <ul>
                <img
                  src="boton user flow.png"
                  alt="botton user flow"
                  style={{ width: "80%", height: "auto" }}
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section_6">
        <div className="text_section" id="Ideate">
          <h3 className="titulo_section"> Information Architecture</h3>
          <div className="img_arq_section">
            <img
              src="biker arq.png"
              alt="Biker arquitectura"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
      </section>
      <div className="space"></div>

      <section className="section_5">
        <div className="user_flow">
          <div>
            <img
              src="leafleat.jpg"
              alt="leafleat.jpg"
              style={{ width: "10%", height: "auto" }}
            />
          </div>

          <div>
            <img
              src="trip.jpg"
              alt="trip.jpg"
              style={{ width: "70%", height: "auto" }}
            />
          </div>
        </div>
        <div className="text_section" id="Test">
          <div className="back_to_top">
            <a className="BackToTopButton" href="#" onClick={scrollToTop}>
              Back to Top
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
