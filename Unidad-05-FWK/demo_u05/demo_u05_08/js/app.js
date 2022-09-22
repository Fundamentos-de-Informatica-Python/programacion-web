var appVue2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Clicos Iterativos V-FOR: Colecciones',
        nombre: 'Carlitos',
        miImagen: 'img/Vue.js_Logo_2.svg',
        myvalor: '<h1>Hola Mundo!</h1>',
        mostrar: true,
        equipos: ['River', 'Boca', 'Independiente', 'Racing', 'San Lorenzo'],
        campeonato: [
            { nombre: 'River', posicion:1, puntos: 30 },
            { nombre: 'Independiente', posicion:2, puntos: 29 },
            { nombre: 'Racing', posicion:3, puntos: 28 },
            { nombre: 'San Lorenzo', posicion:4, puntos: 27 },
            { nombre: 'Huracán', posicion:5, puntos: 20 },
            { nombre: 'Boca', posicion:6, puntos: 3 }
        ],
    },
    methods: {
        mostrarMensaje: function() {
            return 'Demo  u05: ' + this.mensaje ;
        }
    }
})

