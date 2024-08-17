const storage = require('./storage')




function insertar_usuario(data){
    return Promise ((resolve,reject)=>{
        resolve(storage.insertar())
    })
    
}

function obtener_usuario(data){
    return Promise ((resolve,reject)=>{
        resolve(storage.insertar())
    })
}


module.exports={
    insertar_usuario,
    obtener_usuario
}