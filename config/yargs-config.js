const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};


const completado = {
    alias: 'c',
    default: true,
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Permite realizar el borrado de una tarea', { descripcion })
    .command('listar', 'Permite obtener las tareas completadas o no', { completado })
    .help()
    .argv;


module.exports = {
    argv
}