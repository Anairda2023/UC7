// Variable global para generar IDs únicos para los cursos.
let chave = 1;

// Define la clase Course.
class Vinho {
    constructor(){
        // Inicializa un arreglo vacío para almacenar los cursos.
        this.vinhos = [];
    }

    // Método para obtener todos los cursos.
    getAllVinhos(){
        // Devuelve el arreglo de cursos.
        return this.vinhos
    }

    // Método para crear un nuevo curso.
    createVinho(name, description, img){
        // Genera un ID único para el nuevo curso.
        const id = `c${chave++}`;
        // Crea un nuevo objeto curso con el ID, nombre y descripción proporcionados.
        const newVinho = { id, name, description, img };
        // Añade el nuevo curso al arreglo de cursos.
        this.vinhos.push(newVinho);
        // Devuelve el curso recién creado.
        return newVinho;
    }

    // Método para obtener un curso por su ID.
    getVinhoById(id){
        // Busca el curso con el ID especificado.
        const vinhoResult = this.vinhos.find(vinho => vinho.id === id);
        // Devuelve el curso encontrado, o undefined si no se encuentra.
        return vinhoResult;
    }

    // Método para eliminar un curso por su ID.
    deleteVinho(id){
        // Encuentra el índice del curso con el ID especificado.
        const vinhoIndex = this.vinhos.findIndex(vinho => vinho.id === id);
        // Si se encuentra el curso, lo elimina del arreglo.
        if (vinhoIndex !== -1){
            this.vinhos.splice(vinhoIndex, 1);
            // Devuelve true indicando que el curso fue eliminado exitosamente.
            return true;
        }
        // Si no se encuentra el curso, devuelve false.
        return false;
    }

    // Método para actualizar un curso por su ID.
    updateVinho(id, name, description,img){
        // Encuentra el índice del curso con el ID especificado.
        const vinhoIndex = this.vinho.findIndex(vinho => vinho.id === id);
        // Si se encuentra el curso, actualiza su nombre y descripción.
        if (vinhoIndex !== -1){
            this.vinhos[vinhoIndex].name = name;
            this.vinhos[vinhoIndex].description = description;
            this.vinhos[vinhoIndex].img = img;
            // Devuelve el curso actualizado.
            return this.vinhos[vinhoIndex];
        }
        // Si no se encuentra el curso, devuelve null.
        return null;
    }
}

// Exporta la clase Course para que pueda ser utilizada en otras partes de la aplicación.
module.exports = Vinho
