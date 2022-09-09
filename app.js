//desestructuracion: const { crearArchivo } = require('../03_bases_node/Helpers/Multiplicar')
//const { argv } = require('process');
const { crearArchivo } = require('../03_bases_node/Helpers/Multiplicar')
const argv = require('../03_bases_node/config/yargs')
require('colors');

console.clear();
/*
const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] =arg3.split('=');
*/
//const base = 7;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow,"Creado"))
    .catch(err=>console.log(err));

//console.log( process.argv );
//console.log( argv );
//console.log('base: yargs', argv.base );
