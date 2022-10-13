var appVue2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Clicos Iterativos V-FOR',
        nombre: 'Carlitos',
        miImagen: 'img/Vue.js_Logo_2.svg',
        myvalor: '<h1>Hola Mundo!</h1>',
        mostrar: true,
        equipos: ['Boca', 'River',  'Independiente', 'Racing', 'San Lorenzo']
    },
    methods: {
        mostrarMensaje: function() {
            return 'Demo  u05: ' + this.mensaje ;
        }
    }
})

