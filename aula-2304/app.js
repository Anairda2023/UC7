const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello beautiful World!')
})
app.get('/contato', (req,res) =>{
    res.send('contato dos alunos');
})
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})