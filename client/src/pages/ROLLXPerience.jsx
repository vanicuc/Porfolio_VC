export default function ROLLXPerience() {
  return (
    <>
        <section className="section_padres">
        <div className="section_1_rigth_padres">
        <div className="img_box_logo_padres">

                  <div className="img_logo_project_padreEnsync"> 
                      <img
                        src="./roller_skating 2.png"
                        alt="PadresEnsync"
                        style={{ width: "10%", height: "60%" }}
                        
                         />
                  </div>
                  <div className="titulo">
                  <h2 className="titulo_section"> UI/UX Design ROLLXPerence</h2>
                    

                    <h4>"Unlock your potential: Skate, learn, and connect with our unique app."</h4>
                    <h3>Your journey on wheels!</h3>
                   <p>
                    Unlock your potential, Skate and learn. Utilized Design Thinking, Benchmarking, proto & user person, Storytelling, My MPV, Information architecture, User flow, Moodboard, Ui Kits, Icon Design, Usability test, evolution.
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
                 </div>
        
      </section>

      <section className="section_4">
        <div className="text_section" id="Prototype">
          <h3 className="titulo_section">Moodboard ROLLXPerence</h3>
          <div>
            <img
              src="moock-roll.png"
              alt="Moodboard_rollc"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
        </div>
      </section>

     


          {/* <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdoQANdez1wcDeq5xGVnenX%2FWireframe-digital%3Fpage-id%3D1182%253A9055%26type%3Ddesign%26node-id%3D1182-10580%26viewport%3D667%252C293%252C0.07%26t%3Dtbpp1T7QHuPdAdze-1%26scaling%3Dscale-down%26starting-point-node-id%3D1182%253A10580%26mode%3Ddesign" allowFullScreen></iframe> */}

          <div className="box_figma_video" id="Test">

             <iframe 
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)', maxWidth: '800px', width: '100%' }}   className="figma_video"
              height="450" 
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdoQANdez1wcDeq5xGVnenX%2FWireframe-digital%3Fpage-id%3D1182%253A9055%26type%3Ddesign%26node-id%3D1182-10580%26viewport%3D667%252C293%252C0.07%26t%3Dtbpp1T7QHuPdAdze-1%26scaling%3Dscale-down%26starting-point-node-id%3D1182%253A10580%26mode%3Ddesign" 
              allowFullScreen
            ></iframe>

             </div>



    </>
  );
}
