// Importar el paquete express
const express = require('express');
const path = require('path');

// Crear una instancia de express
const app = express();

// Definir el puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (HTML, CSS, JS) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para el inicio de sesión (inicio_sesion.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'inicio_sesion.html'));
});

// Ruta para el formulario de registro (registro.html)
app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'registro.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
