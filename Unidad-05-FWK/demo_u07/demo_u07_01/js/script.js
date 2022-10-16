const Inicio = {
    template: '<div>Estoy en el Inicio</div>'
}

const Articulos = {
    template: '<div>Estoy en la Lista de Articulos</div>'
}

const Compras = {
    template: '<div>Estoy en el Comprando</div>'
}

const routes = [
    { path: '/inicio',    component: Inicio  },
    { path: '/articulos', component: Articulos },
    { path: '/compras',   component: Compras }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app'
})

