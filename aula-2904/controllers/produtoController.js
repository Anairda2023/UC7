const path= require('path');
const produtoModel = require('../models/produtoModels');
let id = 0;
let listproduto = [];

class ProdutoController{
    home(req, res){
        res.sendFile(path.join(__dirname, '../publics/html/produto', 'homepageProduto.html'));
    }
    formCadastro(req, res){
        res.sendFile(path.join(__dirname, '../publics/html/produto', 'produtoForm.html'));
    }
    cadastro(req, res){
        const{nome, preco}=req.body;
        id++;
        let produto = new produtoModel(id, nome, preco);
        listproduto.push(produto);
        res.send("Dados gravados com sucesso!")

    }
    listarproduto(req, res){
        res.json(listproduto);
    }
}
module.exports = new ProdutoController();