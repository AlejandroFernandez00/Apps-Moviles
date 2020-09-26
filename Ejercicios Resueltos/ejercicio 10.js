function contiene(numero, numerosArray)
{
    let condicion = num => numero === num;
    return numerosArray.some(condicion);
}
let numeros = [7,8,9];
let numero = 8;

console.log(contiene(numero, numeros));
