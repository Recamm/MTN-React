const { buscarTarea } = require('../services/services');

function crearTarea(titulo, descripcion, completada = false, id = null) {
    return {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        completada: completada
    };
}

function verTarea(tarea){
    console.log(`Titulo: ${tarea.titulo}
Descripcion : ${tarea.descripcion} 
Completada: ${tarea.completada ? 'Completa' : 'Pendiente'}`); }

function mostrarTarea(tareas, id) {
    verTarea(buscarTarea(tareas, id))
}

function listarTareas(tareas){
    tareas.forEach(t => {
        verTarea(t);
    });
}

module.exports = {crearTarea, mostrarTarea, verTarea, listarTareas};