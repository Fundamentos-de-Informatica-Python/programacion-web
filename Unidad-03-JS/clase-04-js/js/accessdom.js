function prueba1() {
    let divs = document.getElementById('app').innerHTML

    let parrafo = document.getElementById('parrafo1').innerHTML  
    
    console.log(divs)

    console.log(parrafo)
}


function prueba2() {
    let paises = document.getElementsByClassName('pais')

    console.log('Pais 1:', paises[0].innerHTML)
    console.log('Pais 2:', paises[1].innerHTML)
    console.log('Pais 3:', paises[2].innerHTML)

    /* Otra Variante */

    for (pais of paises) {
        console.log('Pais ['+pais+']:', pais.innerHTML)
    }
}

function prueba3() {
    let divs = document.getElementsByTagName('div')

    for (d of divs) {
        console.log('d ['+d+']:', d.innerHTML)
    }

}


let toggle = true
function prueba4(id) {
    let parrafo = document.getElementById(id)

    if (toggle) {
        parrafo.innerHTML = "Hola, buenas tardes!!" 
    } else {
        parrafo.innerHTML = "Hola, buen día!!!"        
    }

    toggle = !toggle
}


function prueba5() {
    let nuevoParrafo = document.createElement('p')

    nuevoParrafo.innerHTML = "<h2>Hola! Estoy apareciendo en forma dinámica!</h2>"


    let parrafoApp = document.getElementById('app');
    parrafoApp.appendChild()
}