import './Home.css';
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
    <div className='Box_Presentation'>


      <div className='inf'>
         <h3>Vanina Cucchietti</h3>
         <h3>Hi,</h3>
          <h1>I'm Vanina</h1>
          <h1>Full-stack developer</h1>
          <h4>CSS / JavaScript / React</h4>
            {/* <a href="mailto:vanicuc@gmail.com"><img src="email.png" alt="Icono de Mail" /></a>
            <a href="https://www.linkedin.com/in/vanina-c-90954248"><img src="linkedin.png" alt="Icono de Linkedin" /></a>
            <a href="https://github.com/vanicuc/Porfolio_VC"><img src="social.png" alt="Icono de Github" /></a> */}
            
            {/* <h4>Design_Thinking</h4> 
              <img
                  src="./fases-del-design-thinking.png"  
                  alt="Design Thinking"
                  className="Design_Thinking"
                  style={{ width: '80%', height: 'auto' }}
                  />  */}
          <div className='Resumen'>
            {/* <h2>Resumen Profesional</h2> */}
            <p>16+ years working as an architect, transitioning to Full Stack Development after completing a a 3-month full-time bootcamp.
            I demonstrated proficiency in tackling front-end challenges, seamlessly blending UX/UI design knowledge with architectural insights and translating them effectively into code</p>
          </div>

            <li><a href="mailto:vanicuc@gmail.com"><img src="email.png" alt="Icono de Mail" /></a></li>
           <li><a href="https://www.linkedin.com/in/vanina-c-90954248"><img src="linkedin.png" alt="Icono de Linkedin" /></a></li>
           <li><a href="https://github.com/vanicuc/Porfolio_VC"><img src="social.png" alt="Icono de Github" /></a></li>
           <li><a href="CV  vanina cucchietti  .pdf"><img src="cv.png" alt="Icono de cv" /></a></li>

        </div>

        <div className='Picture'>
          <img
            src="./public/logo.jpg" 
            alt="foto"
            className="foto"
            style={{ width: '50%', height: 'auto' }}
            />
        </div>
    </div>

    <div className='Box_project'>
      <h1>Proyectos recientes</h1>
      
     </div>

<section className="hero-section">
<div className="card-grid">

  <a href="/OliVino" className="card" >
   <div className="card__background"></div>
    <div className="card__content">
     <p className="card__category">Proyecto Grupal</p>
    <h3 className="card__heading"> OliVino</h3>
    <img
      src="./olivino blanco.png"  
      alt="Logo olivino"
      className="card__logo"
      style={{ width: '30%', height: 'auto' }}
      />
    </div>
  </a>

  <a className="card" href="/PadresEnsync">
  <div className="card__background"></div>
    <div className="card__content">
      <p className="card__category">MVP</p>
      <h3 className="card__heading">PadresEnsync</h3>
      <img
        src="./PadresEnsync logo.png"  
        alt="PadresEnsync"
        className="card__logo"
       style={{ width: '50%', height: 'auto' }}
       />
       </div>
  </a>

  <a className="card" href="/Biker">
  <div className="card__background"></div>
    <div className="card__content">
      <p className="card__category">Extensión de Funcionalidad</p>
      <h3 className="card__heading">Bikers</h3>
      <img
        src="./BIKER.png"  
        alt="Bikers"
        className="card__logo"
        style={{ width: '30%', height: 'auto' }}
      />
    </div>
  </a>

  <a className="card" href="/ROLLXPerience">
  <div className="card__background"></div>
    <div className="card__content">
      <p className="card__category">Diseñador UI/UX</p>
      <h3 className="card__heading">ROLLXPerience</h3>
      <img
        src="./roller_skating 2.png"  
        alt="ROLLXPerience"
        className="card__logo"
        style={{ width: '50%', height: 'auto' }}
      />
    </div>
  </a>

  </div>
</section>



</>
      
);
}

// export default function Home() {
//     return (
//       <>
//       <div className='Box_Presentation'>

//         <div className='inf'>
//             <h1>Vanina Cucchietti</h1>
//             <h2>Full-stack developer</h2>
//             <img
//                 src="./public/logo.jpg" 
//                 alt="foto"
//                 className="foto"
//                 style={{ width: '50%', height: 'auto' }}
//                 />
                
//               {/* <a href="mailto:vanicuc@gmail.com"><img src="email.png" alt="Icono de Mail" /></a>
//               <a href="https://www.linkedin.com/in/vanina-c-90954248"><img src="linkedin.png" alt="Icono de Linkedin" /></a>
//               <a href="https://github.com/vanicuc/Porfolio_VC"><img src="social.png" alt="Icono de Github" /></a> */}
              
//         <h4>Design_Thinking</h4> 
//            <img
//               src="./fases-del-design-thinking.png"  
//               alt="Design Thinking"
//               className="Design_Thinking"
//               style={{ width: '80%', height: 'auto' }}
//               /> 

//               </div>
              
//         <div className='Resumen'>
//           <h2>Resumen Profesional</h2>
//           <p>Con más de 16 años de experiencia como arquitecta, he decidido realizar una transición hacia el Desarrollo Full Stack después de completar con éxito un bootcamp a tiempo completo de 3 meses.

//             He demostrado habilidades sobresalientes al abordar desafíos en el front-end, fusionando de manera fluida mis conocimientos en diseño UX/UI con perspicacias arquitectónicas y traduciendolos de manera efectiva a código</p>
//         </div>
//       </div>

//     <div className='Box_project'>
//         <h1>Proyectos recientes</h1>
        
//     </div>

// <section className="hero-section">
//   <div className="card-grid">

//     <a href="/OliVino" className="card" >
//      <div className="card__background"></div>
//       <div className="card__content">
//        <p className="card__category">Proyecto Grupal</p>
//       <h3 className="card__heading"> OliVino</h3>
//       <img
//         src="./olivino blanco.png"  
//         alt="Logo olivino"
//         className="card__logo"
//         style={{ width: '30%', height: 'auto' }}
//         />
//       </div>
//     </a>

//     <a className="card" href="/PadresEnsync">
//     <div className="card__background"></div>
//       <div className="card__content">
//         <p className="card__category">MVP</p>
//         <h3 className="card__heading">PadresEnsync</h3>
//         <img
//           src="./PadresEnsync logo.png"  
//           alt="PadresEnsync"
//           className="card__logo"
//          style={{ width: '50%', height: 'auto' }}
//          />
//          </div>
//     </a>

//     <a className="card" href="/Biker">
//     <div className="card__background"></div>
//       <div className="card__content">
//         <p className="card__category">Extensión de Funcionalidad</p>
//         <h3 className="card__heading">Bikers</h3>
//         <img
//           src="./BIKER.png"  
//           alt="Bikers"
//           className="card__logo"
//           style={{ width: '30%', height: 'auto' }}
//         />
//       </div>
//     </a>

//     <a className="card" href="/ROLLXPerience">
//     <div className="card__background"></div>
//       <div className="card__content">
//         <p className="card__category">Diseñador UI/UX</p>
//         <h3 className="card__heading">ROLLXPerience</h3>
//         <img
//           src="./roller_skating 2.png"  
//           alt="ROLLXPerience"
//           className="card__logo"
//           style={{ width: '50%', height: 'auto' }}
//         />
//       </div>
//     </a>
  
//     </div>
// </section>



// </>
        
//   );
// }
