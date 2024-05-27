// Importa el controlador de cursos.
const vinhoController = require('../controllers/vinhoController');

// Importa el módulo Express.
const express = require('express');

// Crea una instancia del enrutador de Express.
const router = express.Router();

// Define una ruta GET para obtener todos los cursos.
// Cuando se accede a '/courses', se llama al método getAllCourses del controlador de cursos.
router.get('/vinhos', vinhoController.getAllVinhos);

// Define una ruta GET para obtener un curso específico por su ID.
// Cuando se accede a '/courses/:id', se llama al método getCourseById del controlador de cursos.
router.get('/vinhos/buscar/:id', vinhoController.getVinhoById);

// Define una ruta POST para crear un nuevo curso.
// Cuando se accede a '/courses/create', se llama al método createCourse del controlador de cursos.
router.post('/vinhos/create', vinhoController.createVinho);

// Define una ruta PUT para actualizar un curso existente por su ID.
// Cuando se accede a '/courses/:id', se llama al método updateCourse del controlador de cursos.
router.put('/vinhos/:id', vinhoController.updateVinho);

// Define una ruta DELETE para eliminar un curso existente por su ID.
// Cuando se accede a '/courses/:id', se llama al método deleteCourse del controlador de cursos.
router.delete('/vinhos/:id', vinhoController.deleteVinho);

// Define una ruta GET para obtener el formulario de edición de un curso por su ID.
// Cuando se accede a '/courses/edit/:id', se llama al método formEditCourse del controlador de cursos.
router.get('/vinhos/edit/:id', vinhoController.formEditVinho);
router.get('/vinhos/cliente/', vinhoController.homeCliente);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
module.exports = router;
