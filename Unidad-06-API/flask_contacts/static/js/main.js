const btnDelete = document.querySelectorAll('.btn-delete')

if(btnDelete){
    //transformamos los nodos html en un array para recorrerlos
    const btnArray = Array.from(btnDelete);
    btnArray.forEach((btn) =>{
        btn.addEventListener('click', (e) =>{
            if(!confirm('¿Está seguro/a de querer eliminar el dato?')){
                e.preventDefault();
            }
        })
    })
}