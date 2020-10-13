const argv = require('./config/yargs-config').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.c);
        console.log(colors.green('=========POR HACER ========='));
        for (let tarea of listado) {

            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);

        }
        console.log(colors.green('============================'));
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`SE GRABO: ${actualizado}`);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`SE GRABO: ${borrado}`);
        break;
    default:
        console.log("Comando no reconocido");
}