/**
 * Muestra todos los divs en la consola
 */
function prueba1() {
    let divs = document.getElementById('app').innerHTML

    let parrafo = document.getElementById('parrafo1').innerHTML  
    
    console.log(divs)

    console.log(parrafo)
}

/**
 * Muestra todos los elementos con "class=pais" en la consola
 */
function prueba2() {
    let paises = document.getElementsByClassName('pais')

    console.log('Pais 1:', paises[0].innerHTML)
    console.log('Pais 2:', paises[1].innerHTML)
    console.log('Pais 3:', paises[2].innerHTML)

    /* Otra Variante */

    console.log('Paises:', paises)
    for (pais of paises) {
        console.log('Pais ['+pais+']:', pais.innerHTML)
    }
}

/**
 * Muestra todos los elementos del tag "DIV" en la consola
 */
function prueba3() {
    let divs = document.getElementsByTagName('div')

    console.log('divs:', divs)

    for (d of divs) {
        console.log('d ['+d+']:', d.innerHTML)
    }

}


/**
 * Cambia el contenido (DOM) del primer párrafo
 */
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


/**
 * Agrega dinámicamente una porcion del DOM, un nodo hijo
 */
function prueba5() {
    let nuevoParrafo = document.createElement('p')

    nuevoParrafo.innerHTML = "<h2>Hola! Estoy apareciendo en forma dinámica!</h2>"


    let parrafoApp = document.getElementById('app');
    parrafoApp.appendChild()
}