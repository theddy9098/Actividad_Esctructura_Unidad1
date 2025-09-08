from dataclasses import dataclass

@dataclass
class Estudiante:
    nombre: str
    edad: int
    promedio: float


Estu1 = Estudiante("Fabian", 20, 4.5)
Estu2 = Estudiante("Laura", 22, 4.8)
Estu3 = Estudiante("Carlos", 19, 4.0)


estudiantes = [Estu1, Estu2, Estu3]


for i in estudiantes:
    print(f"Nombre: {i.nombre}, Edad: {i.edad}, Promedio: {i.promedio}")
