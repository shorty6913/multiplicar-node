// 
//  Requires 
const fs = require('fs');
const colors = require('colors');

// const fs = require('express');
// const fs = require('./fs');

// Función Listar tabla
let listarTabla = (base, limite = 10) => {

    console.log('======================================'.green);
    console.log(`==== tabla de ${ base } ==============`.red);
    console.log('======================================'.green);

    // calcula tabla 
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}


// Función retorna una promesa
let crearArchivo = (base, limite = 10) => {

    // promesa
    return new Promise((resolve, reject) => {

        // Valida el parámetro
        if (!Number(base)) {
            reject(`El valor introducido "${ base }" no es un número `);
            return;
        }

        let data = '';
        let nomArchivo = `tablas/tabla-${ base }-${ limite }.txt`;

        // calcula tabla 
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        // Graba archivo        fs.write Funciona con CALLBACK
        fs.writeFile(nomArchivo, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(nomArchivo);
        });


    });

}

// Variables de entorno por defecto
// console.log(module);
//console.log(process);

// Exporta la función
module.exports = {
    // Se crea un objeto
    crearArchivo,
    listarTabla

}