function crearTarea(titulo, descripcion, completada = false, id = null) {
    return {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        completada: completada
    };
}

function mostrarTarea(tarea) {
    console.log(`Titulo: ${tarea.titulo}
Descripcion : ${tarea.descripcion} 
Completada: ${tarea.completada ? 'Completa' : 'Pendiente'}`); 
}

module.exports = {crearTarea, mostrarTarea};