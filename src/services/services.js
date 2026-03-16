function agregarTarea(tareas, tarea){
    tareas.push(tarea);
    return tareas;
}

function buscarTarea(tareas, id){
    const tarea = tareas.find(t => t.id === id);
    return tarea;
}

function completarTarea(tareas, id){
    return tareas.map(t => t.id === id ? {...t, completada: true} : t)
}

function eliminarTarea(tareas, id){
    return tareas.filter((tarea) => tarea.id != id);
}


module.exports = {agregarTarea, buscarTarea, completarTarea, eliminarTarea};