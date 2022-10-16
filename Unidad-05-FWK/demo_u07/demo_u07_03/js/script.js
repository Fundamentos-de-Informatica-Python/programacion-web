const Inicio    = { template: '<div>Estoy en el Inicio</div>'}
const Compras   = { template: '<div>Estoy en el Comprando</div>' }
const Articulos = { 
    template: `
        <div>
            <router-link to="/articulos/1">Articulo 1</router-link>
            <router-link to="/articulos/2">Articulo 2</router-link>
        </div>
    `
}
const Articulo = { template: '<div>Estoy mostrando el Articulo Nro {{ $route.params.id }}</div>' }


const routes = [
    { path: '/inicio',         component: Inicio    },
    { path: '/articulos',      component: Articulos },
    { path: '/compras',        component: Compras   },
    { path: '/articulos/:id',  component: Articulo  },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app'
})


