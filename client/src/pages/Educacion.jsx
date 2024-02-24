import "./Educacion.css";

export default function Educacion() {
  return (
    <>
      <div className="education">
        <img src="education.jpeg" className="img_education" />

        <h1>Education</h1>
      </div>

      <div>
        <div className="container">
          <div className="cardStudio">
            <div className="face face1">
              <div className="content">
                {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"> */}
                <h3>full stack developer</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>2023</p>
                <h2>CodeOp</h2>
                {/* <a href="#">Read More</a> */}
              </div>
            </div>
          </div>
          <div className="cardStudio">
            <div className="face face1">
              <div className="content">
                {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"> */}
                <h3>Design UI/UX </h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>2023</p>
                <h2>Coderhouse</h2>
              </div>
            </div>
          </div>
          <div className="cardStudio">
            <div className="face face1">
              <div className="content">
                {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"> */}

                <h3>Arquitectura</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>(1999 - 2006)</p>
                <p>
                  Facultad de Arquitectura, Diseño y Urbanismo, universidad
                  Nacional Córdoba
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-container">
        <img src="contacto.jpeg" className="img_mujer" />

        <div className="language">
          <div className="text-content">
            <h1>Language:</h1>
            <p>Spanish Native </p>
            <p>English: Advanced Level</p>
          </div>
        </div>
      </div>
    </>
  );
}
