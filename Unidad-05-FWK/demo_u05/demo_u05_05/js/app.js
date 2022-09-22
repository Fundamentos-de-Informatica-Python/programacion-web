var appVue2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'v-HTML',
        nombre: 'Carlitos',
        miImagen: 'img/Vue.js_Logo_2.svg',
        miHTML: '<h1>Hola Mundo!</h1>'
    },
    methods: {
        mostrarMensaje: function() {
            return 'Demo  u05: ' + this.mensaje ;
        }
    }
})

