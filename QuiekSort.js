//metodo con recursividad
function quickSortRecursive(arr) {
    if (arr.length <= 1) {
        return arr; // Caso base: Si el arreglo tiene 1 o 0 elementos, ya está ordenado.
    }

    let pivot = arr[Math.floor(arr.length / 2)]; // Elegir el pivote (en este caso, el del medio)
    let left = [];  // Elementos menores que el pivote
    let right = []; // Elementos mayores que el pivote
    let equal = []; // Elementos iguales al pivote

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }

    // Llamada recursiva para ordenar las sublistas izquierda y derecha
    return [...quickSortRecursive(left), ...equal, ...quickSortRecursive(right)];
}

//metodo sin recursividad
function quickSortIterative(arr) {
    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length > 0) {
        let end = stack.pop();
        let start = stack.pop();

        let pivotIndex = partition(arr, start, end);

        // Si hay elementos a la izquierda del pivote
        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        // Si hay elementos a la derecha del pivote
        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    return arr;
}

// Función auxiliar para particionar el arreglo
function partition(arr, start, end) {
    let pivot = arr[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}