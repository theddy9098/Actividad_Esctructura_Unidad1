class Estudiante {
  nombre: string;
  edad: number;
  promedio: number;

  constructor(nombre: string, edad: number, promedio: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.promedio = promedio;
  }

  mostrainfo(): void {
      console.log("Nombre: " + this.nombre + " Edad: " + this.edad + " Promedio: " + this.promedio);
  }

  setpromedio(nuevoPromedio: number): void {
      this.promedio = nuevoPromedio;
  }
}

const arregloEstudiantes: Estudiante[] = [
  new Estudiante("Pedro", 25, 4.7),
  new Estudiante("Maria", 28, 4.9),
  new Estudiante("Luis", 22, 4.3),
  new Estudiante("Ana", 27, 4.8)
];

console.log("Recorrido del arreglo de estudiantes");
for (let i of arregloEstudiantes) {
  i.mostrainfo();
}

console.log("");
arregloEstudiantes[1].setpromedio(4.6); 
arregloEstudiantes[1].mostrainfo();