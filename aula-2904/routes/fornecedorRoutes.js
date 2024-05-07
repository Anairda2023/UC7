const fornecedorController = require('../controllers/fornecedorController');
const express = require('express');
const router = express.Router();
router.get('/', fornecedorController.home);
router.get('/cadastro', fornecedorController.formCadastro);
router.post('/cadastro', fornecedorController.cadastro);
router.get('/listarfornecedor', fornecedorController.listarfornecedor);

module.exports = router;