// Importa el módulo Express.
const express = require('express');
// Crea una instancia de una aplicación Express.
const app = express();
// Define el puerto en el cual el servidor escuchará.
const port = 3000;
// Importa el módulo path para trabajar con rutas de archivos y directorios.
const path = require('path');
// Importa las rutas de los cursos desde el archivo courseRoutes.
const vinhoRoutes = require('./routes/vinhoRoutes');

// Middleware para servir archivos estáticos desde el directorio 'public'.
app.use(express.static('public'));
// Middleware para parsear las solicitudes con JSON payloads.
app.use(express.json());
// Middleware para parsear las solicitudes con URL-encoded payloads.
app.use(express.urlencoded({ extended: false }));
// Usa las rutas de los cursos definidas en courseRoutes.
app.use(vinhoRoutes);

// Define una ruta GET para la página de inicio.
// Cuando se accede a '/', envía el archivo 'index.html' ubicado en 'public/html'.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});


// Define una ruta GET para la página de edición.
// Cuando se accede a '/editar', envía el archivo 'edit.html' ubicado en 'public/html'.
app.get('/editar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'edit.html'));
});

// Inicia el servidor y hace que escuche en el puerto especificado.
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
