Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 8,
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
            type: String,
            required: true   
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

