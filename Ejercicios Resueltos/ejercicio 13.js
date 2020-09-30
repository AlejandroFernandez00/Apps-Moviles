class Persona
{
    nombre;
    edad;

    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse()
    {
        console.log("Hola, mi nombre es "+nombre+" y tengo " + edad +  " años.")
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

class Profesor extends Persona
{
    estudiantes;

    constructor(nombre, edad)
    {
        super(nombre,edad);
        this.estudiantes = []
    }

    setEstudiantes(estudiantes)
    {
        this.estudiantes = estudiantes;
    }

    addEstudiante(estudiante)
    {
        this.estudiantes.push(estudiante);
        this.estudiantes[this.estudiantes.length - 1].setProfesor(this);
    }
    enseñando()
    {
        console.log("Los alumnos son: ");
        this.estudiantes.forEach(element => {
            console.log(element.nombre);
        });
    }
}
var estudiante1 = new Estudiante("Estudiante1", 19);
var estudiante2 = new Estudiante("Estudiante2", 20);

var profesor = new Profesor("Profesor1", 35);

profesor.addEstudiante(estudiante1);
profesor.addEstudiante(estudiante2);

profesor.enseñando();
estudiante1.estudiando();
