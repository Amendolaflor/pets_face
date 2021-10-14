





























// //RECORREMOS DATOS PARA CREAR COMPONENTE EN HTML 
// for (let robot of DATOSROBOTS) {
//   $("#contenidoGenerado").append(generarRobot(robot));
// }

//FUNCION PARA GENERAR HTML
function generarRobot(robot) {
  return `<div class="column">
          <img src="${robot.avatar}">
          <div class="container">
            <h3>${robot.nombre} </h3>
            <button id=${robot.id}>AGREGA</button>
          </div>
          </div>`;
}

// let listaAmigos = [];

// function agregarAmigo(amigos) {
//   for (const amigo of amigos) {
//     let botonAgregar = document.getElementById(amigo.id);
//     botonAgregar.onclick = () => {
//       $("#notificacion").html(`AGREGASTE A ${amigo.nombre.toUpperCase()} COMO AMIGO`);
//       listaAmigos.push(amigo);
//     };
//   }
// }

// agregarAmigo(DATOSROBOTS);
// console.log(listaAmigos);

