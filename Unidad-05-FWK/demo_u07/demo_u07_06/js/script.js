const Inicio    = { template: '<div>Estoy en el Inicio</div>'}
const Compras   = { template: '<div>Estoy en el Comprando</div>' }
const Articulos = { 
    template: `
        <div>
            <h2>Lista filtrada por {{ $route.query["marca"] }}  
                               y   {{ $route.query["tipo"] }}  
            </h2>
            <router-link to="/articulos/1">Articulo 1</router-link>
            <router-link to="/articulos/2">Articulo 2</router-link>
        </div>
    `
}
const Articulo = { template: '<div>Estoy mostrando el Articulo Nro {{ $route.params.id }}</div>' }
const NotFound = { template: `
        <div>
            <img src="img/Not-Found-File-Not-Found-404-Error-2384304.jpg" width="80%">
            <small>https://www.maxpixel.net/Not-Found-File-Not-Found-404-Error-2384304 (Licence USe CC-0)</small>
        </div>`
}


const routes = [
    { path: '/inicio',         component: Inicio    },
    { path: '/articulos',      component: Articulos },
    { path: '/compras',        component: Compras   },
    { path: '/articulos/:id',  component: Articulo  },
    { path: '/*',              component: NotFound  },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app'
})


