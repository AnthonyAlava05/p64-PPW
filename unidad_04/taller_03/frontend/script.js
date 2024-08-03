function realizar_peticion(tipo){
    if(tipo == 'GET'){
        fetch('/mensaje')
        .then()
        .catch((mensaje)=> console.error(`[error]: ${mensaje}`))

    }else if (tipo == 'POST'){
        
    }
}