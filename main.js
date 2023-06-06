let agregar = document.getElementsByClassName("agregar");
let contenedorAtajos = document.getElementsByClassName("atajos")[0];
let cantidadElementos = 0;

function crearElemento() {
  let nombreAtajo = document.getElementById("nombreAtajo").value;
  let urlAtajo = document.getElementById("urlAtajo").value;

  if (nombreAtajo.length > 0 && urlAtajo.length > 0 && cantidadElementos < 9) {
    let boton = document.createElement("div");
    let enlace = document.createElement("a");

    boton.classList.add("atajo");
    enlace.href = "https://"+urlAtajo;
    enlace.target = "_blank";

    let circulo = document.createElement("div");
    circulo.classList.add("circulo");

    let plus = document.createElement("i");
    plus.classList.add("fa-solid", "fa-hand", "fa-lg", "iconoAgregar");
    circulo.appendChild(plus);

    enlace.appendChild(circulo);

    let parrafo = document.createElement("p");
    parrafo.textContent = document.getElementById("nombreAtajo").value; //obtiene el contenido de nombreAtajo
    parrafo.classList.add("atajosA");
    enlace.appendChild(parrafo);

    
     // Añadir texto al enlace

    boton.appendChild(enlace);

    if (contenedorAtajos.firstChild) {
      contenedorAtajos.insertBefore(boton, contenedorAtajos.firstChild);
    } else {
      contenedorAtajos.appendChild(boton);
    }

    cantidadElementos++;
    closeModal();
  } else if (cantidadElementos >= 9) {
    alert("NO SE PUEDEN AGREGAR MAS ATAJOS");
  }
}

for (let i = 0; i < agregar.length; i++) {
  agregar[i].addEventListener("click", openModal, false);
}

function openModal() {
  let modal = document.getElementById("ventanaModal");
  modal.style.display = "block";
}

function closeModal() {
  let modal = document.getElementById("ventanaModal");
  modal.style.display = "none";
}

let hechoButton = document.getElementById("hecho");
hechoButton.addEventListener("click", crearElemento, false);


let closeModalButton = document.getElementById("cancelar");
closeModalButton.addEventListener("click", closeModal, false);

function crearAtajo() {
  let nombre = document.getElementById("nombreAtajo").value;
  let url = document.getElementById("urlAtajo").value;
  let hechoButton = document.getElementById("hecho");

  if (nombre.length > 0 && url.length > 0) {
    hechoButton.removeAttribute('disabled');
  } else {
    hechoButton.setAttribute('disabled', 'disabled');
  }
}

document.getElementById("nombreAtajo").addEventListener("input", crearAtajo);
document.getElementById("urlAtajo").addEventListener("input", crearAtajo);



// ABRIR Y CERRAR COLORES //


let botonPersonalizar = document.getElementById("personalizar")
botonPersonalizar.addEventListener("click",abrirColores, false)

function abrirColores(){
  let contenedorColores = document.getElementById("colores");
  if(contenedorColores.style.display === "none"){
    contenedorColores.style.display = "block";
  }else{
    contenedorColores.style.display="none";
  }
}




/////// SELECCION DE TEMAS ///////


/////// TEMA NEGRO ///////

/*
const temaN = document.getElementById("Negro")
temaN.addEventListener("click",temaDefault, false)


function temaDefault(){
  let cuerpo = document.getElementsByClassName("default");
  let navBar = document.getElementsByClassName("navBar");
  let busqueda = document.getElementsByClassName("busqueda")
  let circulo = document.getElementsByClassName("circulo")
  let atajos = document.getElementsByClassName("atajos")
  let atajo = document.getElementsByClassName("atajo")
  let agregar = document.getElementsByClassName("agregar")
  let atajosA = document.getElementsByClassName("atajosA")

// Para cuerpo
for (let i = 0; i < cuerpo.length; i++) {
  if (cuerpo[i].classList.contains("defaultR") ||
      cuerpo[i].classList.contains("defaultT") ||
      cuerpo[i].classList.contains("defaultB")) {
    cuerpo[i].classList.remove("defaultR", "defaultT", "defaultB");
    console.log("borrado todo default")
  }
}

// Para navBar
for (let i = 0; i < navBar.length; i++) {
  if (navBar[i].classList.contains("navT") ||
      navBar[i].classList.contains("navB") ||
      navBar[i].classList.contains("navR")) {
    navBar[i].classList.remove("navT", "navB", "navR");
    console.log("borrado todo nav")
  }
}


for (let i = 0; i < busqueda.length; i++) {
  if (busqueda[i].classList.contains("busquedaT") ||
      busqueda[i].classList.contains("busquedaB") ||
      busqueda[i].classList.contains("busquedaR")) {
    busqueda[i].classList.remove("busquedaT", "busquedaB", "busquedaR");
    console.log("borrado BUSQUEDA")
  }
}

for (let i = 0; i < circulo.length; i++) {
  if (circulo[i].classList.contains("circuloT") ||
      circulo[i].classList.contains("circuloB") ||
      circulo[i].classList.contains("circuloR")) {
    circulo[i].classList.remove("circuloT", "circuloB", "circuloR");
    console.log("borrado cirulo")
  }
}

for (let i = 0; i < atajos.length; i++) {
  if (atajos[i].classList.contains("atajosT") ||
      atajos[i].classList.contains("atajosB") ||
      atajos[i].classList.contains("atajosR")) {
    atajos[i].classList.remove("atajosT", "atajosB", "atajosR");
    console.log("borrado atajos")
  }
}

for (let i = 0; i < atajo.length; i++) {
  if (atajo[i].classList.contains("atajoT") ||
      atajo[i].classList.contains("atajoB") ||
      atajo[i].classList.contains("atajoR")) {
    atajo[i].classList.remove("atajoT", "atajoB", "atajoR");
    console.log("borrado atajo")
  }
}

for (let i = 0; i < agregar.length; i++) {
  if (agregar[i].classList.contains("agregarT") ||
      agregar[i].classList.contains("agregarB") ||
      agregar[i].classList.contains("agregarR")) {
    agregar[i].classList.remove("agregarT", "atgregar", "agregarR");
    console.log("borrado boton")
  }
}

for (let i = 0; i < atajosA.length; i++) {
  if (atajosA[i].classList.contains("atajosAT") ||
      atajosA[i].classList.contains("atajosAB") ||
      atajosA[i].classList.contains("atajosAR")) {
    atajosA[i].classList.remove("atajosAT", "atajosAB", "atajosAR");
    console.log("borrado nombre")
  }
}

}


/////// TEMA ROSADO ///////

const temaR = document.getElementById("Rosa")
temaR.addEventListener("click",temaRosado, false)

function temaRosado(){
 let cuerpo = document.getElementsByClassName("default");
  let navBar = document.getElementsByClassName("navBar");
  let busqueda = document.getElementsByClassName("busqueda")
  let circulo = document.getElementsByClassName("circulo")
  let atajos = document.getElementsByClassName("atajos")
  let atajo = document.getElementsByClassName("atajo")
  let agregar = document.getElementsByClassName("agregar")
  let atajosA = document.getElementsByClassName("atajosA")


  cuerpo.classList.add("defaultR");

for (let i = 0; i < cuerpo.length; i++) {
  if (cuerpo[i].classList.contains("defaultT") ||
      cuerpo[i].classList.contains("defaultB") ||
      cuerpo[i].classList.contains("default")) {
    cuerpo[i].classList.remove("defaultT", "defaultB", "default")
    
  }
}


for (let i = 0; i < navBar.length; i++) {
  if (navBar[i].classList.contains("navT") ||
      navBar[i].classList.contains("navB")) {
    navBar[i].classList.remove("navT", "navB");
    console.log("borrado todo nav")
    navBar[i].classList.add("navR");
  }
}

for (let i = 0; i < busqueda.length; i++) {
  if (busqueda[i].classList.contains("busquedaT") ||
      busqueda[i].classList.contains("busquedaB")) {
    busqueda[i].classList.remove("busquedaT", "busquedaB");
    console.log("borrado BUSQUEDA")
    busqueda[i].classList.add("busquedaR");
  }
}

for (let i = 0; i < circulo.length; i++) {
  if (circulo[i].classList.contains("circuloT") ||
      circulo[i].classList.contains("circuloB")) {
    circulo[i].classList.remove("circuloT", "circuloB");
    console.log("borrado cirulo")
    circulo[i].classList.add("circuloR");
  }
}

for (let i = 0; i < atajos.length; i++) {
  if (atajos[i].classList.contains("atajosT") ||
      atajos[i].classList.contains("atajosB")) {
    atajos[i].classList.remove("atajosT", "atajosB");
    console.log("borrado atajos")
    atajos[i].classList.add("atajosR");
  }
}

for (let i = 0; i < atajo.length; i++) {
  if (atajo[i].classList.contains("atajoT") ||
      atajo[i].classList.contains("atajoB")) {
    atajo[i].classList.remove("atajoT", "atajoB");
    console.log("borrado atajo")
    atajo[i].classList.add("atajoR");
  }
}


for (let i = 0; i < agregar.length; i++) {
  if (agregar[i].classList.contains("agregarT") ||
      agregar[i].classList.contains("agregarB")) {
    agregar[i].classList.remove("agregarT", "agregarB");
    console.log("borrado boton")
    agregar[i].classList.add("agregarR");
  }
}

for (let i = 0; i < atajosA.length; i++) {
  if (atajosA[i].classList.contains("atajosAT") ||
      atajosA[i].classList.contains("atajosAB")) {
    atajosA[i].classList.remove("atajosAT", "atajosAB");
    console.log("borrado nombre")
    atajosA[i].classList.add("atajosR");
  }
}

}

*/  