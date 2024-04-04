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
      <section className="section_7">
            <div className="section_1_rigth_biker">

      <div className="img_box_logo">
          <div className="img_logo_project">
            <img
              src="./BIKER 1.png"
              alt="biker"
              className="card__logo"
              style={{ width: "10%", height: "auto" }}
            />
          </div>
        </div>
          <div className="titulo">
            <h2 className="titulo_section">Functionality Extension 'Bikers'</h2>
            <h4>Where are we going today, biker?</h4>
                 
            <p >
              I developed a full-stack application specially designed for
              cyclists. I implemented login authentication, user credential
              validation, and token functionality. I integrated Leaflet for
              mapping and ping functionality.
            </p>
          </div>

                  {/* <div className="contenedor_botton_biker">
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
            
                   <a
              className="Design_Thinking_botton"
              href="#Test"
              onClick={() => scrollToSection("Test")}
            >
              Trip
            </a>
          </div> */}

        </div>
        
      </section>

      <section className="section_4 parallax_section">
        <div className="text_section" id="Prototype">
          <div className="Moodboard_biker">
            <h2 className="titulo_section">Moodboard</h2>
          </div>
        </div>
      </section>

      {/* <section className="section_4">
        <div className="text_section" id="Prototype">
          <h3 className="titulo_section">Moodboard oliVino</h3>
          <div>
            <img
              src="bicycle-3045580_1280.jpg"
              alt="Moodboard_padresensync"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
        </div>
      </section> */}

      <section className="section_8">
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

      <div className="bike_mpv">

      <section className="section_mvp_biker">
  <div className="mvp_container_biker">
    <div className="mvp-biker">
      <h3 className="titulo_section_mvp-biker">MVP 2.2</h3>
      <div class="img-container">
        <img src="BIKER.png" alt="foto familia" className="img-mvp-biker" 
        style={{ width: "50%", height: "auto" }}/>
        <div class="text-overlay">
          <h4>Login</h4>
          <ul class="box-explication-mvp_biker">
            <li>Setting up the frontend:</li>
            <li>implementing login authentication validating the user’s credentials protecting routes and pages tokens</li>
            <li>MYsql:</li>
            <li>user table</li>
          </ul>
          <div class="card-info-mvp_biker">
            <h4>Button</h4>
            <ul class="box-explication-mvp_biker">
              <li>play/tsop/continuo:</li>
            </ul>
          </div>
          <div class="card-info-mvp_biker">
            <h4>Map</h4>
            <ul class="box-explication-mvp_biker">
              <li>marck route -ping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
                  
   
      <section className="section_9">
        <div className="mapa_box">
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

        <div>
          <img
              src="Bike19.png"
              alt="botton user flow"
              className="mapa_mobil"
              style={{ width: "50%", height: "auto" }}
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
