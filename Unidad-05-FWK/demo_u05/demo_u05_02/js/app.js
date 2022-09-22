var appVue2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola Mundo!'
    },
    methods: {
        mostrarMensaje: function() {
            return 'El profe dice ' + this.mensaje;
        }
    }
})

