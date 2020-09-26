let numeros = [7,9,25,42];
let cuantosCumplen = numero => numero % 2 == 0;

let cumplen = 0;

numeros.forEach( numero => 
    {
    if(cuantosCumplen(numero)){
        return cumplen++;
    }
} );

console.log(cumplen);
