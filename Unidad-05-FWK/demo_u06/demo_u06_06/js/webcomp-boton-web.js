Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 6
        }
    },
    methods: {
        incrementar: function() {
            this.cantidad++
        }
    },
    props: [ 'titulo' ],
    template: '<button v-on:click="incrementar">{{titulo}} |--| Hiciste {{cantidad}} de Clicks</button>'
})
new Vue({
    el: '#web-components'
})

