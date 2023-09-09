let urlApiEvents = 'https://mindhub-xj03.onrender.com/api/amazing'
let categoriasSinRepetir = []

async function obtenerDatos() {

    const respuesta = await fetch(urlApiEvents);
    datosOrigen = await respuesta.json();
    categorias = datosOrigen.events.map(evento => evento.category);
    categoriasSinRepetir = categorias.filter((categoria, index)=> categorias.indexOf(categoria) === index);
    

    createTarjetas(datosOrigen.events);
    createCheck(categoriasSinRepetir, contenedorInputs);
    createSearchBar();
    // getAsistenciaPast(datosOrigen);
    // getMayorCapacidad(datosOrigen.events);
    // getEstimadosUpcoming(datosOrigen);
  
    
}
obtenerDatos(); 





