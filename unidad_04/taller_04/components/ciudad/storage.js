const model = require('./model');

async function insertar_ciudad(dato) {
    const resultado = new model(dato);
    return resultado.save();
}

async function obtener_ciudad(dato) {
    let mi_filtro = {};

    if (dato.nombre != null) {
        mi_filtro = { nombre: dato.nombre };
    }

    const data = await model.find(mi_filtro)
        .populate('pais')
        .exec();

    let ciudades = [];
    for (let objeto of data) {
        let ciudad = {
            ciudad_id: objeto._id,
            ciudad_nombre: objeto.nombre,
            pais_nombre: objeto.pais.nombre
        };
        ciudades.push(ciudad);
    }
    return ciudades;
}

async function actualizar_ciudad(id, dato) {
    const resultado = await model.findByIdAndUpdate(id, dato, { new: true });
    return resultado;
}

async function eliminar_ciudad(id) {
    const resultado = await model.findByIdAndDelete(id);
    return resultado;
}

module.exports = {
    insertar: insertar_ciudad,
    obtener: obtener_ciudad,
    actualizar: actualizar_ciudad,
    eliminar: eliminar_ciudad
}
