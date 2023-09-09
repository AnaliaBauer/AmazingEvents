let urlApiEvents = 'https://mindhub-xj03.onrender.com/api/amazing'
let proximosEventos = []
let categoriasSinRepetir = []

async function obtenerDatos() {

    const respuesta = await fetch(urlApiEvents);
    datosOrigen = await respuesta.json();

    for (let evento of datosOrigen.events) {

    let fechaEvento = Date.parse(evento.date)
    let fechaActual = Date.parse(datosOrigen.currentDate)


    if (fechaActual < fechaEvento) {
        proximosEventos.push(evento)
    }
}
    categorias = datosOrigen.events.map(evento => evento.category);
    categoriasSinRepetir = categorias.filter((categoria, index)=> categorias.indexOf(categoria) === index);
    createTarjetas(proximosEventos);
    createCheck(categoriasSinRepetir, contenedorInputs);
    createSearchBar();
    // return datosOrigen
}
obtenerDatos(); 


