var appVue2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Demo: Interpolación mediante computed properties',
        peras: 100,
        precio: 20
    },
    computed: {
        valorTptañ: function() {
            return this.peras * this.precio
        }
    },
    methods: {
        mostrarMensaje: function() {
            return 'Demo  u05: ' + this.mensaje ;
        }
    }
})

