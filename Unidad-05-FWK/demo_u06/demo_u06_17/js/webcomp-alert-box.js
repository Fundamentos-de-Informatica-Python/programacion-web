Vue.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            
            <br>
            <strong>Error!</strong>
            
            <slot name="mensaje"></slot>
            <slot name="mensaje"></slot>
            <slot name="mensaje"></slot>
            <slot name="mensaje"></slot>
            <slot name="mensaje"></slot>
            <slot name="mensaje"></slot>
            <slot name="mensaje"></slot>
            <slot name="mensaje"></slot>
            <slot name="mensaje"></slot>

            <slot name="boton"></slot>
            <slot name="boton"></slot>
            <slot name="boton"></slot>
            <slot name="boton"></slot>
            <slot name="boton"></slot>

            <br>
            
            <hr>
            
        </div>
    `
})
new Vue({
    el: '#web-components'
})

