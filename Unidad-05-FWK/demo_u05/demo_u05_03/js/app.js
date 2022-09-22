var appVue2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola Mundo!',
        nombre: 'Carlitos'
    },
    methods: {
        mostrarMensaje: function() {
            return 'El profe dice ' + this.mensaje;
        }
    }
})

