generarFichaMascotas(todasLasMascotas);
agregarAmigo(todasLasMascotas);
mostrarLista(todasLasMascotas);
borrarAmigo(todasLasMascotas);

//  GENERANDO SECCION AMIGXS ---------
function generarFichaMascotas(mascotas) {
  mascotas.forEach(mascota => {  
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
                                  <button type="button" id=${mascota.id} class="btn btn-danger btn-sm mr-1 mb-2">
                                    <i class="far fa-heart"></i>Amigarse
                                  </button>
                                  <button type="button" id="id${mascota.name}" class="btn btn-primary btn-sm px-3 mb-2 material-tooltip-main btn-fav" data-toggle="tooltip" data-placement="top" title="lista de deseos">
                                    Desamigarse
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>`
    contPadre.appendChild(contHijo);
  });
}

//  MOSTRANDO LISTA DE AMIGOS ---------
function mostrarLista(mascotas) {
  mascotas.forEach(mascota => { 
    let contPadre = document.querySelector("#modal-listaAmigos");
    let contHijo = document.createElement("div");
    contHijo.innerHTML = `<div class="modal fade" id="modalFavoritos" tabindex="-1" role="dialog .modal-sm" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog .modal-sm" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">❤️ Lista de Amiguitxs </h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body" >
                                  <div id="listaAmigos"> 
                                  </div>     
                                </div>
                                <div class="modal-footer">  
                                  <button type="button" class="btn btn-light" data-dismiss="modal">Cerrar</button>        
                                </div>      
                              </div>
                            </div>
                          </div>`;
    contPadre.appendChild(contHijo);
  });
}

let listaAmigos = [];
let contPadre;
let contHijo;

//  AGREGANDO AMIGXS ---------
function agregarAmigo(amigos) {  
  for (const amigo of amigos) {
    let botonAgregar = document.getElementById(amigo.id);
    botonAgregar.onclick = () => {
      listaAmigos.push(amigo)
      $("#notificacion").html(`Agregaste a ${amigo.name.toUpperCase()} como amigo ❤`);
      agregarEnLista(amigo)
      //console.log(`Agregaste a tu lista a ${amigo.name}`);
      
    };
  }
}

function agregarEnLista(amigo) {
   contPadre = document.querySelector("#listaAmigos")
   contHijo = document.createElement("div");
  contHijo.innerHTML = `<h6>- ${amigo.name}</h6>`;
  contPadre.appendChild(contHijo);
}

//  ELIMINANDO AMIGXS ---------
function borrarAmigo(amigos) {
  for (const amigo of amigos) {
    let botonEliminar = document.getElementById(`id${amigo.name}`);
    botonEliminar.onclick = () => {
      $("#notificacion").html(`${amigo.name.toUpperCase()} esta muy triste que lo eliminaste.`);
      $("#div").html(`${amigo.name.toUpperCase()} esta muy triste que lo eliminaste.`);
      listaAmigos.pop()
      contHijo.innerHTML = "";       
      //console.log(`Eliminaste a tu lista a ${amigo.name}`);          
    };
  }
}

console.log(listaAmigos);

