const express = require('express');
const app = express();
const port = 3000;
const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');
const path = require('path');


app.use(express.static('publics'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/produto', produtoRoutes);
app.use('/cliente', clienteRoutes);
app.use('/fornecedor', fornecedorRoutes);


app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, './publics/html', 'index.html'));
});

app.listen(port, () =>{
    console.log(`aplicação rodando em http://localhost:${port}`);
});

