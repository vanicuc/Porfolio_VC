import React from "react";
import "./oliVino.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

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
      <div className="titulo">
        <h2 className="Titulo_olivino">Group Project ‘OliVino’ </h2>

        <h4>Where Moments Matter, Friendships Flourish.</h4>
      </div>

      <section className="section1">
        <div className="section1_rigth">
          <div className="olivino_explicacion">
            {/* <div className="text_olivino">
          </div> */}

            <div>
              <p className="box_Olvivino">
                Developed a full-stack app to create a friendly platform for the
                elderly community to connect. Implemented functions in Sequelize
                to optimize data processing, integrated Multer for saving user
                photos, utilized Pusher for real-time messaging, and crafted the
                app's aesthetics and logo using CSS.
              </p>
            </div>

            <div className="contenedor_design">
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
            
            </div>
          </div>
        </div>

        {/* <div muted autoplay loop className="sectionPlay"> */}
          

        <div className="sectionPlay">
      <iframe
        title="Vimeo Video"
        // src={`https://player.vimeo.com/video/912167217?autoplay=${playing ? '1' : '0'}`}
        src="https://player.vimeo.com/video/912167217?autoplay=1&loop=1"

        allow="fullscreen"
        frameBorder="0"
        width="100%"
        height="400px" // Puedes ajustar la altura según tus necesidades
        muted 
        // height="calc(100vw * 0.5625)" // Mantén una proporción 16:9 (9/16 = 0.5625)
       

        
      ></iframe>
  
    </div>
       
      </section>

      <section className="section2">
        <div className="text_olivino_2" id="Empathize">
      

          <div className="box_Empathize">
                  <table>
            <tr className="Empathize">
              <td>Problem</td>
              <td>Objective</td>
              <td>Solution</td>
            </tr>
            <tr className="Empathize_inf">
              <td className="Empathize">
                Many older individuals currently grapple with the challenge of
                loneliness. The lack of social activities and limited
                interaction with peers of their age significantly contribute to
                a sense of isolation.
                <div className="Empathize_img">
                  <img
                    src="laidy6.jpeg"
                    alt="pld woman"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </td>
              <td className="Empathize">
                Our primary goal is to tackle the challenge of loneliness by
                creating a platform that provides a diverse range of local and
                virtual events, customized to cater to the interests of the
                elderly population. The overarching aim is to turn isolation
                into companionship, fostering authentic and meaningful
                connections through an app, and consequently, improving the
                overall quality of life for older adults..
                <div className="Empathize_img">
                  <img
                    src="laidy5.jpeg"
                    alt="pld woman"
                    style={{ width: "70%", height: "auto" }}
                  />
                </div>
              </td>
              <td className="Empathize">
                Olívino is an app designed with a user-centric and inclusive
                approach. The platform offers a variety of local and online
                events tailored to the interests of the older population. The
                user-friendly interface and accessibility features ensure
                seamless participation for everyone. Olívino facilitates the
                formation of new friendships by connecting people with similar
                interests, creating a space where loneliness transforms into an
                opportunity to build meaningful relationships and enjoy the
                company of others in the golden years of life.
                <div className="Empathize_img">
                  <img
                    src="feliz.jpeg"
                    alt="pld woman"
                    style={{ width: "60%", height: "auto" }}
                  />
                </div>
              </td>
            </tr>

           
            </table>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="text_olivino_2" id="Define">
          {/* <div className="back_to_top">
            <a className="BackToTop" href="#" onClick={scrollToTop}>
              Back to Top
            </a>
          </div> */}
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
          <div className="Define_img">
            <img src="laidy 1.png" alt="pld woman" />
            <img src="laidy 2.png" alt="pld woman" />
            <img src="laidy 3.png" alt="pld woman" />
            <img src="laidy 4.png" alt="pld woman" />
          </div>
        </div>
      </section>


      <section className="section6">
        <div className="text_olivino_2" id="Ideate">
          {/* <div className="back_to_top">
            <a className="BackToTop" href="#" onClick={scrollToTop}>
              Back to Top
            </a>
          </div> */}

          <h3 className="Titulo_olivino"> Information ARCHITECTURE</h3>
          <div className="architectura_img_olivino">
          <img src="Olivino  arquitectura.png" alt="Olivino  arquitectura"
           style={{ width: "90%", height: "auto" }} />
           </div>
        </div>
      </section>

      
      <section className="section4">
        <div className="text_olivino_2" id="Prototype">
          {/* <div className="back_to_top">
            <a className="BackToTop" href="#" onClick={scrollToTop}>
              Back to Top
            </a>
          </div> */}

          <h3 className="Titulo_olivino">Moodboard oliVino</h3>
          <div>
          <img src="Moodboard_olivino.png" alt="Moodboard_olivino" />
          </div>
        </div>
      </section>

      <section className="section5">
        <div className="text_olivino_2"  id="Test" >

<div className="Icon_test">

          <h3 className="Titulo_olivino">Icon Design</h3>
</div>


          <div  className="icon_img">
          <img
            src="oliva.jpg"
            alt="olivino_logo.jpg"
            className="logo_olivino"
            style={{ width: "30%", height: "auto" }}
          />
          <h1>+</h1>

          <img
            src="OIP (1).jpeg"
            alt="olivino_logo.jpg"
            className="logo_olivino"
            style={{ width: "30%", height: "auto" }}
          />
          <h1>=</h1>
          <img
            src="olivino logo.jpg"
            alt="olivino_logo.jpg"
            className="logo_olivino"
            style={{ width: "10%", height: "auto" }}
          />


          </div>
      <div className="back_to_top">
            <a className="BackToTop" href="#" onClick={scrollToTop}>
              Back to Top
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
