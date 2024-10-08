import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
      <section className="section_1">
        <div className="section_1_rigth">
          <div className="img_box_logo">
            <div className="titulo">
              <h2 className="titulo_section">Group Project ‘OliVino’ </h2>

              <h3>Where Moments Matter, Friendships Flourish.</h3>
            </div>

            <div>
              <p className="box_Explication_project">
                Developed a full-stack app to create a friendly platform for the
                elderly community to connect. Implemented functions in Sequelize
                to optimize data processing, integrated Multer for saving user
                photos, utilized Pusher for real-time messaging, and crafted the
                app's aesthetics and logo using CSS.
              </p>
            </div>

            <div className="contenedor_design">
              <h3>Design Thinking</h3>

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
            </div>
          </div>
        </div>

        <div className="imagen_logo">
          <img
            src="./olivino blanco.png"
            alt="olivino"
            className="card__logo"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
      </section>

      <section className="section_4 parallax_section">
        <div className="text_section" id="Prototype">
          <div className="Moodboard_olivino">
            <h2 className="titulo_section">Moodboard</h2>
          </div>
        </div>
      </section>

      {/* 

      <section className="section_4">
        <div className="text_section" id="Prototype">
          <div className="Moodboard_olivino">
          <h2 className="titulo_section">Moodboard</h2>
          <img
            src="./Moodboard_olivino.png"
            alt="olivino"
            className="card__logo"
            style={{ width: "100%", height: "90xp" }}
          /> 

      
          </div>
        </div>
      </section> */}

      <section className="section_2">
        <div className="text_section" id="Empathize">
          <div className="box_Empathize">
            <h3 className="titulo_section">Empathize</h3>
            <table>
              <tbody>
                <tr className="Empathize_inf">
                  <td className="Empathize">
                    <figure className="imghvr-zoom-out-up">
                      <img
                        src="laidy6.jpeg"
                        alt="pld woman"
                        className="hover-image"
                      />
                      <figcaption className="hover-text">
                        <h2>Problem</h2>
                        <h3>
                          Many older individuals currently grapple with the
                          challenge of loneliness. The lack of social activities
                          and limited interaction with peers of their age
                          significantly contribute to a sense of isolation.
                        </h3>
                      </figcaption>
                    </figure>
                  </td>

                  <td className="Empathize">
                    <figure className="imghvr-zoom-out-up">
                      <img
                        src="laidy5.jpeg"
                        alt="pld woman"
                        className="hover-image"
                      />
                      <figcaption className="hover-text">
                        <h2>Objective</h2>
                        <h3>
                          Our primary goal is to tackle the challenge of
                          loneliness by creating a platform that provides a
                          diverse range of local and virtual events, customized
                          to cater to the interests of the elderly population.
                          The overarching aim is to turn isolation into
                          companionship, fostering authentic and meaningful
                          connections through an app, and consequently,
                          improving the overall quality of life for older
                          adults.
                        </h3>
                      </figcaption>
                    </figure>
                  </td>

                  <td className="Empathize">
                    <figure className="imghvr-zoom-out-up">
                      <img
                        src="feliz.jpeg"
                        alt="pld woman"
                        className="hover-image"
                      />
                      <figcaption className="hover-text">
                        <h2>Solution</h2>
                        <h3>
                          Olívino is an app designed with a user-centric and
                          inclusive approach. The platform offers a variety of
                          local and online events tailored to the interests of
                          the older population. The user-friendly interface and
                          accessibility features ensure seamless participation
                          for everyone. Olívino facilitates the formation of new
                          friendships by connecting people with similar
                          interests, creating a space where loneliness
                          transforms into an opportunity to build meaningful
                          relationships and enjoy the company of others in the
                          golden years of life.
                        </h3>
                      </figcaption>
                    </figure>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section_3">
        <div className="text_section" id="Define">
          <h3 className="titulo_section">Storytelling </h3>
          <div>
            <p className="box_Explication_project">
              Laia, a woman with a vibrant and cheerful spirit, found herself
              alone in her home after the loss of her husband. Solitude settled
              in like a shadow, dimming the laughter that once filled every
              corner of her life. One day, she discovered Olívino, an app
              designed to weave connections among lonely hearts. With doubts but
              with the hope of rediscovering joy, Laia immersed herself in the
              platform. As she explored local and virtual events, she realized
              that Olívino was not just an app but a beacon lighting her path to
              companionship and friendship. Captivated by the diversity of
              activities and the warmth of interactions, Laia began attending
              events and chats. Soon, conversations turned into shared laughter,
              and events became regular gatherings that filled her calendar and
              her heart. Olívino not only gave Laia the chance to make new
              friends but also brought music back into her home. Solitude
              gradually faded away, replaced by the symphony of laughter and
              friendships that blossomed in her life thanks to Olívino. Discover
              the magic of connection in every encounter, as Laia did, and let
              Olívino be the melody that transforms solitude into companionship.
            </p>
            {/* <div className="parallax-container"></div> */}

            {/* <div className="parallax-container">
              <div className="parallax-image" style={{backgroundImage: "url('./laidy1.png')"}}></div>
            
              <div className="parallax-image" style={{backgroundImage: "url('./laidy2.png')"}}></div>
          
              <div className="parallax-image" style={{backgroundImage: "url('./laidy3.png')"}}></div>
         
              <div className="parallax-image" style={{backgroundImage: "url('./laidy4.png')"}}></div>
            </div>  */}

            <div className="Define_img_olivino">
              <img src="laidy 1.png" alt="pld woman" />
              <img src="laidy 2.png" alt="pld woman" />
              <img src="laidy 3.png" alt="pld woman" />
              <img src="laidy 4.png" alt="pld woman" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section_6">
        <div className="text_section" id="Ideate">
          <h3 className="titulo_section"> Information ARCHITECTURE</h3>
          <div className="img_arq_section">
            <img
              src="Olivino  arquitectura.png"
              alt="Olivino  arquitectura"
              style={{ width: "50%", height: "auto" }}
            /> 
          </div> 
         </div>
      </section> */}

      {/* 
      <section className="section_5">
      

<div className="Icon_test">

      {/* <h3 className="titulo_section">Icon Design</h3>
</div> */}

      {/* <div  className="icon_img">
          <img
            src="oliva.jpg"
            alt="olivino_logo.jpg"
            className="section_logo"
            style={{ width: "30%", height: "auto" }}
          />
          <h1>+</h1>

          <img
            src="OIP (1).jpeg"
            alt="olivino_logo.jpg"
            className="section_logo"
            style={{ width: "30%", height: "auto" }}
          />
          <h1>=</h1>
          <img
            src="olivino logo.jpg"
            alt="olivino_logo.jpg"
            className="section_logo"
            style={{ width: "10%", height: "auto" }}
          />
          </div> */}

      {/* </section> */}

      <div>
        <br></br>
      </div>

      <section className="section_5">
        <div className="sectionPlay">
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/W2eh8uhy8YM?si=tEZJ55M3jhLelOAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

          <iframe
            title="Vimeo Video"
            src="https://player.vimeo.com/video/912167217?autoplay=1&loop=1"
            frameBorder="0"
            width="100%"
            height="700px"
            muted
          ></iframe>
        </div>

        <div>
          <br></br>
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
