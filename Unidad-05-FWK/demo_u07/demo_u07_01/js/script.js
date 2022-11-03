const Inicio    = { template: '<div>Estoy en el Inicio</div>'}
const Articulos = { template: '<div>Estoy en la Lista de Articulos</div>' }
const Compras   = { template: '<div>Estoy en el Comprando</div>' }



const Ayuda   = { template: '<div>Lo que necesites: <br>tel:11 6888061 <br> mail:  super@rputer.com</div>' }
const Store   = { template: '<div>Los mejores descuentos están aqui!!</div>' }

const routes = [
    { path: '/inicio',    component: Inicio  },
    { path: '/articulos', component: Articulos },
    { path: '/compras',   component: Compras },
    { path: '/atencion-al-cliente',   component: Ayuda },
    { path: '/tienda',   component: Store },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app'
})


