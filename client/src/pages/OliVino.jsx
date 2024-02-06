import React from "react";
import "./oliVino.css";
import { Link } from "react-router-dom";

export default function OliVino() {
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
      <section className="section1">

      <div className="section1_rigth">
        <div className="olivino_explicacion">
          <div className="text_olivino">
            <h3 className="Titulo_olivino">Group Project ‘OliVino’ </h3>
            <h4>Where Moments Matter, Friendships Flourish.</h4>
          </div>

          <div>
            <p className="box_Olvivino">
              Developed a full-stack app to create a friendly platform for the
              elderly community to connect. Implemented functions in Sequelize
              to optimize data processing, integrated Multer for saving user
              photos, utilized Pusher for real-time messaging, and crafted the
              app's aesthetics and logo using CSS.
            </p>
          </div>

            <h4>Design Thinking</h4>

            <div className="contenedor_botton">
              <a
                className="Design_Thinking_botton"
                href="#Empathize"
                onClick={() => scrollToSection("Empathize")}
              >
                Empathize
              </a>
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
                href="#Prototype"
                onClick={() => scrollToSection("Prototype")}
              >
                Prototype
              </a>
              <a
                className="Design_Thinking_botton"
                href="#Test"
                onClick={() => scrollToSection("Test")}
              >
                Test
              </a>
            </div>
            <img
              src="./fases-del-design-thinking.png"
              alt="Design Thinking"
              className="Design_Thinking"
              style={{ width: "75%", height: "auto" }}
            />
          </div>
         </div>

          <div className="sectionPlay">
            <video
              src="./Olivino - Google Chrome 2023-12-18 09-11-08.mp4"
              controls
              style={{ width: "100%" }}
            ></video>
          </div>
          
      </section>

      <section className="section2">
        <div className="text_olivino_2" id="Define">
          <div className="back_to_top">
            <a className="BackToTop" href="#" onClick={scrollToTop}>
              Back to Top
            </a>
          </div>
          <h3 className="Titulo_olivino">Storytelling </h3>

          <p className="box_Olvivino">
            Laia, a woman with a vibrant and cheerful spirit, found herself
            alone in her home after the loss of her husband. Solitude settled in
            like a shadow, dimming the laughter that once filled every corner of
            her life. One day, she discovered Olívino, an app designed to weave
            connections among lonely hearts. With doubts but with the hope of
            rediscovering joy, Laia immersed herself in the platform. As she
            explored local and virtual events, she realized that Olívino was not
            just an app but a beacon lighting her path to companionship and
            friendship. Captivated by the diversity of activities and the warmth
            of interactions, Laia began attending events and chats. Soon,
            conversations turned into shared laughter, and events became regular
            gatherings that filled her calendar and her heart. Olívino not only
            gave Laia the chance to make new friends but also brought music back
            into her home. Solitude gradually faded away, replaced by the
            symphony of laughter and friendships that blossomed in her life
            thanks to Olívino. Discover the magic of connection in every
            encounter, as Laia did, and let Olívino be the melody that
            transforms solitude into companionship.
          </p>
          <img src="laidy 1.png" alt="pld woman" />
          <img src="laidy 2.png" alt="pld woman" />
          <img src="laidy 3.png" alt="pld woman" />
          <img src="laidy 4.png" alt="pld woman" />
        </div>
      </section>
      <section className="section3">
        <div className="text_olivino_2" id="Prototype">
          <div className="back_to_top">
            <a className="BackToTop" href="#" onClick={scrollToTop}>
              Back to Top
            </a>
          </div>

          <h3 className="Titulo_olivino">Moodboard oliVino</h3>
          <img src="Moodboard_olivino.png" alt="Moodboard_olivino" />
        </div>
      </section>
      <section className="section4">
        <div className="text_olivino_2">
          <h3 className="Titulo_olivino">Icon Design</h3>
          <img
            src="olivino logo.jpg"
            alt="olivino_logo.jpg"
            className="logo_olivino"
          />
        </div>
      </section>
    </>
  );
}
