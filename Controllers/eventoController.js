
const Evento = require('../models/eventoModel');
const eventomodel = new Evento();


const path = require('path');


class eventoController {

    
    homeevento(req, res) {
        res.sendFile(path.join(__dirname, '../public/html/', 'index.html'));
    }
    
    getAllEventos(req, res) {
        const eventos = eventomodel.getAllEventos(); 
        res.json(eventos);
    }

    

    
    createevento(req, res) {
        const { titulo, descricao, data, local, criadoEM, atualizadoEM } = req.body; 
        const newevento = eventomodel.createEvento(titulo, descricao, data, local, criadoEM, atualizadoEM); 
        
        res.status(201).redirect('/eventos');
    }
    
    
    geteventoById(req, res) {
        const eventoId = req.params.id; 
        const evento = eventomodel.getEventoById(eventoId); 
        if (!evento) {
            return res.status(404).json({ msg: 'evento not found' }); 
        }
        res.json(evento); 
    }


    deleteevento(req, res) {
        const eventoId = req.params.id; 
        const eventoDeleted = eventomodel.deleteEvento(eventoId);
        if (!eventoDeleted) {
            return res.status(404).json({ msg: 'evento not found' }); 
        }
       
        res.json({ msg: 'evento deleted sucessfully' }); 
    }

    
    formEditevento(req, res) {
        const eventoId = req.params.id; 
        res.sendFile(path.join(__dirname, '../public/html/adm', 'dashboard.html')); 
    }
    

    
    updateevento(req, res) {
        const eventoId = req.params.id; 
        const { titulo, descricao, data, local, criadoEM, atualizadoEM} = req.body; 
        const eventoUpdate = eventomodel.updateEvento(eventoId, titulo, descricao, data, local, criadoEM, atualizadoEM); 
        if (!eventoUpdate) {
            return res.status(404).json({ msg: 'evento not found' }); 
        }
        res.json({ eventoUpdate }); 
    }   
}


module.exports = new eventoController();
