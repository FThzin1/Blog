const express = require('express')
const app = express()
const fs = require('fs');
const cors = require('cors');
app.use(cors()); // Isso permite todas as origens. Você pode configurar opções específicas se necessário.
const noticias = require('./noticias.json')

let jsonData = {};

app.get('/getAll', function (req, res) {
    fs.readFile('noticias.json', 'utf8', (err, data) => {
        jsonData = JSON.parse(data)
        res.json(jsonData)
    });
})

app.listen(3000)