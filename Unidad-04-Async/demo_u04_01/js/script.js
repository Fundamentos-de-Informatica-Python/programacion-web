dividir(10, 0)
    .then(resultado => {
        console.log(`resultado ${resultado}! `)
    })
    .catch(error => {
        console.log(`error ${error}! `)
    })


function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor == 0) {
            reject('no se puede dividir por cero')
        } else {
            resolve(dividendo / divisor)
        }
    })
}