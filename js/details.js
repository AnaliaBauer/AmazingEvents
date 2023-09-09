
let urlApiEvents = 'https://mindhub-xj03.onrender.com/api/amazing'

async function obtenerDatos(){

    const respuesta = await fetch(urlApiEvents);

    datosOrigen = await respuesta.json();

    const queryString = location.search

    const params = new URLSearchParams(queryString) 

    const id = params.get("id")

    const detalleEvento = datosOrigen.events.find((evento) => evento._id == id)

    crearTarjetaDetalle(detalleEvento);
}

obtenerDatos();