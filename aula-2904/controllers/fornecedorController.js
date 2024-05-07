const path= require('path');
const fornecedorModel = require('../models/fornecedorModels');
let id = 0;
let listfornecedor = [];
class FornecedorController{
    home(req, res){
        res.sendFile(path.join(__dirname, '../publics/html/fornecedor', 'homepageFornecedor.html'));
    }
    formCadastro(req, res){
        res.sendFile(path.join(__dirname, '../publics/html/fornecedor', 'fornecedorForm.html'));
    }    
        cadastro(req,res){
        
        const{nome, telefone, email }=req.body;
        id++;
        let fornecedor = new fornecedorModel(nome, telefone, email );
        listfornecedor.push(fornecedor);
        res.send("Fornecedor cadastrado com sucesso!")

       
    }
    listarfornecedor(req, res){
        res.json(listfornecedor);
    }
}
module.exports = new FornecedorController();
