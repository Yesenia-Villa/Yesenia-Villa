//Metodo sin recursividad
function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        // Desplaza los elementos que son mayores que el actual
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Coloca el elemento actual en su lugar correcto
        arr[j + 1] = current;
    }

    return arr;
}

//metodo con recursividad
function insertionSortRecursive(arr, n = arr.length) {
    // Caso base: si n es 1 o menor, ya está ordenado
    if (n <= 1) {
        return;
    }

    // Llama recursivamente para ordenar los primeros n-1 elementos
    insertionSortRecursive(arr, n - 1);

    // Inserta el último elemento en su posición correcta
    let last = arr[n - 1];
    let j = n - 2;

    // Desplaza los elementos mayores que el último
    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j--;
    }

    // Coloca el último elemento en su lugar correcto
    arr[j + 1] = last;
}