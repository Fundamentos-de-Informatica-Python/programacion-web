var appVue2 = new Vue({
    el: '#app',
    data: {
        titulo: 'Listado',
        mistareas: [
            { nombre: 'Aprender HTML', terminada: false},
            { nombre: 'Aprender CSS', terminada: false},
            { nombre: 'Aprender Javascript', terminada: false},
            { nombre: 'Dormir!', terminada: true}
        ],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function() {
            if (this.nuevaTarea.trim()) {
                var tarea = {
                        nombre: this.nuevaTarea,
                        terminada: false
                    }
                this.mistareas.push(tarea);
                this.nuevaTarea = ''
            }
        },
        eliminarTarea: function(indiceTarea) {
            this.mistareas.splice(indiceTarea, 1)
        },
        editarTarea: function(indice, textoEditar) {
            this.mistareas[indice].nombre =  this.nuevaTarea
        }
    }
})