// Funcion para crear tarjetas

let contenedorTarjetas = document.getElementById("contenedor-tarjetas");

function createTarjetas(Eventos) {

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
            <a target="_blank" href="./details.html" class="btn btn-danger mb-2">Details</a>
            </div>`;

        contenedorTarjetas.innerHTML += card;

    }
}


// Funcion para crear barra de busqueda

let contenedorSearchBar = document.getElementById("contenedorSearchBar");

function createSearchBar(){
    let searchBar = ` <nav class="search bar">
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-danger" type="submit">Search</button>
    </form>
</nav>`

    contenedorSearchBar.innerHTML += searchBar
}


// Funcion para crear checkbox

let contenedorInputs = document.getElementById("contenedor-inputs");

function createCheck(array, contenedor){

    let html = "";
    array.forEach(evento => {
        html += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Food">
        <label class="form-check-label" for="inlineCheckbox1">${evento.category}</label>
        </div>`
    });

    contenedor.innerHTML = html;

}

