Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 5
        }
    },
    methods: {
        incrementar: function() {
            this.cantidad++
        }
    },
    template: '<button v-on:click="incrementar">Mi boton! Hicist {{cantidad}} de Clicks</button>'
})
new Vue({
    el: '#web-components'
})

