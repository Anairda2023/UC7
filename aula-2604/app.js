const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

let dadosOrcamento = [];

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extend:false}));

app.get('/cadastro', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/html/cadastro.html'));
});


app.post('/cadastro', (req,res)=>{
    const{nome, telefone,  descricao}=req.body;

    dadosOrcamento.push({nome,telefone, descricao});
    res.send('Enviado com sucesso');
    console.table(dadosOrcamento);

});

app.get('/orcamento', (req, res)=>{
    res.json({orcamento:dadosOrcamento})
})   ; 

app.get('/', (req, res)=>{
    res.send('Consultoria de Serviços de Informática ');
});



app.listen(port, ()=>{
    console.log(`Aplicação ativa em http://localhost:${port}`);
});

