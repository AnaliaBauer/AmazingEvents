//Captura de elementos
let contenedorTarjetas = document.getElementById("contenedor-tarjetas");
let contenedorSearchBar = document.getElementById("contenedorSearchBar");
let contenedorInputs = document.getElementById("contenedor-inputs");
let contenedorDetails = document.getElementById('contenedor-details');
//tablas
let contenedorT2 = document.querySelector('#table2 tbody')
let contenedorT3 = document.querySelector('#table3 tbody')
let contenedor_Low = document.getElementById('low')
let contenedor_Top = document.getElementById('top')
let contenedor_High = document.getElementById('high')

//variables
let datosOrigen
let categorias = [];
let checkeados = [];
let eventosFiltrados = [];
let resultado = [];
let checkCategorias = [];



// Funcion para crear tarjetas
function createTarjetas(Eventos) {
    contenedorTarjetas.innerHTML = ""
    for (evento of Eventos) {

        let card = `<div class="col-12 col-sm-6  col-lg-4 col-xl-3 pb-5 d-flex">
        <div class="card text-end">
        <img src= ${evento.image} class="card-img-top" alt="..." height="200px" object-fit-cover>
        <div class="card-body d-flex flex-column">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>  
        </div>
        <div class="d-flex align-items-end justify-content-between mx-3 mb-2">
        <h6>Precio: ${evento.price}</h6>
        <a href="./details.html?id=${evento._id}" class="btn btn-danger mb-2">Details</a>
        </div>`;

        contenedorTarjetas.innerHTML += card;

    }

}

function TopAssistCard(eventos) {
    contenedor_Top.innerHTML = ""
    for (evento of eventos) {

        let data = `<tr>
        <td>${evento.name}</td><td>${evento.asistencia}%</td>
        </tr>`
        contenedor_Top.innerHTML += data;
    }
}
function LowAssistCard(eventos) {
    contenedor_Low.innerHTML = ""
    for (evento of eventos) {

        let data = `<tr>
            <td>${evento.name}</td><td>${evento.asistencia}%</td>
        </tr>`
        contenedor_Low.innerHTML += data;
    }
}
function TopCapacityCard(eventos) {
    contenedor_High.innerHTML = ""
    for (evento of eventos) {

        let data = `<tr>
                        <td>${evento.name}</td><td>${evento.capacity}</td>
                    </tr>`
        contenedor_High.innerHTML += data;
    }
}

function createTrTable2(categorias) {

    contenedorT2.innerHTML = ""

    for (categoria of categorias) {

        let data = `<tr>
        <td>
        ${categoria.Nombre}
        </td>
        <td>u$s${categoria.Total}</td>
        <td>${categoria.Promedio}%</td>
        </tr>`
        contenedorT2.innerHTML += data;
    }
}

function createTrTable3(categorias) {

    contenedorT3.innerHTML = ""

    for (categoria of categorias) {

        let data = `<tr>
        <td>
        ${categoria.Nombre}
        </td>
        <td>u$s${categoria.Total}</td>
        <td>${categoria.Promedio}%</td>
        </tr>`
        contenedorT3.innerHTML += data;
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


// Funcion para crear checkbox
function createCheck(array, contenedor) {
    let num = 1
    let html = "";
    array.forEach(categoria => {

        html += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox${num}" value="${categoria}">
        <label class="form-check-label" for="inlineCheckbox${num}">${categoria}</label>
        </div>`

        num++
    });

    contenedor.innerHTML = html;

}

//Funcion para crear tarjeta detalle de evento
function crearTarjetaDetalle(evento) {

    let details;
    if (datosOrigen.currentDate > evento.date) {
        details = `<div class="col-lg-5 my-auto mx-auto">
    <img class="img-fluid rounded-3" src=${evento.image} alt="imagen del evento">
    </div>
    <div class="col-lg-6">
    <div class="card-body">
    <h1>${evento.name}</h1>
    <h2>${evento.category}</h2>
    <p>${evento.description}</p>
    <p><strong>Place:</strong> ${evento.place}</p>
    <p><strong>Capacity: </strong>${evento.capacity}</p>
    <p><strong>Assistance: </strong>${evento.assistance}</p>
    <p><strong>Date: </strong>${evento.date}</p>
    <p><strong>Price: </strong>${evento.price}</p>
    </div>
    </div>`
    } else {
        details = `<div class="col-lg-5 my-auto mx-auto">
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
    }


    contenedorDetails.innerHTML += details;
}


contenedorInputs.addEventListener('input', e => {

    if (e.target.classList.contains('form-check-input')) {
        checkCategorias = document.querySelectorAll('.form-check-input');
    }
    resultado = filtrarEventos(checkCategorias)

    if (resultado.length > 0) {
        createTarjetas(resultado)
    } else {
        mostrarMensaje()
    }

});

contenedorSearchBar.addEventListener('submit', e => {

    e.preventDefault()
    if (e.target.classList.contains('form-check-input')) {
        checkCategorias = document.querySelectorAll('.form-check-input');
    }
    resultado = filtrarEventos(checkCategorias)
    if (resultado.length > 0) {

        createTarjetas(resultado)
    } else {
        mostrarMensaje()
    }

});

function mostrarMensaje() {
    let mensaje = ` <div class="container-fluid text-center">
    <div class="row">
        <div class="col">
            <h1>Sorry, we couldn't find any result for the specified search</h1>
        </div>
    </div>
</div>`


    contenedorTarjetas.innerHTML = mensaje;
}

function filtrarPorCategoria(eventos, categorias) {
    eventosFiltrados = eventos.filter(evento => categorias.includes(evento.category));
    return eventosFiltrados
}

function filtrarPorTitulo(eventos, titulo) {
    eventosFiltrados = eventos.filter(item => item.name.toLowerCase().includes(titulo.trim().toLowerCase()))
    return eventosFiltrados

}

function filtrarPorFecha(eventos, momento, currentDate) {
    if (momento == "pasado") {
        eventosFiltrados = eventos.filter(evento => evento.date < currentDate)
    } else {
        eventosFiltrados = eventos.filter(evento => evento.date > currentDate)
    }
    return eventosFiltrados
}

function reducirEventos() {
    let posicion = document.getElementsByClassName('active')

    switch (posicion[0].textContent) {
        case 'HOME':
            eventosFiltrados = datosOrigen.events;
            break;
        case 'UPCOMING EVENTS':
            eventosFiltrados = filtrarPorFecha(datosOrigen.events, 'futuro', datosOrigen.currentDate);
            break;
        case 'PAST EVENTS':
            eventosFiltrados = filtrarPorFecha(datosOrigen.events, 'pasado', datosOrigen.currentDate)
            break;
    }
    return eventosFiltrados
}

function filtrarEventos(categorias) {
    eventosFiltrados = reducirEventos()

    //Obtengo los checks marcados

    checkeados = []
    for (input of categorias) {
        if (input.checked) {
            checkeados.push(input.value);
        }
    }

    //Obtengo el texto a buscar
    let busqueda = document.getElementById('buscar').value;

    if (checkeados.length > 0) {
        eventosFiltrados = filtrarPorCategoria(eventosFiltrados, checkeados)
    }

    eventosFiltrados = filtrarPorTitulo(eventosFiltrados, busqueda)

    return eventosFiltrados
}


function TopAssist(eventos) {
    //3 Eventos con mayor % de aistencia

    eventos.forEach(item => {
        item.asistencia = Math.round(((item.assistance * 100) / item.capacity))
    });
    eventos.sort(((a, b) => b.asistencia - a.asistencia))
    eventos = eventos.slice(0, 3)
    console.log(eventos)
    return eventos
}

function LowAssist(eventos) {
    eventos.forEach(item => {
        item.asistencia = Math.round(((item.assistance * 100) / item.capacity))
    });
    eventos.sort(((a, b) => a.asistencia - b.asistencia))
    eventos = eventos.slice(0, 3)
    console.log(eventos)
    return eventos
}

function TopCapacity(eventos) {
    eventos.sort(((a, b) => b.capacity - a.capacity))
    eventos = eventos.slice(0, 3)
    return eventos
}

function getGananciasPasadas(eventos, fecha) {
    let gananciasEventosPasados = []
    let ganancia

    for (evento of eventos) {
        if (evento.date < fecha) {
            ganancia = evento.price * evento.assistance
            evento.ganancia = ganancia
            gananciasEventosPasados.push(evento)
        }
    }
    console.log(gananciasEventosPasados)
    return gananciasEventosPasados
}

function getGananciasFuturas(eventos, fecha) {
    let gananciasEventos = []
    let ganancia

    for (evento of eventos) {
        if (evento.date > fecha) {
            ganancia = evento.price * evento.estimate
            evento.ganancia = ganancia
            gananciasEventos.push(evento)
        }
    }
    console.log(gananciasEventos)
    return gananciasEventos
}

function filtrarCategoriaYGanancia(eventos) {
    eventos.forEach(item => {
        if (item.estimate != undefined) {
            item.estimado = Math.round((item.estimate * 100) / item.capacity)
        }
        else {
            item.asistencia = Math.round((item.assistance * 100) / item.capacity)
        }
    });

    let sumatoriaCategorias = []
    for (evento of eventos) {
        let Categoria = sumatoriaCategorias.find(item => item.Nombre == evento.category)
        if (Categoria != null) {
            Categoria.Total += evento.ganancia
            if (evento.estimado == undefined) {
                Categoria.Promedio += evento.asistencia
            } else {
                Categoria.Promedio += evento.estimado
            }
            Categoria.Contador += 1

        } else {
            Categoria = new Object()
            Categoria.Nombre = evento.category
            Categoria.Total = evento.ganancia
            Categoria.Promedio = 0;
            if (evento.estimado == undefined) {
                Categoria.Promedio += evento.asistencia
            } else {
                Categoria.Promedio += evento.estimado
            }
            Categoria.Contador = 1
            sumatoriaCategorias.push(Categoria)
        }
    }
    sumatoriaCategorias.forEach(item => {
        item.Promedio = item.Promedio / item.Contador
    });

    console.log(sumatoriaCategorias)
    return sumatoriaCategorias
}





















