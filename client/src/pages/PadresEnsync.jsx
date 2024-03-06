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
      <section className="section_padres">
        <div className="section_1_rigth_padres">
        <div className="img_box_logo_padres">
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

            <div className="contenedor_design_padres">
              <h4 className="design_title">Design Thinking</h4>
              

              <div className="contenedor_botton_padres">
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
        {/* <div className="img_box_logo_padres"> */}
           <div className="img_logo_project_padreEnsync"> 
            <img
              src="./PadresEnsync logo 3.png"
              alt="PadresEnsync"
              className="logo_padres_corazon"
              style={{ width: "100%", height: "auto" }}
            />
            </div>
          </div>
         {/* </div> */}
      </section>
      <div className="section_2a">
        <section className="section_2">
          <div className="text_section" id="Empathize">
            <div className="box_Empathize">
              <table>
                <thead>
                  <tr className="Empathize">
                    <td>
                      <h4>Problem</h4>
                    </td>
                    <td>
                      <h4>Objective</h4>
                    </td>
                    <td>
                      <h4>Solution</h4>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="Empathize_inf">
                    <td className="Empathize">
                      The lack of coordination between separated parents makes
                      it difficult to create a harmonious environment for the
                      growth and development of children.
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
                        Sofía, a girl who longed for harmony, saw her life
                        affected by the separation of her parents, Ana and
                        Marcos. In the midst of tensions and challenges,
                        PadresEnsync arrived like a magical balm. Upon starting
                        to use the platform, the synchronization of efforts
                        between Ana and Marcos transformed the family
                        environment. Sofia, who had previously experienced
                        discord, witnessed how the magic of PadresEnsync
                        restored the lost connection. Not only did it simplify
                        co-parenting, but it became the key to a new chapter
                        full of tranquility in Sofia's life. Discover the magic
                        of synchronization with PadresEnsync!
                      </p>

                      <div className="Define_img">
                        <h4>User flow</h4>
                        <img
                          src="user_flow.png"
                          alt="user flow"
                          style={{ width: "60%", height: "auto" }}
                        />
                      </div>
                      {/* <div>
                        <img
                          src="padres_movil-modified.png"
                          alt="padres"
                          style={{ width: "20%", height: "auto" }}
                        />
                      </div> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <section className="section_3">
        <div className="card_mvp">
          <div className="card_mvp_2">
            <div className="text_section" id="Define">
              <h3 className="titulo_section">MVP 1.0 </h3>
              <div className="card_inf">
                <h4>Expense </h4>
                <ul className="box_Explication_project">
                  <li>Date</li>
                  <li>Expense Description</li>
                  <li>Amount</li>
                  <li>Approval</li>
                  <li>Delete Expense</li>
                  <li>Payment Responsible</li>
                </ul>
              </div>
              <div className="card_inf">
                <h4>Detail</h4>
                <ul className="box_Explication_project">
                  <li>Approval</li>
                  <li>Expense Zoom</li>
                  <li>Different URL</li>
                </ul>
              </div>
              <div className="card_inf">
                <h4>Form </h4>
                <ul className="box_Explication_project">
                  <li>Description</li>
                  <li>Date</li>
                  <li>Total</li>
                  <li>Payment Responsible</li>
                  <li>Add</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card_mvp_2">
            <div className="text_section" id="Define">
              <h3 className="titulo_section">MVP 1.1 </h3>
              <div className="card_inf">
                <h4>Expense </h4>
                <ul className="box_Explication_project">
                  <li>Display only 15 expenses</li>
                  <li>Enable pagination to scroll and view all expenses</li>
                  <li>
                    Cannot delete an expense that is approved or paid, deletion
                    requires approval from both users
                  </li>
                </ul>
              </div>
              <div className="card_inf">
                <h4>Navigation bar</h4>
                <ul className="box_Explication_project">
                  <li>
                    Custody: Connects with the calendar to indicate who has
                    custody on a particular day
                  </li>
                  <li>
                    Minor: Connects with the minor's profile to display their
                    name
                  </li>
                </ul>
              </div>
              <div className="card_inf">
                <h4>Details </h4>
                <ul className="box_Explication_project">
                  <li>
                    Display the amount the other user has to pay, indicating if
                    it's 50% for equal sharing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card_mvp_2">
            <div className="text_section" id="Define">
              <h3 className="titulo_section">MVP 1.2 </h3>
              <div className="card_inf">
                <h4>Expense </h4>
                <ul className="box_Explication_project">
                  <li>
                    Display in a different color once the other user has paid
                  </li>
                  <li>
                    Define how the payment responsibility will be displayed and
                    how the other user will demonstrate the payment of the
                    outstanding amount. Consider leaving a space to connect with
                    a bank card for direct payment through the bank once
                    accepted.
                  </li>
                </ul>
              </div>
              <div className="card_inf">
                <h4>Balance</h4>
                <ul className="box_Explication_project">
                  <li>
                    Create an expense balance for different activities:
                    clothing, school, extracurricular activities, medical
                    expenses, and miscellaneous, for each child. This provides a
                    monthly and yearly control of expenditures
                  </li>
                  <li>
                    Ability to divide the balance between children and show the
                    total for the entire family
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="section_6">
        <div className="text_section" id="Ideate">
          <h3 className="titulo_section"> Information Architecture</h3>
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
            <img
              src="padresensync_Imagenes.png"
              alt="Moodboard_padresensync"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="section_5">
            <h3 className="titulo_section">Structure</h3>
        <div className="box_structure">
          <div className="screen">
            <img
              src="pantalla_padresensync.png"
              alt="pantalla app PadresEnsync"
              style={{ width: "80%", height: "auto" }}
            />
          </div>

          <div className="structure">
            <img
              src="PadresEnsync.png"
              alt="structure"
              style={{ width: "90%", height: "auto" }}
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
