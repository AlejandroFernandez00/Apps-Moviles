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
    }

    setEstudiantes(estudiantes)
    {
        this.estudiantes = estudiantes;
    }

    addEstudiante(estudiante)
    {
        estudiante.setProfesor(this);
        this.estudiantes.push(estudiante);
    }
}