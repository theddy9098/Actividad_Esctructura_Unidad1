class Estudiantes:
    def __init__(self, nombre, edad, promedio ):
        self.nombre = nombre
        self.edad = edad
        self.promedio = promedio

             
    def mostrarInfo(self):
        print(f"Nombre: {self.nombre}, Edad: {self.edad}, Promedio: {self.promedio}")



estudiante1= Estudiantes ("Ana", 20, 8.5)
estudiante1.mostrarInfo()

        