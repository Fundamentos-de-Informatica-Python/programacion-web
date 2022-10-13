var appVue2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'v-IF y v-ELSE',
        nombre: 'Carlitos',
        miImagen: 'img/Vue.js_Logo_2.svg',
        myvalor: '<h1>Hola Mundo!</h1>',
        mostrar: true
    },
    methods: {
        mostrarMensaje: function() {
            return 'Demo  u05: ' + this.mensaje ;
        },
        cambiar: function() {
            this.mostrar = !this.mostrar
        }
    }
})

