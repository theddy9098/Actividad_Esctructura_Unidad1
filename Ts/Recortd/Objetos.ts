class Estudiante {
  nombre: string            
    edad: number
    promedio: number
    constructor(nombre: string, edad: number, promedio: number) {
        this.nombre = nombre
        this.edad = edad
        this.promedio = promedio
    }


 mostrainfo(): void {

    console.log("Nombre: " + this.nombre + " Edad: " + this.edad + " Promedio: " + this.promedio)
}


}

const estudiante1 = new Estudiante("Pedro", 25, 4.7)
const estudiante2 = new Estudiante("Maria", 28, 4.9)
const estudiante3 = new Estudiante("Luis", 22, 4.3)
const estudiante4 = new Estudiante("Ana", 27, 4.8)


const arregloEstudiantes: Estudiante[] = [estudiante1, estudiante2, estudiante3, estudiante4]

for (let i of arregloEstudiantes) {
    i.mostrainfo()
}