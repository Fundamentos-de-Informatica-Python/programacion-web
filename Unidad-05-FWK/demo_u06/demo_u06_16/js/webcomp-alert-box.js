Vue.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            
            <br>
            <strong>Error!</strong>

            <slot></slot>
            <slot name="mensaje"></slot>
            <slot name="boton"></slot>
            <br>
            <hr>

            <br>
            <strong>Error!</strong>
            <slot name="boton"></slot>
            <slot name="mensaje"></slot>
            <br>
            <hr>
        </div>
    `
})
new Vue({
    el: '#web-components'
})

