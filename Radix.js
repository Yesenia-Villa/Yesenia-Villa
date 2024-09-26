//metodo sin recursividad
function getMax(arr) {
    return Math.max(...arr); // Encuentra el número máximo para determinar el número de dígitos
}

function countingSort(arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0); // El arreglo de salida que se va a ordenar
    let count = new Array(10).fill(0); // Cuenta los dígitos del 0 al 9

    // Almacena el conteo de ocurrencias de dígitos
    for (let i = 0; i < n; i++) {
        let digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    // Cambia count[i] para que contenga la posición real de este dígito en output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Construye el arreglo de salida
    for (let i = n - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copia el arreglo de salida a arr[], para que arr[] ahora contenga los números ordenados según el dígito actual
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    let max = getMax(arr);

    // Aplica countingSort para cada dígito. La variable exp es 10^i donde i es el dígito actual.
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr;
}

//metodo con recursividad
function getMax(arr) {
    return Math.max(...arr);
}

function countingSort(arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        let digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSortRecursive(arr, exp = 1) {
    let max = getMax(arr);

    // Caso base: si exp es mayor que el dígito más significativo
    if (Math.floor(max / exp) === 0) {
        return arr;
    }

    // Aplicar Counting Sort al dígito actual (exp)
    countingSort(arr, exp);

    // Llamada recursiva para el siguiente dígito (decenas, centenas, etc.)
    return radixSortRecursive(arr, exp * 10);
}