
type Numero = number;


function detectarOrden(arreglo: Numero[]): string {
    let asc = true;
    let desc = true;

    for (let i = 0; i < arreglo.length - 1; i++) {
        if (arreglo[i] > arreglo[i + 1]) {
            asc = false;
        }
        if (arreglo[i] < arreglo[i + 1]) {
            desc = false;
        }
    }

   if(asc){
    return "Ascendente";
   }else if(desc){
    return "Descendente";
   }else{       
    return "Desordenado";
}
}


function esAritmetica(arreglo: Numero[]): boolean {
    if (arreglo.length < 2) return false;
    const diferencia = arreglo[1] - arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] - arreglo[i - 1] !== diferencia) {
            return false;
        }
    }
    return true;
}


function esGeometrica(arreglo: Numero[]): boolean {
    if (arreglo.length < 2) return false;

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i - 1] === 0) return false; 
        if (arreglo[i] / arreglo[i - 1] !== arreglo[1] / arreglo[0]) {
            return false;
        }
    }
    return true;
}


const numeros: Numero[] = [1, 2, 3, 4, 5 ];
console.log(numeros);

console.log("Orden es", detectarOrden(numeros));

if (esAritmetica(numeros)) {
    console.log("El arreglo es una progresión aritmética.");
} else if (esGeometrica(numeros)) {
    console.log("El arreglo es una progresión geométrica.");
} else {
    console.log("El arreglo no es una progresión aritmética ni geométrica.");
}
