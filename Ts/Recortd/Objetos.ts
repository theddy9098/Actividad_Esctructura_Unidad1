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




const arregloEstudiantes: Estudiante[] = [
 new Estudiante("Pedro", 25, 4.7),
new Estudiante("Maria", 28, 4.9),
new Estudiante("Luis", 22, 4.3),
new Estudiante("Ana", 27, 4.8)
]


console.log("Recorrido del arreglo de estudiantes")
for (let i of arregloEstudiantes) {
    i.mostrainfo()
}