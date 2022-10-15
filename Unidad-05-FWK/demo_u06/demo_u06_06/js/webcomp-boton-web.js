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
    props: [ 'titulo' ],
    template: '<button v-on:click="incrementar">{{titulo}} |--| Hicist {{cantidad}} de Clicks</button>'
})
new Vue({
    el: '#web-components'
})

