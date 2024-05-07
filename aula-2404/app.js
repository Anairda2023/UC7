const express = require('express');

const app =express();

const porta =3000;

const path = require('path');
app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.send('Hoje estou bem, até o momento!');
});
app.get('/teste', (req,res)=> {
    res.redirect('/');

})

app.get('/pagina01', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/pagina01.html"));
});
app.get('/pagina02', (req, res) => {
        res.sendFile(path.join(__dirname, "./public/pagina02.html"));
});
app.get('/pagina03', (req, res) => {
            res.sendFile(path.join(__dirname, "./public/pagina03.html"));
})
app.listen(porta, ()=> {
    console.log(`aplicação rodando em http://localhost:${porta}`);
})
