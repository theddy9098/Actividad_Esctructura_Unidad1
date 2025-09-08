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
estudiante1.mostrainfo()