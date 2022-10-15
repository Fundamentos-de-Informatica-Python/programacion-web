Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 0
        }
    },
    template: '<button>Mi boton! Hicist {{cantidad}} de Clicks</button>'
})
new Vue({
    el: '#web-components'
})

