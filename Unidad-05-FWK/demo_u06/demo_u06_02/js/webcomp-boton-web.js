Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 10
        }
    },
    template: '<button>Mi boton! Hiciste {{cantidad}} de Clicks</button>'
})
new Vue({
    el: '#web-components'
})

