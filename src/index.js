const { crearTarea, mostrarTarea } = require('./models/models');
// const service = require('./services/tareasService');
// const utils = require('./utils/tareasUtils');

const tareas = {};

let tarea1 = crearTarea("Tarea 1", "Descripcion asd", true);
mostrarTarea(tarea1);