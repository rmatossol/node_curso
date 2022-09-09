const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: "Genera la tabla de multiplicar"
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: "Lista la tabla de multiplicar"
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                describe: "Limite de la tabla de multiplicar"
            })
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw 'La base debe ser un numero'
                }
                return true;
            })
            .argv;

module.exports=argv;