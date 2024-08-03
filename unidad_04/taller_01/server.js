const express = require('express')

var app = express()

app.use('/',function(req, res){
    res.send('Hola mundo')
})


let puerto = 3000
app.listen(3000)

console.log(`La aplicación se encuentra funcionando en http://localhost:${puerto}/`)
