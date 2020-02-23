// Crea objeto con opciones
const opts = {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

// Arma el comando
argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea archivo con tablas de multiplicar', opts)
    .help()
    .argv;

// Exportación
module.exports = {
    argv
}