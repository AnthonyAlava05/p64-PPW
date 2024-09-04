const storage = require('./storage')

function insertar_ciudad(dato) {
    return new Promise((resolve, reject) => {
        if (!dato.nombre) {
            reject('Los datos se encuentran incompletos.');
        } else {
            resolve(storage.insertar(dato));
        }
    });
}

function obtener_ciudad(dato) {
    return new Promise((resolve, reject) => {
        if (!dato) {
            reject('No existen datos');
        } else {
            resolve(storage.obtener(dato));
        }
    });
}

function actualizar_ciudad(id, dato) {
    return new Promise((resolve, reject) => {
        if (!id || !dato) {
            reject('Los datos se encuentran incompletos.');
        } else {
            resolve(storage.actualizar(id, dato));
        }
    });
}

function eliminar_ciudad(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('ID no proporcionado.');
        } else {
            resolve(storage.eliminar(id));
        }
    });
}
console.log('Hola')
module.exports = {
    insertar_ciudad,
    obtener_ciudad,
    actualizar_ciudad,
    eliminar_ciudad
}
