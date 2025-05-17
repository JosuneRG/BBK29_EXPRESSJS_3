// Importar Express
const express = require('express');
const app = express();
const puerto = 3000;

// Middleware para que Express entienda JSON
app.use(express.json());

// Lista de productos (base de datos en memoria)
let productos = [
  { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
  { id: 2, nombre: 'FIFA 22 PS5', precio: 1000 },
  { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
  { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
  { id: 5, nombre: 'Skin Valorant', precio: 120 },
  { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
];

// Ruta GET para listar todos los productos
app.get('/products', (req, res) => {
  res.json({
    description: 'Productos',
    items: productos
  });
});

// Crear un producto (POST)
app.post('/products', (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  res.json({ mensaje: 'Producto creado', producto: nuevoProducto });
});
