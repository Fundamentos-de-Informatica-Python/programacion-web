Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 7,
            tituloGral: 'Hola a todos'
        }
    },
    methods: {
        incrementar: function() {
            this.cantidad++
        }
    },
    props: [ 'titulo' ],
    template: `
        <h1> {{tituloGral}} </h1>
        <button v-on:click="incrementar">{{titulo}} |--| Hiciste {{cantidad}} de Clicks
        </button>
    `
})
new Vue({
    el: '#web-components'
})

