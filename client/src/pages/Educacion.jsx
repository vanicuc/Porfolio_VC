
import './Educacion.css';

export default function Educacion() {

 
 
    return (
      <>
      
      <div>
      <h3>Educación:</h3>
      </div>


    <body>
    <div className="container">
        <div className="cardStudio">
            <div className="face face1">
                <div className="content">
                    {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"> */}
                    <h3>full stack developer</h3>
                </div>
            </div>
            <div className="face face2">
                <div class="content">
                    <p>2023</p>
                    <p>CodeOp</p>
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
                <p>Coderhouse</p>
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
      <p>Facultad de Arquitectura, Diseño y Urbanismo, universidad Nacional Córdoba</p>
                </div>
            </div>
        </div>
    </div>
</body>


    <div>
    <h3>Idioma:</h3>
    <p>Español : Nativo</p>
    <p>Ingles : Nivel Avanzado</p>

    </div>
    
  </>
    )
}