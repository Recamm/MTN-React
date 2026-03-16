const { crearTarea, mostrarTarea, verTarea, listarTareas } = require('./models/models');
const { agregarTarea, buscarTarea, completarTarea, eliminarTarea } = require('./services/services');
const utils = require('./utils/utils');

let tareas = [];

let tarea1 = crearTarea("Tarea 1", "Descripcion asd", false, 1);
verTarea(tarea1);
agregarTarea(tareas, tarea1);

const tareaEncontrada = buscarTarea(tareas, 1);
if(tareaEncontrada){
    console.log("Tarea encontrada:", tareaEncontrada.titulo);
} else {
    console.log("Tarea no encontrada");
}

console.log("-----------------------------------------");
tareas = completarTarea(tareas, 1);
listarTareas(tareas);

console.log("-----------------------------------------");
tareas = eliminarTarea(tareas, 1);
listarTareas(tareas);