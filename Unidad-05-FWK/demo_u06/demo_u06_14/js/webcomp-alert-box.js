Vue.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            <strong>Error!</strong>
            <ul>
                <li><slot></slot>
                <li><slot></slot>
                <li><slot></slot>
            </ul>
            </div>
    `
})
new Vue({
    el: '#web-components'
})

