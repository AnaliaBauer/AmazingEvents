
let proximosEventos = []

for (let evento of data.events) {

    // let banana = evento.date.split('-')
    let fechaEvento = Date.parse(evento.date)
    let fechaActual = Date.parse(data.currentDate)


    if (fechaActual < fechaEvento) {
        proximosEventos.push(evento)
    }
}

createTarjetas(proximosEventos)

createSearchBar();

createCheck(data.events, contenedorInputs);


