# Sistema de Gestión de Tareas (To-Do List) en JavaScript

Este proyecto es una introducción a la gestión de estado y lógica de negocio que luego se utiliza en aplicaciones React. Aquí se implementa un sistema de tareas (to-do list) usando solo JavaScript, aplicando buenas prácticas de organización y funciones puras.

## Estructura del Proyecto

```
src/
	index.js                # Punto de entrada y pruebas
	models/
		models.js             # Funciones de creación, visualización y validación de tareas
	services/
		tareasService.js      # Funciones para manipular el array de tareas
	utils/
		tareasUtils.js        # Funciones auxiliares para filtrar, ordenar y buscar
```

## Funcionalidades implementadas

- **crearTarea**: Crea una nueva tarea con los campos requeridos.
- **mostrarTarea**: Formatea una tarea para mostrarla de forma legible.
- **validarTarea**: Verifica que una tarea tenga todos los campos requeridos correctamente.
- **agregarTarea**: Agrega una nueva tarea al array.
- **buscarPorId**: Busca una tarea por su id.
- **completarTarea**: Marca una tarea como completada.
- **eliminarTarea**: Elimina una tarea del array.
- **actualizarTarea**: Actualiza una tarea existente.
- **actualizarPrioridad**: Cambia la prioridad de una tarea.
- **duplicarTarea**: Crea una copia de una tarea existente con nuevo id.
- **filtrarPorEstado**: Filtra tareas según su estado.
- **filtrarPorPrioridad**: Filtra tareas por prioridad.
- **contarPorPrioridad**: Cuenta cuántas tareas hay de cada prioridad.
- **ordenarPorPrioridad**: Ordena tareas por prioridad (alta, media, baja).
- **buscarTareas**: Busca tareas por término en título o descripción.

Todas las funciones retornan un nuevo array, nunca mutan el original.

## ¿Cómo ejecutar el proyecto?

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
2. Clona este repositorio y entra a la carpeta del proyecto.
3. Ejecuta el archivo principal con:

	 ```bash
	 node src/index.js
	 ```

Verás en consola ejemplos de uso y resultados de todas las funciones implementadas.

## ¿Cómo se relaciona esto con React?

En React, el estado de la aplicación (por ejemplo, el array de tareas) se maneja de forma similar, usando funciones puras para actualizar el estado y renderizar la UI. Este proyecto te ayuda a entender la lógica antes de pasar a componentes y hooks de React.

---
¡Modifica y experimenta con el código para practicar!
