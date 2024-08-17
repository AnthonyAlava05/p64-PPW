const { response } = require("express")
const express = require ("express")
const controller = require('./controller')
const routes = express.Router()


routes.post('/',function(req,res){
    controller.insertar_usuario(req.body)
    .then((data)=>{})
    .catch((error)=>{})
})



routes.get('/',function(req,res){
    controller.obtener_usuario(req.body)
    .then((data)=>{})
    .catch((error)=>{})

})

module.exports=routes