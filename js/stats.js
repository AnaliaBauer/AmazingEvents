let urlApiEvents = 'https://mindhub-xj03.onrender.com/api/amazing'
let categoriasSinRepetir = []

async function obtenerDatos() {

    const respuesta = await fetch(urlApiEvents);
    datosOrigen = await respuesta.json();
    // categorias = datosOrigen.events.map(evento => evento.category);
    // categoriasSinRepetir = categorias.filter((categoria, index)=> categorias.indexOf(categoria) === index);
    // console.log(categoriasSinRepetir)

 
    let pasados = filtrarPorFecha(datosOrigen.events, "pasado", datosOrigen.currentDate)
    let top = TopAssist(pasados)
    // StatisticsData(top)
    let less = LowAssist(pasados)
    let mayorCapacidad = TopCapacity(datosOrigen.events)

    let resultadoGananciasFuturas = getGananciasFuturas(datosOrigen.events, datosOrigen.currentDate);
    let sumatoriaFutura = filtrarCategoriaYGanancia(resultadoGananciasFuturas);
    createTrTable2(sumatoriaFutura);
    
    let resultadoGananciasPasadas = getGananciasPasadas(datosOrigen.events, datosOrigen.currentDate);
    let sumatoriaPasada = filtrarCategoriaYGanancia(resultadoGananciasPasadas);
    createTrTable3(sumatoriaPasada);
 


    
   



    
}

obtenerDatos();


