const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esNombreElegante(nombre) {
    return nombre.charAt(0) === 'a' && nombre.charAt(nombre.length - 1) === 'a';
}

rl.question('Por favor ingresa un nombre: ', (nombre) => {
  console.log(esNombreElegante(nombre.toLowerCase())); 
  rl.close();
});