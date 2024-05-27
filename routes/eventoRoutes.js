
const eventoController = require('../Controllers/eventoController');


const express = require('express');


const router = express.Router();


router.get('/Eventos', eventoController.homeevento);

router.get('/Eventos/listar', eventoController.getAllEventos);

router.get('/Eventos/:id', eventoController.geteventoById);


router.post('/Eventos/create', eventoController.createevento);


router.put('/Eventos/:id', eventoController.updateevento);


router.delete('/Eventos/:id', eventoController.deleteevento);







router.get('/Eventos/dashboard/:id', eventoController.formEditevento);


module.exports = router;
