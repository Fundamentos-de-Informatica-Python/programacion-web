Vue.component('boton-web', {
    data: function() {
        return {
            cantidad: 10
        }
    },
    template: `<div>
            <button v-on:click="cantidad++">Mi boton! Hiciste {{cantidad}} de Clicks -</button>
            <br>
            <button v-on:click="cantidad--">restar</button>
        </div>
        `
})
new Vue({
    el: '#web-components'
})

