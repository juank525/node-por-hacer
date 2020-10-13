const fileSystem = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    let fileName = './db/data.json';
    fileSystem.writeFile(fileName, data, (err) => {
        if (err) {
            throw new Error("Error al crear el fichero");
        }
        console.log('The file has been saved!');
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = (completado) => {
    cargarDB();
    let nuevaLista = listadoPorHacer.filter(tarea => tarea.completado === completado);
    return nuevaLista;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}