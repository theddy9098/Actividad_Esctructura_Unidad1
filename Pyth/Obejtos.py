class Estudiantes:
    def __init__(self, nombre, edad, promedio ):
        self.nombre = nombre
        self.edad = edad
        self.promedio = promedio

             
    def mostrarInfo(self):
        print(f"Nombre: {self.nombre}, Edad: {self.edad}, Promedio: {self.promedio}")

    def promedio_Nuevo(self, nuevo_promedio):
        self.promedio = nuevo_promedio
        
           

Estudiantes_lista = [Estudiantes ("Ana", 20, 8.5),
Estudiantes ("Luis", 22, 9.0),
Estudiantes ("Marta", 19, 7.5),
 Estudiantes ("Jorge", 21, 8.0)]

for i in Estudiantes_lista:
    i.mostrarInfo() 

print("Actualizando Promedio")
Estudiantes_lista[1].promedio_Nuevo(4.5)
Estudiantes_lista[1].mostrarInfo()
        