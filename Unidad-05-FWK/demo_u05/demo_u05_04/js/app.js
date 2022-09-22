var appVue2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Imágenes',
        nombre: 'Carlitos',
        miImagen: 'img/Vue.js_Logo_2.svg'
    },
    methods: {
        mostrarMensaje: function() {
            return 'Demo  u05: ' + this.mensaje ;
        }
    }
})

