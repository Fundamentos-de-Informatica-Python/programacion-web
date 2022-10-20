Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 5
        }
    },
    methods: {
        incrementar: function() {
            this.cantidad++
        },
        decrementar: function() {
            this.cantidad = this.cantidad - 1
        }
    },
    template: `
    <div>
        <button v-on:click="incrementar">Mi boton!! Hiciste {{cantidad}} de Clicks</button>
        <button v-on:click="decrementar">decrementar</button>        
    </div>

    `
})
new Vue({
    el: '#web-components'
})

