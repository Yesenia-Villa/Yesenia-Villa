//Metodo con recursividad

function mergeSortRecursive(arr) {
    if (arr.length <= 1) {
        return arr; // Caso base: un arreglo de longitud 1 o 0 ya está ordenado.
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle); // Subarreglo izquierdo
    let right = arr.slice(middle);   // Subarreglo derecho

    // Llamada recursiva para ordenar las dos mitades
    return merge(mergeSortRecursive(left), mergeSortRecursive(right));
}

// Función auxiliar para fusionar dos subarreglos ordenados
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Añadir los elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}

//Metodo sin recursividad
function mergeSortIterative(arr) {
    if (arr.length <= 1) return arr;

    let width = 1; // Tamaño inicial del subarreglo
    let n = arr.length;

    // Bucle principal que aumenta el tamaño de los subarreglos en cada paso
    while (width < n) {
        for (let i = 0; i < n; i += 2 * width) {
            let left = arr.slice(i, i + width);       // Subarreglo izquierdo
            let right = arr.slice(i + width, i + 2 * width); // Subarreglo derecho
            let merged = merge(left, right); // Fusionar las dos mitades
            for (let j = 0; j < merged.length; j++) {
                arr[i + j] = merged[j]; // Sobrescribir el arreglo original con el subarreglo fusionado
            }
        }
        width *= 2; // Doblar el tamaño de los subarreglos
    }

    return arr;
}

// Función auxiliar para fusionar dos subarreglos ordenados
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Añadir los elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}

