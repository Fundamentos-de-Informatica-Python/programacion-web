var appVue2 = new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de Tareas',
        tareas: [
            { nombre: 'Aprender HTML', terminada: false},
            { nombre: 'Aprender CSS', terminada: false},
            { nombre: 'Aprender Javascript', terminada: false}
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
                this.tareas.push(tarea);
                this.nuevaTarea = ''
            }
        }
    }
})

