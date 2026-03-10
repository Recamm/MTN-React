const { crearTarea, mostrarTarea } = require('./models/models');
const service = require('./services/tareasService');
const utils = require('./utils/tareasUtils');

const tareas = [];

let tarea1 = crearTarea("Tarea 1", "Descripcion asd", true, 1);
mostrarTarea(tarea1);
agregarTarea(tarea1);
verTareas();