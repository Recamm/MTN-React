function agregarTarea(tarea){
    tareas.push(tarea);
}

function verTareas(){
    for(const t of tareas){
        console.log(t.titulo);
    }
}

function buscarTarea(id){
    const tarea = tareas.find(t => t.id === id);
    return tarea;
}

module.exports = {agregarTarea, verTareas, buscarTarea};