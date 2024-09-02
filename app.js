const express = require('express');
const path = require('path');
const app = express();
const clientes = require('./routes/clientes');
const productos = require('./routes/productos');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);  


app.use(express.static(path.join(__dirname, 'public')));

app.use('/clientes', clientes);
app.use('/productos', productos);

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
