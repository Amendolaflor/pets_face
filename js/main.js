//////    RECORREMOS ARRAY DE MASCOTAS PARA CREAR CONENIDO EN HTML 
// for (let mascota of todasLasMascotas) {
//   $("#contenidoGenerado").append(fichasMascotas(mascota));
// }

//  GENERANDO CONTENIDO HTML DE MANERA DINAMICA: SECCION PRODUCTOS TOTALES INDEX---------
function generarFichaMascotas(mascotas) {
  for (const mascota of mascotas) {
    let contPadre = document.querySelector("#contenidoGenerado");
    let contHijo = document.createElement("div");
    contHijo.innerHTML = `<div class="container">
                            <div class="card-deck">
                              <div class="col-lg-8 card-area">
                                <div class="card" style="width:18rem" id="ficha">
                                <img src="${mascota.image}" class="imagenes" alt="Card image cap">  
                                <div class="card-body text-center">
                                  <h5> ${mascota.name} </h5>
                                   <hr>
                                  <p> Habilidades: ${mascota.abilities}</p>                                                                                                
                                    <p> Hobbies: ${mascota.hobbies}</p>
                                    <span class="text-grey"> <s> </s></span>                              
                                  <button type="button" id=${mascota.id} class="btn btn-primary btn-sm mr-1 mb-2">
                                    <i class="fas fa-shopping-cart pr-2"></i>Amigarse
                                  </button>
                                  <button type="button" id=${mascota.name} class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main btn-fav" data-toggle="tooltip" data-placement="top" title="lista de deseos">
                                    <i class="far fa-heart"></i>Desamigarse
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>`
    contPadre.appendChild(contHijo);
  }
}
generarFichaMascotas(todasLasMascotas)


let listaAmigos = [];
  
function agregarAmigo(amigos) {
  for (const amigo of amigos) {
    let botonAgregar = document.getElementById(amigo.id);
    botonAgregar.onclick = () => {
      $("#notificacion").html(`AGREGASTE A ${amigo.name.toUpperCase()} COMO AMIGO`);
      listaAmigos.push(amigo);
    };
  }
}

agregarAmigo(todasLasMascotas);
console.log(listaAmigos);

