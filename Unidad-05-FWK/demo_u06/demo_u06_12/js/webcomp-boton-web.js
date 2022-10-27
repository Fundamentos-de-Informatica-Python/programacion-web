Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 12,
            tituloGral: 'Hola a todos'
        }
    },
    methods: {
        incrementar: function() {
            this.$emit('mamaaaaaa', 30),
            this.cantidad = this.cantidad + 1
            // this.cantidad++
        }
    },
    props: { 
        'titulo': {
            default: 'Hijo!!!'   
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
        importancia: 1
    }
})

