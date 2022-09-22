new Promise(
    function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    })
    .then(result => {
        console.log(result);
        return result * 2;
    })
    .then(result => {
        console.log(result);
        return result * 2;
    })
    .then(result => {
        console.log(result);
        return result * 2;
    })
    .then(result => {
        console.log(result);
        return result * 2;
    })

// 1) La promesa inicial se resuelve en 1 segundo(*)
// 2) Entonces se llama al controlador .then en (**)
// 3) El valor que devuelve 
//             se pasa al siguiente controlador .then (***) 

