var appVue2 = new Vue({
    el: '#app',
    data: {
        peras: 100,
        texto: ''
    },
    watch: {
        peras: function(newPeras, oldPeras) {
            this.texto = `Tenia ${ oldPeras} y ahora tengo ${newPeras}`
        }
    },
    methods: {
        mostrarMensaje: function() {
            return 'Demo  u05: ' + this.mensaje ;
        }
    }
})

