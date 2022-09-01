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

