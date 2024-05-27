const path= require('path');
const clienteModel = require('../models/clienteModels');
let id = 0;
let listcliente = [];

class ClienteController{
    home(req, res){
        res.sendFile(path.join(__dirname, '../publics/html/cliente', 'homepageCliente.html'));
    }
    formCadastro(req, res){
        res.sendFile(path.join(__dirname, '../publics/html/cliente', 'clienteForm.html'));
    }
    cadastro(req,res){
        
        const{nome, telefone, email }=req.body;
        id++;
        let cliente = new clienteModel(nome, telefone, email );
        listcliente.push(cliente);
        res.send("Cliente cadastrado com sucesso!")
    }    
    listarcliente(req, res){
        res.json(listcliente);
    }
}

module.exports = new ClienteController();