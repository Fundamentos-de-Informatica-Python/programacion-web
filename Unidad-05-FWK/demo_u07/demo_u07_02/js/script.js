const Inicio    = { template: '<div>Estoy en el Inicio</div>'}
const Compras   = { template: '<div>Estoy en el Comprando</div>' }
const Articulos = { 
    template: `
        <div>
            <router-link to="/articulos/1">Articulo 1</router-link>
            <router-link to="/articulos/2">Articulo 2</router-link>
            <router-link to="/articulos/fruta">Manda Fruta</router-link>
        </div>
    `
}
const Articulo = { template: '<div>Estoy mostrando solo un Articulo</div>' }


const Textaso = { template: `
<img alt="Orgánico Diseño Receptivo" 
class="media-image lazyload noversion visible" data-src="https://images01.nicepagecdn.com/page/43/32/es/plantilla-html-43328.jpg" src="https://images01.nicepagecdn.com/page/43/32/es/plantilla-html-43328.jpg"
 style="max-width:100%;">
` 
}



const routes = [
    { path: '/inicio',         component: Inicio    },
    { path: '/articulos',      component: Articulos },
    { path: '/compras',        component: Compras   },
    { path: '/articulos/:id',  component: Articulo  },
    { path: '/textaso/:id',    component: Textaso  },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app'
})


