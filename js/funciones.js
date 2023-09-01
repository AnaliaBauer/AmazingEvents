//Captura de elementos
let contenedorTarjetas = document.getElementById("contenedor-tarjetas");
let contenedorSearchBar = document.getElementById("contenedorSearchBar");
let categorias = data.events.map(evento => evento.category);
let contenedorInputs = document.getElementById("contenedor-inputs");
let contenedorDetails = document.getElementById('contenedor-details');

// Funcion para crear tarjetas
function createTarjetas(Eventos) {

    contenedorTarjetas.innerHTML = ""
    for (evento of Eventos) {

        let card = `<div class="col-12 col-sm-6  col-lg-4 col-xl-3 pb-5 d-flex">
        <div class="card text-end">
        <img src= ${evento.image} class="card-img-top" alt="..." width="100%" height="200px" object-fit-cover>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>  
            </div>
            <div class="d-flex align-items-end justify-content-between mx-3 mb-2">
            <h6>Precio: ${evento.price}</h6>
            <a target="_blank" href="./details.html?id=${evento._id}" class="btn btn-danger mb-2">Details</a>
            </div>`;

        contenedorTarjetas.innerHTML += card;

    }
}

// Funcion para crear barra de busqueda
function createSearchBar() {
    let searchBar = ` <nav class="search bar">
    <form action="submit" id="cuadroBusqueda" class="d-flex" role="search" name="cuadroBusqueda">
        <input class="form-control me-2" id="buscar" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-danger" type="submit">Search</button>
    </form>
</nav>`

    contenedorSearchBar.innerHTML += searchBar
}

// Filtro de check
categorias = categorias.reduce((categorias, categoria) => {
    if (!categorias.includes(categoria)) {
        categorias.push(categoria);
        return categorias;
    } else {
        return categorias;
    }
}, [])

// Funcion para crear checkbox
function createCheck(array, contenedor) {

    let html = "";
    array.forEach(categoria => {
        html += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${categoria}">
        <label class="form-check-label" for="inlineCheckbox1">${categoria}</label>
        </div>`
    });

    contenedor.innerHTML = html;

}

//Funcion para crear tarjeta detalle de evento
function crearTarjetaDetalle(evento){
    
    let details = `<div class="col-lg-5 my-auto mx-auto">
    <img class="img-fluid rounded-3" src=${evento.image} alt="imagen del evento">
    </div>
    <div class="col-lg-6">
    <div class="card-body">
    <h1>${evento.name}</h1>
    <h2>${evento.category}</h2>
    <p>${evento.description}</p>
    <p><strong>Place:</strong> ${evento.place}</p>
    <p><strong>Capacity: </strong>${evento.capacity}</p>
    <p><strong>Estimate: </strong>${evento.estimate}</p>
    <p><strong>Date: </strong>${evento.date}</p>
    <p><strong>Price: </strong>${evento.price}</p>
    </div>
    </div>`
    
    contenedorDetails.innerHTML += details; 
}

document.addEventListener('input', e => {
    if (e.target.classList.contains('form-check-input')) {
        let inputsCategoria = document.querySelectorAll('.form-check-input');
        let checkeados = [];

        for (input of inputsCategoria) {
            if (input.checked) {
                checkeados.push(input.value);
            }
        }
        if (checkeados.length > 0) {
            let eventosFiltrados = data.events.filter(evento => checkeados.includes(evento.category));
            createTarjetas(eventosFiltrados);
        } else {
            createTarjetas(data.events)
        }
        // filtroCompleto();
    }
});

document.addEventListener('submit', e => {

    e.preventDefault()

    let busqueda = document.getElementById('buscar').value;
    let resultado = data.events.filter(item => item.name.toLowerCase().includes(busqueda.trim().toLowerCase()))
        if(resultado.length > 0){
            createTarjetas(resultado);
        }else{
            mostrarMensaje(busqueda);
        }
    // filtroCompleto();
});


function mostrarMensaje(busqueda){
    let mensaje = ` <div class="container-fluid text-center">
    <div class="row">
        <div class="col">
            <h1>Sorry, we couldn't find any result for ${busqueda}</h1>
        </div>
    </div>
</div>`


    contenedorTarjetas.innerHTML = mensaje;
}
// function filtroCompleto(){
//     let busqueda = document.getElementById('buscar').value;
//     let resultado = data.events.filter(item => item.name.toLowerCase().includes(busqueda.toLowerCase()) || item.description.toLowerCase().includes(busqueda.toLowerCase()))

//     let inputsCategoria = document.querySelectorAll('.form-check-input');
//         let checkeados = [];

//         for (input of inputsCategoria) {
//             if (input.checked) {
//                 checkeados.push(input.value);
//             }
//         }
//         if (checkeados.length > 0 || resultado > 0) {
//            let eventosFiltrados = resultado.filter(evento => checkeados.includes(evento.category) && resultado.includes(busqueda));
        
//             createTarjetas(eventosFiltrados);
//         }
//         else {
//             createTarjetas(data.events)
//         }
// }
