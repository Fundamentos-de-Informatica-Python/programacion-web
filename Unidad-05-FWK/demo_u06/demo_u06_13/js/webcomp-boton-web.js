Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 12,
            tituloGral: 'Hola a todos'
        }
    },
    methods: {
        incrementar: function() {
            this.$emit('incre', 2),
            this.cantidad++
        }
    },
    props: { 
        'titulo': {
            default: 'Holaaaaa!'   
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
    el: '#web-components',
    data: {
        totalClicks: 0
    }
})

