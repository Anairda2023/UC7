const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hoje é quinta-feira');
});

app.post('/cadastro', (req, res) => {
    const { nome, telefone, idade } = req.body;
    console.log(`Nome=${nome} Telefone = ${telefone} Idade=${idade}`);

    res.send('cadastro');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

