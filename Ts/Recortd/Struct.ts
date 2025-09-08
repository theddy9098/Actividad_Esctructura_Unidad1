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

console.log(persona2)
console.log(persona3)