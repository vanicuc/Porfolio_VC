import './Home.css';



export default function Home() {
    return (
      <>
        <div>
      <h1>Vanina Cucchietti</h1>
      <h3>Full-stack developer</h3>
    </div>

    <div>
      <h4>Información</h4>
      <p>622881728</p>
      <p>vanicuc@gmail.com</p>
    </div>

    <div>
      <h2>Professional Summary</h2>
      <p>Con más de 16 años de experiencia como arquitecta, he decidido realizar una transición hacia el Desarrollo Full Stack después de completar con éxito un bootcamp a tiempo completo de 3 meses.

He demostrado habilidades sobresalientes al abordar desafíos en el front-end, fusionando de manera fluida mis conocimientos en diseño UX/UI con perspicacias arquitectónicas y traduciendolos de manera efectiva a código</p>
      <h3>Experiencia Laboral:</h3>
      <p>Más de 10 años de experiencia en reconocidas empresas de arquitectura, contribuyendo a proyectos destacados como el Edificio Estel y el Corte Inglés de Francesc Macià. Además, cuento con más de 5 años de experiencia como profesional independiente, especializándome en renovaciones a pequeña escala con enfoque en diseño funcional.

Mis habilidades en arquitectura abarcan diversas áreas, incluyendo diseño arquitectónico, gestión de proyectos, modelado BIM, Revit, AutoCAD, entre otros. Además, he compartido mi conocimiento como profesor adjunto en la Universidad Nacional de Córdoba, Argentina, impartiendo el curso de Arquitectura III</p>
    </div>

    <h2>Design_Thinking</h2>
    <img
        src="./fases-del-design-thinking.png"  // Reemplaza con la ruta de tu logo
        alt="Design Thinking"
        className="Design_Thinking"
        style={{ width: '20%', height: 'auto' }}
        />




  <h4 className='projectos_recientes'>Proyectos recientes</h4>
<section className="hero-section">
  <div className="card-grid">

    <a className="card" href="#">
     <div className="card__background"></div>
      <div className="card__content">
       <p className="card__category">Proyecto Grupal</p>
      <h3 className="card__heading"> OliVino</h3>
      <img
        src="./olivino blanco.png"  // Reemplaza con la ruta de tu logo
        alt="Logo olivino"
        className="card__logo"
        style={{ width: '30%', height: 'auto' }}
        />
      </div>
    </a>

    <a className="card" href="#">
    <div className="card__background"></div>
      <div className="card__content">
        <p className="card__category">MVP</p>
        <h3 className="card__heading">PadresEnsync</h3>
        <img
          src="./PadresEnsync logo.png"  // Reemplaza con la ruta de tu logo
          alt="Logo olivino"
          className="card__logo"
         style={{ width: '50%', height: 'auto' }}
         />
      </div>
    </a>

    <a className="card" href="#">
    <div className="card__background"></div>
      <div className="card__content">
        <p className="card__category">Extensión de Funcionalidad</p>
        <h3 className="card__heading">Bikers</h3>
        <img
          src="./BIKER.png"  // Reemplaza con la ruta de tu logo
          alt="Logo olivino"
          className="card__logo"
          style={{ width: '30%', height: 'auto' }}
        />
      </div>
    </a>

    <a className="card" href="#">
    <div className="card__background"></div>
      <div className="card__content">
        <p className="card__category">Diseñador UI/UX</p>
        <h3 className="card__heading">ROLLXPerience</h3>
        <img
          src="./roller_skating 2.png"  // Reemplaza con la ruta de tu logo
          alt="Logo olivino"
          className="card__logo"
          style={{ width: '40%', height: 'auto' }}
        />
      </div>
    </a>
  
    </div>
</section>



    <div>
    <h2>Proyectos recientes</h2>
    
    <h3>Proyecto Grupal ‘OliVino’ </h3>
    <p>Desarrollé una aplicación full-stack para crear una plataforma amigable destinada a la comunidad de personas mayores para conectarse. Implementé funciones en Sequelize para optimizar el procesamiento de datos, integré Multer para guardar fotos de usuarios, utilicé Pusher para mensajería en tiempo real y diseñé la estética de la aplicación y su logotipo utilizando CSS.</p>
    
    <h3>Extensión de Funcionalidad ‘Bikers’ </h3>
    <p>Desarrollé una aplicación full-stack diseñada especialmente para ciclistas. Implementé autenticación de inicio de sesión, validación de credenciales de usuario y tokens. Integré Leaflet para la funcionalidad de mapeo y ping.</p>
    
    <h3>MVP ‘PadresEnsync’</h3>
    <p>Desarrollé una aplicación full-stack diseñada para sincronizar y simplificar la coeducación. Implementé características de registro de gastos: Descripción del gasto, Monto, Aprobación, Eliminación de gastos, Ampliación del gasto, URL diferente, Formulario</p>
    
    <h3>Diseñador UI/UX: </h3>
    <p>Proyecto ROLLXPerience, Desbloquea tu potencial, Patina y aprende. Utilicé Design Thinking, Benchmarking, prototipos y personas de usuario, Narrativa, Mi MVP, Arquitectura de la información, Flujo de usuario, Moodboard, Ui Kits, Diseño de iconos, Pruebas de usabilidad, Evolución.</p>
    
    </div>

    <div>
      <h3>Habilidades Técnicas:</h3>
      <p>
React.js, Vue.js | Javascript | HTML, CSS | Node.js /Express | MySQL | Postman
| GitHub, Git | Visual Studio Code Pusher  | Multer  | Leaflet  | Figma  | Autocad  | Revit</p>
    </div>

    <div>
      <h3>Educación:</h3>

      <h4>full stack developer</h4>
      <p>2023</p>
      <p>CodeOp</p>

      <h4>UI/UX Deseñador</h4>
      <p>2023</p>
      <p>Coderhouse</p>

      <h4>Arquitectura</h4>
      <p>(1999 - 2006)</p>
      <p>Facultad de Arquitectura, Diseño y Urbanismo, universidad Nacional Córdoba</p>

    </div>

    <div>
    <h3>Idioma:</h3>
    <p>Español : Nativo</p>
    <p>Ingles : Nivel Avanzado</p>

    </div>


</>
        
  );
}
