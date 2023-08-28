let eventosPasados = []

// let fechaActual = new Date(data.currentDate)
for (let evento of data.events){

    // let banana = evento.date.split('-')
     let fechaEvento = Date.parse(evento.date)
     let fechaActual = Date.parse(data.currentDate)


    if( fechaActual > fechaEvento){
        eventosPasados.push(evento)
    }
}

createTarjetas(eventosPasados)




