function crearTarea(titulo, descripcion) {
    return {
        titulo: titulo,
        descripcion: descripcion,
        completada: false
    };
}

function mostrarTarea(tarea) {
    console.log(`Titulo: ${tarea.titulo}
Descripcion : ${tarea.descripcion} 
Completada: ${tarea.completada ? 'Completa' : 'Pendiente'}`); 
}

module.exports = {crearTarea, mostrarTarea};