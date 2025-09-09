
Numero = int

# Función para detectar orden
def detectar_orden(arreglo) -> str:
    asc = True
    desc = True

    for i in range(len(arreglo) - 1):
        if arreglo[i] > arreglo[i + 1]:
            asc = False
        if arreglo[i] < arreglo[i + 1]:
            desc = False

    if asc:
        return "Ascendente"
    elif desc:
        return "Descendente"
    else:
        return "Desordenado"

# Función para detectar progresión aritmética
def es_aritmetica(arreglo) -> bool:
    if len(arreglo) < 2:
        return False
    
    diferencia = arreglo[1] - arreglo[0]

    for i in range(1, len(arreglo)):
        if arreglo[i] - arreglo[i - 1] != diferencia:
            return False
    return True

# Función para detectar progresión geométrica
def es_geometrica(arreglo) -> bool:
    if len(arreglo) < 2:
        return False
    
    for i in range(1, len(arreglo)):
        if arreglo[i - 1] == 0:
            return False
        if arreglo[i] / arreglo[i - 1] != arreglo[1] / arreglo[0]:
            return False
    return True



numeros: Numero = [1, 2, 3, 4, 5]


print(numeros)

print("Orden es", detectar_orden(numeros))

if es_aritmetica(numeros):
    print("El arreglo es una progresión aritmética.")
elif es_geometrica(numeros):
    print("El arreglo es una progresión geométrica.")
else:
    print("El arreglo no es una progresión aritmética ni geométrica.")
