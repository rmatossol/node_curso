const fs = require('fs');
const colors = require('colors');
/*
con promesas
const crearArchivo = ( base = 5)=>{
    return new Promise((resolve,reject)=>{
        let salida="";
        for (let i=1; i <=10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`Hoja${base}.txt`,salida)
        resolve (`Hoja${base}.txt`);
    })
    ;
}
*/

const crearArchivo = async( base, listar=false, hasta )=>{
    try {
        let salida="";
        let consola="";
        for (let i=1; i <= hasta; i++){
            consola += `${base} ${'x'.green} ${i} ${'='.blue} ${base * i}\n`;
            salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
        }
        if ( listar ){
            console.log("=============================".green)
            console.log("======= TABLA DEL: ", colors.blue(base),"=======")
            console.log("=============================".green)
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/Hoja${base}.txt`,salida)
        return `Hoja${base}.txt`;
    
    } catch (err) {
        throw err;    
    }
}



module.exports={
    crearArchivo
}