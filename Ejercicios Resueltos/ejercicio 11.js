class Persona
{
    nombre
    edad

    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad   = edad;
    }

    presentarse(){
        return "El nombre de la persona es " + this.nombre + " y tiene " + this.edad + " años";
    }
}

let persona = new Persona("Alejandro",19);

console.log(persona.presentarse())
