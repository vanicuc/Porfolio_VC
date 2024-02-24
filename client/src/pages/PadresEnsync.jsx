import React from "react";


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
      <section className="section_1">
        <div className="section_1_rigth_padres">
          <div className="img_box_logo">
            <div className="titulo">
              <h2 className="titulo_section">Group Project ‘PadresEnsync’</h2>

              <h4>Syncs and simplifies coparenting.</h4>
            </div>

            <div>
              <p className="box_Explication_project">
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
        <div className="img_box_logo">
          <div className="img_logo_project">
            <img
              src="./PadresEnsync logo.png"
              alt="PadresEnsync"
              className="card__logo"
              style={{ width: "50%", height: "auto" }}
              />
          </div>
        </div>
      </section>
              <div className="section_2a">

<section className="section_2">
  <div className="text_section" id="Empathize">
    <div className="box_Empathize">
      <table>
        <thead>
          <tr className="Empathize">
            <td><h4>Problem</h4></td>
            <td><h4>Objective</h4></td>
            <td><h4>Solution</h4></td>
          </tr>
        </thead>
        <tbody>
          <tr className="Empathize_inf">
            <td className="Empathize">
              The lack of coordination between separated parents makes it
              difficult to create a harmonious environment for the growth
              and development of children.
            </td>
            <td className="Empathize">
              Restore connection and promote harmony in the lives of the
              children by providing parents with a tool to synchronize
              their efforts and co-parent collaboratively.
            </td>
            <td className="Empathize">
              Synchronize and simplify co-parenting through an intuitive
              platform that facilitates the management of expenses and
              tasks, promoting collaborative parenting.
            </td>
          </tr>
          <tr className="storytelling-image-row">
            <td colSpan="2">
              <h4>Storytelling</h4>
              <p>
                Sofía, a girl who longed for harmony, saw her life affected by
                the separation of her parents, Ana and Marcos. In the midst of
                tensions and challenges, PadresEnsync arrived like a magical
                balm. Upon starting to use the platform, the synchronization of
                efforts between Ana and Marcos transformed the family
                environment. Sofia, who had previously experienced discord,
                witnessed how the magic of PadresEnsync restored the lost
                connection. Not only did it simplify co-parenting, but it became
                the key to a new chapter full of tranquility in Sofia's life.
                Discover the magic of synchronization with PadresEnsync!
              </p>
            <div>

              <img
                src="padres_movil-modified.png"
                alt="padres"
                style={{ width: "20%", height: "auto" }}
              />


            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
            


            </div>



      <section className="section_6">
        <div className="text_section" id="Ideate">
          <h3 className="titulo_section"> Information ARCHITECTURE</h3>
          <div className="img_arq_section">
            <img
              src="padresensyncArq.png"
              alt="padresEnsync arquitectura"
              style={{ width: "70%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="section_4">
        <div className="text_section" id="Prototype">
          <h3 className="titulo_section">Moodboard oliVino</h3>
          <div>
            <img src="padresensync_Imagenes.png" alt="Moodboard_padresensync"
            style={{ width: "80%", height: "auto" }} />
          </div>
        </div>
      </section>

  
    </>
  );
}
