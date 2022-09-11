/*
    Muestra oculta una capa dependiento del ID
*/ 

function show(id) {
    document.getElementById(id).style.visibility="visible";
}

function hide(id) {
    console.log('apague al dinosaurio!')
    document.getElementById(id).style.visibility="hidden";
}

function edad() {
    text = prompt('Que edad tiene el Trex?!')
    console.log(text)
}


function ayuda(id) {

    len = document.getElementById(id).innerHTML.length

    texto = "Recuerde respetar a los animales (otra"

    if (len < 100) {

        texto = "<p>Los dinosaurios son animales slavajes! <p>" + 
        "<ul><li>No son nuestras mascotas" +
        "    <li>No debemos molestarlos, ni acariciarlos" + 
        "    <li>Por más que nos pidan comida, no debemos alimentarlos" +
        "    <li>Son muy tímidos... no les gusta que les tomen fotos..." +
        "</ul>"
    
    }

    document.getElementById(id).innerHTML = texto
     
}
