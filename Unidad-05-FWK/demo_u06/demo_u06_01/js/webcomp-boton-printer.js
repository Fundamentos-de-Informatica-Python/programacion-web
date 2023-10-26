Vue.component('boton-web', {
    template: '<button>Mi boton 2!</button>'
})
new Vue({
    el: '#web-components'
})


Vue.component('cumple-messi', {

    data: function() {
        return {
           cantidad: 0     
        }
    },
    methods: {
        incrementar: function() {
            this.cantidad++ 
        },
        getCantidad: function() {
            if (this.cantidad == 0) {
                return ""
            } else {
                return this.cantidad
            }
        }
    },
    props: { 'logro': { 
                default: 'y soy Argentino!!',
                type: String,
                required: true
           }},
    template: 
    `<div  class="border-color: coral">
        <br>
        <img src="img/leomessi-con-torta-y-mate.jpg" width="15%">
        <br>
        <br>Modificar Logros: <button v-on:click="incrementar">+</button>
        <br>
        Siempre digo! Estoy Super feliz porque gané {{ getCantidad() }} {{ logro }}...<br><input type="text" value="">
    </div>
    `
})
new Vue({
    el: '#web-cumple'
})
