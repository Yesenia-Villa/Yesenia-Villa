//Metodo sin recursividad
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Encuentra el índice del elemento mínimo
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Intercambia el elemento actual con el mínimo encontrado
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

//Metodo con recursividad
function selectionSortRecursive(arr, start = 0) {
    let n = arr.length;

    // Caso base: Si hemos llegado al final del arreglo, ya está ordenado
    if (start >= n - 1) {
        return arr;
    }

    // Encuentra el índice del elemento mínimo en la parte no ordenada
    let minIndex = start;
    for (let i = start + 1; i < n; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    // Intercambia el elemento actual con el mínimo encontrado
    if (minIndex !== start) {
        let temp = arr[start];
        arr[start] = arr[minIndex];
        arr[minIndex] = temp;
    }

    // Llama recursivamente para el siguiente elemento no ordenado
    return selectionSortRecursive(arr, start + 1);
}