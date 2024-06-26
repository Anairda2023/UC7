const produtoController = require('../controllers/produtoController');
const express = require('express');
const router = express.Router();
router.get('/', produtoController.home);
router.get('/cadastro', produtoController.formCadastro);
router.post('/cadastro', produtoController.cadastro);
router.get('/listarproduto', produtoController.listarproduto);

module.exports = router;