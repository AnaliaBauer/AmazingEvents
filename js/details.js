const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const detalleEvento = data.events.find(evento => evento._id == id)

crearTarjetaDetalle(detalleEvento);