const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('productos', { title: 'Productos' });
});

module.exports = router;
