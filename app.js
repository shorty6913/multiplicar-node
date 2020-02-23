// Tabla de multiplicar
//

// Arma el comando
const argv = require('./config/yargs').argv;

// Destructuración cuando lleva llaves
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.rainbow))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

// Listar comnados independientes
// console.log(argv);

//let base = 7;

// console.log(process.argv);
// Parametros desde la Terminal --> node app --base=6
// let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limite', argv.limite);


//let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];