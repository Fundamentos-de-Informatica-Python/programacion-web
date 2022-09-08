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

    let longSpan = document.getElementById(id).innerHTML.length

    

    if (longSpan < 100) {

        document.getElementById(id).innerHTML = "<p>Los dinosaurios son animales slavajes! <p>" + 
        "<ul><li>No son nuestras mascotas" +
        "    <li>No debemos molestarlos, ni acariciarlos" + 
        "    <li>Por más que nos pidan comida, no debemos alimentarlos" +
        "    <li>Son muy tímidos... no les gusta que les tomen fotos..." +
        "</ul>"
    
    } else {

        document.getElementById(id).innerHTML = "Recuerde respetar a los animales (otra)"
    }

    
     
}
