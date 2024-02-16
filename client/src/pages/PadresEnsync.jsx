import React from "react";
import "./PadresEnsync.css";
import "./oliVino.css";


export default function PadresEnsync() {
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
        <div className="section1_rigth_padres">
        <div className="padres_explicacion">
          <div className="titulo">
            <h2 className="Titulo_PadresEnsync">
              Group Project ‘PadresEnsync’{" "}
            </h2>

            <h4>Syncs and simplifies coparenting.</h4>
          </div>

          <div>
            <p className="box_PadresEnsync">
              I developed a full-stack application designed to synchronize and
              simplify co-education. I implemented expense tracking features:
              Expense Description, Amount, Approval, Expense Deletion, Expense
              Expansion, Different URL, and Form.
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
          <div className="PadresEnsync_explicacion">
          <div className="imagen_logoPadres">
            <img
              src="./PadresEnsync logo.png"
              alt="PadresEnsync"
              className="card__logo"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
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
                The lack of coordination between separated parents makes it difficult to create a harmonious environment for the growth and development of children.
                  {/* <div className="Empathize_img">
                    <img
                      src="laidy6.jpeg"
                      alt="pld woman"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div> */}
                </td>
                <td className="Empathize">
                Restore connection and promote harmony in the lives of the children by providing parents with a tool to synchronize their efforts and co-parent collaboratively.
                  {/* <div className="Empathize_img">
                    <img
                      src="laidy5.jpeg"
                      alt="pld woman"
                      style={{ width: "70%", height: "auto" }}
                    />
                  </div> */}
                </td>
                <td className="Empathize">
                Synchronize and simplify co-parenting through an intuitive platform that facilitates the management of expenses and tasks, promoting collaborative parenting.
                  <div className="Empathize_img">
                    {/* <img
                      src="feliz.jpeg"
                      alt="pld woman"
                      style={{ width: "60%", height: "auto" }}
                    /> */}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      {/* <section className="section3">
        <div className="text_olivino_2" id="Define"> */}
          <h3 className="Titulo_olivino">Storytelling </h3>

          <p className="box_Olvivino">
          Sofía, a girl who longed for harmony, saw her life affected by the separation of her parents, Ana and Marcos. In the midst of tensions and challenges, PadresEnsync arrived like a magical balm.

          Upon starting to use the platform, the synchronization of efforts between Ana and Marcos transformed the family environment. Sofia, who had previously experienced discord, witnessed how the magic of PadresEnsync restored the lost connection. Not only did it simplify co-parenting, but it became the key to a new chapter full of tranquility in Sofia's life. Discover the magic of synchronization with PadresEnsync!
          </p>
          <div className="Define_img">
            {/* <img src="laidy 1.png" alt="pld woman" />
            <img src="laidy 2.png" alt="pld woman" />
            <img src="laidy 3.png" alt="pld woman" />
            <img src="laidy 4.png" alt="pld woman" /> */}
          </div>
        {/* </div>
      </section> */}

      <section className="section6">
        <div className="text_olivino_2" id="Ideate">
          <h3 className="Titulo_olivino"> Information ARCHITECTURE</h3>
          <div className="architectura_img_olivino">
            <img
              src="Olivino  arquitectura.png"
              alt="Olivino  arquitectura"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="text_olivino_2" id="Prototype">
          <h3 className="Titulo_olivino">Moodboard oliVino</h3>
          <div>
            <img src="Moodboard_olivino.png" alt="Moodboard_olivino" />
          </div>
        </div>
      </section>

      <section className="section5">
        <div className="text_olivino_2" id="Test">
          <div className="Icon_test">
            <h3 className="Titulo_olivino">Icon Design</h3>
          </div>

          <div className="icon_img">
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
