let numeros = [1,3,5,7];
let numeroPar = (numero) => numero %2 === 0;
console.log(numeros.some(numeroPar));