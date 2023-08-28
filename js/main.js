// let carta = document.createElement('div');
// carta.classList.add("col-12", "col-sm-6", "col-lg-4", "col-xl-3", "pb-5", "d-flex");

// let nuevaTarjeta = document.createElement('div');
// nuevaTarjeta.classList.add("card", "text-end");
// let nuevaImg = document.createElement('img');
// nuevaImg.src = "./assets/food_fair.jpg";
// nuevaImg.classList.add('card-img-top');
// nuevaImg.alt = "evento";
// nuevaImg.height = "180"
// nuevaTarjeta.appendChild(nuevaImg);

// carta.appendChild(nuevaTarjeta);

// let contenedorInfo = document.createElement('div');
// contenedorInfo.classList.add("card-body", "d-flex", "flex-column");
// nuevaTarjeta.appendChild(contenedorInfo);

// let nuevoTitulo = document.createElement('h5');
// nuevoTitulo.classList.add('card-title');
// nuevoTitulo.textContent = "Art Exhibition";
// contenedorInfo.appendChild(nuevoTitulo);

// let nuevoParrafo = document.createElement('p') ;
// nuevoParrafo.classList.add('card-text');
// nuevoParrafo.textContent = "Let's go to the art museum for an incredible tour to learn about the largest dinosaurs."
// contenedorInfo.appendChild(nuevoParrafo);

// let contenedorBoton = document.createElement('div');
// contenedorBoton.classList.add("d-flex", "align-items-end", "justify-content-between", "mx-3", "mb-2");
// nuevaTarjeta.appendChild(contenedorBoton);

// let precio = document.createElement('h6');
// precio.textContent = "Precio: "
// contenedorBoton.appendChild(precio);

// let nuevoA = document.createElement('a');
// nuevoA.target = "_blank";
// nuevoA.href = "./details.html";
// nuevoA.classList.add("btn", "btn-danger", "mb-2")
// nuevoA.textContent = "Details"
// contenedorBoton.appendChild(nuevoA)





// console.log(nuevaTarjeta)



// let otraCarta = `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 pb-5 d-flex"><div class="card text-end"><img src="./assets/food_fair.jpg" class="card-img-top" alt="evento" height="180"><div class="card-body d-flex flex-column"><h5 class="card-title">Art Exhibition</h5><p class="card-text">Let's go to the art museum for an incredible tour to learn about the largest dinosaurs.</p></div><div class="d-flex align-items-end justify-content-between mx-3 mb-2"><h6>Precio: </h6><a target="_blank" href="./details.html" class="btn btn-danger mb-2">Details</a></div></div></div>`;
// // contenedorTarjetas = document.getElementById('contenedor-tarjetas').appendChild(otraCarta);



// carta.innerHTML += otraCarta;
// let tarjetas = document.getElementById('contenedor-tarjetas').appendChild(carta);
// // let contenedorTarjetas = document.getElementById('contenedor-tarjetas').appendChild(otraCarta);

// let contenedorTarjetas = document.getElementById('contenedor-tarjetas');
// for (evento of data.events) {

//     let card = `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 pb-5 d-flex">
//     <div class="card text-end">
//         <img src= ${evento.image} class="card-img-top" alt="..." width="100%" height="200px" object-fit-cover>
//         <div class="card-body d-flex flex-column">
//             <h5 class="card-title">${evento.name}</h5>
//             <p class="card-text">${evento.description}</p>  
//         </div>
//         <div class="d-flex align-items-end justify-content-between mx-3 mb-2">
//             <h6>Precio: ${evento.price}</h6>
//             <a target="_blank" href="./details.html" class="btn btn-danger mb-2">Details</a>
//         </div>`;

//     contenedorTarjetas.innerHTML += card;

// }



createTarjetas(data.events)

