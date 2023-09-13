let urlApiEvents = 'https://mindhub-xj03.onrender.com/api/amazing'
let eventosPasados = []
let categoriasSinRepetir = []

async function obtenerDatos(){
    const Respuesta = await fetch(urlApiEvents);
    datosOrigen = await Respuesta.json();
    
    for (let evento of datosOrigen.events) {

        let fechaEvento = Date.parse(evento.date)
        let fechaActual = Date.parse(datosOrigen.currentDate)
    
    
        if (fechaActual > fechaEvento) {
            eventosPasados.push(evento)
        }
    }

    categorias = datosOrigen.events.map(evento => evento.category);
    categoriasSinRepetir = categorias.filter((categoria, index)=> categorias.indexOf(categoria) === index);

createTarjetas(eventosPasados)
createCheck(categoriasSinRepetir, contenedorInputs);
createSearchBar();

}
obtenerDatos();


