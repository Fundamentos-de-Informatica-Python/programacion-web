Vue.component('boton-web', {
    template: '<button>Mi boton 2!</button>'
})
new Vue({
    el: '#web-components'
})


Vue.component('cumple-messi', {

    data: function() {
        return {
           cantidad: 36     
        }
    },
    methods: {
        incrementar: function() {
            this.cantidad++ 
        }
    },
    template: 
    `<div  class="border-color: coral">
        <br>
        <img src="img/leomessi-con-torta-y-mate.jpg" width="15%">
        <br>
        <br>El año que viene tendré: <button v-on:click="incrementar">años</button>
        <br>
        Siempre digo! Estoy Super feliz porque es mi cumple nro {{ cantidad }} ...<br><input type="text" value="">
    </div>
    `
})
new Vue({
    el: '#web-cumple'
})
