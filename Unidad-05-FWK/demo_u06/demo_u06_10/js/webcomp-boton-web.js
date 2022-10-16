Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 10,
            tituloGral: 'Hola a todos'
        }
    },
    methods: {
        incrementar: function() {
            this.cantidad++
        }
    },
    props: { 
        'titulo': {
            type: Number,
            default: 10   
        }
    },
    template: `
        <div>
            <h1> {{tituloGral}} </h1>
            <button v-on:click="incrementar">{{titulo}} |--| Hiciste {{cantidad}} de Clicks
            </button>
        </div>
    `
})
new Vue({
    el: '#web-components'
})

