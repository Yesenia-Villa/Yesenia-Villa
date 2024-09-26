//metodo Heapsort sin recursividad
// Función para reorganizar el heap (max-heapify)
function heapify(arr, n, i) {
    let largest = i; // Inicializa el mayor como la raíz
    let left = 2 * i + 1; // Hijo izquierdo
    let right = 2 * i + 2; // Hijo derecho

    // Si el hijo izquierdo es mayor que la raíz
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Si el hijo derecho es mayor que el mayor actual
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // Si el mayor no es la raíz
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Intercambia

        // Heapify de forma iterativa
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    // Construir el heap (reordenar el arreglo)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extraer los elementos del heap uno por uno
    for (let i = n - 1; i >= 0; i--) {
        // Mover la raíz actual al final
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Llamar a heapify en el heap reducido
        heapify(arr, i, 0);
    }

    return arr;
}


//metodo con recursividad
function heapifyRecursive(arr, n, i) {
    let largest = i; // Inicializa el mayor como la raíz
    let left = 2 * i + 1; // Hijo izquierdo
    let right = 2 * i + 2; // Hijo derecho

    // Si el hijo izquierdo es mayor que la raíz
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Si el hijo derecho es mayor que el mayor actual
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // Si el mayor no es la raíz
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Intercambia

        // Llamada recursiva para hacer heapify
        heapifyRecursive(arr, n, largest);
    }
}

function heapSortRecursive(arr) {
    let n = arr.length;

    // Construir el heap (reordenar el arreglo)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyRecursive(arr, n, i);
    }

    // Extraer los elementos del heap uno por uno
    for (let i = n - 1; i >= 0; i--) {
        // Mover la raíz actual al final
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Llamar a heapify de forma recursiva en el heap reducido
        heapifyRecursive(arr, i, 0);
    }

    return arr;
}
