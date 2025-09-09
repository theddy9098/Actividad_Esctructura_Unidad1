class Estudiantes:
    def __init__(self, nombre, edad, promedio ):
        self.nombre = nombre
        self.edad = edad
        self.promedio = promedio

             
    def mostrarInfo(self):
        print(f"Nombre: {self.nombre}, Edad: {self.edad}, Promedio: {self.promedio}")



estudiante1= Estudiantes ("Ana", 20, 8.5)
estudiante2= Estudiantes ("Luis", 22, 9.0)
estudiante3= Estudiantes ("Marta", 19, 7.5)
estudiante4= Estudiantes ("Jorge", 21, 8.0)

Estudiantes_lista = [estudiante1, estudiante2, estudiante3, estudiante4]

for i in Estudiantes_lista:
    i.mostrarInfo() 
        