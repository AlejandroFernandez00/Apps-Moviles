let notas = [[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];

let quienesAprobaron = notas.map(function (notasAlumno)
{
    return notasAlumno.every(nota => nota >= 4);
});
console.log(quienesAprobaron);
