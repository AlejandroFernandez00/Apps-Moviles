
class Persona
{
    nombre;
    edad;

    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

}

class Estudiante extends Persona
{

    profesor;
    
    constructor(nombre, edad, profesor)
    {
        super(nombre, edad);
        this.profesor = profesor;
    }
    estudiando()
    { 
        return "Estudiando con el profesor " + this.profesor;
    }

    setProfesor(profesor)
    {
        this.profesor = profesor;
    }
}


let estudiante = new Estudiante("Alejandro",19,"Christian Dario Nievas");
console.log(estudiante.estudiando());

estudiante.setProfesor("Christian Dario Nievas");