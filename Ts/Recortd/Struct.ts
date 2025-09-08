type estudiante = {
  nombre: string;
  edad: number;
  promedio: number;
};


const persona1: estudiante = {
  nombre: "Juan",
  edad: 30,
  promedio: 4.5,
};

console.log(persona1);
console.log("\n");

class Persona {
  nombre: string    
    edad: number
    promedio: number

    constructor(nombre: string, edad: number, promedio: number) {
        this.nombre = nombre
        this.edad = edad
        this.promedio = promedio
    }
}

let persona2 = new Persona("Pedro", 25, 4.7)
const persona3 = new Persona("Maria", 28, 4.9)
const persona4 = new Persona("Luis", 22, 4.3)
const persona5 = new Persona("Ana", 27, 4.8)

const estudiantes: Persona[] = [persona2, persona3, persona4, persona5]
console.log("Recorrido del arreglo")

for (let i of estudiantes) {
   console.log("Nombre:  " + i.nombre + "   Edad:  " + i.edad + "   Promedio:  " + i.promedio)
}

// Cambiar el promedio del segundo estudiante
estudiantes[1].promedio = 5.0;
console.log(estudiantes[1]);
