Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 10
        }
    },
    template: '<button v-on:click="cantidad++">Mi boton! Hiciste {{cantidad}} de Clicks</button>'
})
new Vue({
    el: '#web-components'
})

