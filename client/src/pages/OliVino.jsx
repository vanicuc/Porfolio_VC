// import "./oliVino.css";

// export default function OliVino() {
//   // img{
//   //   with:100%;
//   //   vertical-align:top;
//   // }

//   function inicio(){

//   }
//     return (
//       <>
//       <h3>Proyecto Grupal ‘OliVino’ </h3>
//     <p>Desarrollé una aplicación full-stack para crear una plataforma amigable destinada a la comunidad de personas mayores para conectarse. Implementé funciones en Sequelize para optimizar el procesamiento de datos, integré Multer para guardar fotos de usuarios, utilicé Pusher para mensajería en tiempo real y diseñé la estética de la aplicación y su logotipo utilizando CSS.</p>

// <section className="sectionPlay">
//   <div className="fila1">
//   <video src="./Olivino - Google Chrome 2023-12-18 09-11-08.mp4" controls></video>

// {/* <video src="./Olivino - Google Chrome 2023-12-18 09-11-08.mp4"></video> */}
//   </div>

//   <div className="fila2">
//     <div className="barra1">
//       <div className="barra2"></div>
//     </div>
// </div >

// <div className="fila3">
//   <div className="izquierda"></div>
//   <img className="play" src="play.png"/>
//   <img className="siguiente" src="siguiente.png"/>
//   <img className="reiniciar" src="reiniciar.png"/>
//   <img className="volumen" src="volumen1.png"/>
//   <img className="velocidad" src="rapido.png"/>
//   <div className="estado"></div>

//   <div className="derecha"></div>
//   <img className="reducir" src="ampliar.png"/>

// </div>
// </section>





//       </>
//     )
// }



import "./oliVino.css";

export default function OliVino() {
  return (
    <>
      <h3>Proyecto Grupal ‘OliVino’ </h3>
      <p>
        Desarrollé una aplicación full-stack para crear una plataforma
        amigable destinada a la comunidad de personas mayores para conectarse.
        Implementé funciones en Sequelize para optimizar el procesamiento de
        datos, integré Multer para guardar fotos de usuarios, utilicé Pusher
        para mensajería en tiempo real y diseñé la estética de la aplicación y
        su logotipo utilizando CSS.
      </p>

      <section className="sectionPlay">
        <div className="fila1">
          <video src="./Olivino - Google Chrome 2023-12-18 09-11-08.mp4" controls style={{ width: '100%' }}></video>
        </div>
      </section>
    </>
  );
}




// import "./oliVino.css";

// export default function OliVino() {
//   function inicio() {}

//   return (
//     <>
//       <h3>Proyecto Grupal ‘OliVino’ </h3>
//       <p>
//         Desarrollé una aplicación full-stack para crear una plataforma
//         amigable destinada a la comunidad de personas mayores para conectarse.
//         Implementé funciones en Sequelize para optimizar el procesamiento de
//         datos, integré Multer para guardar fotos de usuarios, utilicé Pusher
//         para mensajería en tiempo real y diseñé la estética de la aplicación y
//         su logotipo utilizando CSS.
//       </p>

//       <section className="sectionPlay">
//         <div className="fila1">
//           <video src="./Olivino - Google Chrome 2023-12-18 09-11-08.mp4" controls style={{ width: '100%' }}></video>
//         </div>

//         <div className="fila2">
//           <div className="barra1">
//             <div className="barra2"></div>
//           </div>
//         </div>

//         <div className="fila3">
//           <div className="izquierda"></div>
//           <button className="play" onClick={() => {  }}>
//             <img src="play.png" alt="Play" />
//           </button>
//           <button className="reiniciar" onClick={() => {  }}>
//             <img src="reiniciar.png" alt="Reiniciar" />
//           </button>
//           <input type="range" className="volumen" onChange={(e) => { }} />
//           <select className="velocidad" onChange={(e) => {  }}>
//             <option value="1">Normal</option>
//             <option value="1.5">1.5x</option>
//             <option value="2">2x</option>
//           </select>
//           <div className="estado"></div>

//           <div className="derecha"></div>
//           <button className="reducir" onClick={() => {  }}>
//             <img src="ampliar.png" alt="Reducir/Ampliar" />
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }
