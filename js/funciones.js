// Funcion para crear tarjetas

let contenedorTarjetas = document.getElementById("contenedor-tarjetas");

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
        <input class="form-control me-2" name="buscar" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-danger" type="submit">Search</button>
    </form>
</nav>`

    contenedorSearchBar.innerHTML += searchBar
}


// Crear checkbox
let categorias = data.events.map(evento => evento.category);

categorias = categorias.reduce((categorias, categoria) => {
    if(!categorias.includes(categoria)){
        categorias.push(categoria);
        return categorias;
    }else{
        return categorias;
    }
}, [])


let contenedorInputs = document.getElementById("contenedor-inputs");

function createCheck(array, contenedor){

    let html = "";
    array.forEach(categoria => {
        html += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${categoria}">
        <label class="form-check-label" for="inlineCheckbox1">${categoria}</label>
        </div>`
    });

    contenedor.innerHTML = html;

}

document.addEventListener('input', e => {
    if(e.target.classList.contains('form-check-input')){
        let inputsCategoria = document.querySelectorAll('.form-check-input');
        let checkeados = [];

        for(input of inputsCategoria){
            if(input.checked){
                checkeados.push(input.value);
            }
        }
        if(checkeados.length > 0){
            let eventosFiltrados = data.events.filter(evento => checkeados.includes(evento.category));
            createTarjetas(eventosFiltrados);
        }else{
            createTarjetas(data.events)
        }
    }
});
