// Importa el módulo 'ms', que probablemente se usa en algún lugar fuera de este fragmento.
const ms = require('ms');

// Importa el modelo de curso desde un directorio relativo.
const Vinho = require('../models/vinho');

// Crea una instancia del modelo de curso.
const vinhoModel = new Vinho();

// Importa el módulo 'path' para manejar rutas de archivos.
const path = require('path');

// Define la clase CourseController.
class VinhoController {
    // Método para obtener todos los cursos.
    getAllVinhos(req, res) {
        // Llama al método getAllCourses del modelo y almacena el resultado en 'courses'.
        const vinho = vinhoModel.getAllVinhos();
        // Devuelve la lista de cursos en formato JSON.
        res.json(vinho);
    }

    // Método para crear un nuevo curso.
    createVinho(req, res) {
        // Extrae el nombre y la descripción del cuerpo de la solicitud.
        const { name, description, img } = req.body;
        // Llama al método createCourse del modelo y almacena el nuevo curso.
        const newVinho = vinhoModel.createVinho(name, description, img);
        // Redirige al usuario a la raíz del sitio después de crear el curso.
        res.status(201).redirect('/editar');
    }

    // Método para obtener un curso por su ID.
    getVinhoById(req, res) {
        // Extrae el ID del curso de los parámetros de la solicitud.
        const vinhoId = req.params.id;
        // Llama al método getCourseById del modelo y almacena el resultado en 'course'.
        const vinho = Model.vinhogetCourseById(vinhoId);
        // Si el curso no se encuentra, devuelve un error 404.
        if (!vinho) {
            return res.status(404).json({ msg: 'Wine not found' });
        }
        // Devuelve el curso en formato JSON.
        res.json(vinho);
    }

    // Método para eliminar un curso por su ID.
    deleteVinho(req, res) {
        // Extrae el ID del curso de los parámetros de la solicitud.
        const vinhoId = req.params.id;
        // Llama al método deleteCourse del modelo y almacena el resultado en 'courseDeleted'.
        const vinhoDeleted = vinhoModel.deleteVinho(vinhoId);
        // Si el curso no se encuentra, devuelve un error 404.
        if (!vinhoDeleted) {
            return res.status(404).json({ msg: 'Wine not found' });
        }
        // Devuelve un mensaje indicando que el curso fue eliminado exitosamente.
        res.json({ msg: 'Vinho deleted successfully' });
    }

    // Método para servir el formulario de edición de un curso.
    formEditVinho(req, res){
        // Extrae el ID del curso de los parámetros de la solicitud.
        const vinhoId = req.params.id;
        // Envía el archivo HTML de edición al cliente.
        res.sendFile(path.join(__dirname, '../public/html', 'edit.html'));
    }

    homeCliente(req, res){
        
        
        res.sendFile(path.join(__dirname, '../public/html', 'cliente.html'));
    }
    
    updateVinho(req, res) {
        // Extrae el ID del curso de los parámetros de la solicitud.
        const vinhoId = req.params.id;
        // Extrae el nombre y la descripción del cuerpo de la solicitud.
        const { name, description, img } = req.body;
        // Llama al método updateCourse del modelo y almacena el resultado en 'courseUpdate'.
        const vinhoUpdate = vinhoModel.updateVinho(vinhoId, name, description, img);
        // Si el curso no se encuentra, devuelve un error 404.
        if (!vinhoUpdate) {
            return res.status(404).json({ msg: 'Wine not found' });
        }
        // Devuelve el curso actualizado en formato JSON.
        res.json({ vinhoUpdate });
    }
}

// Exporta una instancia de CourseController para ser usada en otras partes de la aplicación.
module.exports = new VinhoController();
