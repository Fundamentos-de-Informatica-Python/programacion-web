const Inicio    = { template: '<div>Estoy en el Inicio</div>'}
const Compras   = { template: '<div>Estoy en el Comprando</div>' }
const Articulos = { 
    template: `
        <div>
            <h2>Lista filtrada por {{ $route.query["marca"] }}  
                               y   {{ $route.query["tipo"] }}  
            </h2>
            <router-link to="/articulos/1/detalles">Articulo 1</router-link>
            <router-link to="/articulos/2/comprar">Articulo 2</router-link>
        </div>
    `
}
const Articulo = { template: `
        <div>
            Estoy mostrando el Articulo Nro {{ $route.params.id }}
            <router-view></router-view>
        </div>
    `
}
const NotFound = { template: `
        <div>
            <img src="img/Not-Found-File-Not-Found-404-Error-2384304.jpg" width="80%">
            <small>https://www.maxpixel.net/Not-Found-File-Not-Found-404-Error-2384304 (Licence USe CC-0)</small>
        </div>`
}


const Carrito = { template: '<div>Aqui mostramos el carrito de compras</div>' }
const Submitir = { template: '<div>Aqui ponemos el boton de comprar</div>' }

const DetalleArticulo = { template: '<p class="style: red">Detalle del Articulo</p>' }
const ComprarArticulo = { template: '<p class="style: red">Aqui compramos el Articulo</p>' }

const routes = [
    { path: '/inicio',         component: Inicio    },
    { path: '/articulos',      components: {
            default: Articulos,
            sumitir: Submitir
        }
    },
    { path: '/compras',        components: {
            default: Compras,
            carrito: Carrito,
            submitir: Submitir
        }   
    },
    { path: '/articulos/:id',  component: Articulo, 
            children: [
                {   path: 'detalles',component: DetalleArticulo },
                {   path: 'comprar', component: ComprarArticulo }
            ]
    },
    { path: '/*',   redirect: '/inicio' }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app',
    methods: {
        irAtras() {
            router.go(-1) 
        },
        irAdelante() {
            router.go(1) 
        },
        irCompras() {
            router.push('compras')
        }
    }
})


