//Metodo sin recursividad
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    // 1. Encontrar los valores mínimo y máximo en el arreglo
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    // 2. Calcular el número de buckets
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);

    // Inicializar los buckets
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // 3. Distribuir los elementos en los buckets
    for (let i = 0; i < arr.length; i++) {
        let bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    // 4. Ordenar cada bucket individualmente (aquí uso el método sort nativo)
    arr.length = 0;
    for (let i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => a - b); // Usamos JavaScript's sort nativo
        arr.push(...buckets[i]);
    }

    return arr;
}

//metodo con recursividad
function bucketSortRecursive(arr, bucketSize = 5) {
    if (arr.length <= 1) {
        return arr; // Caso base: Si el arreglo tiene 0 o 1 elementos, ya está ordenado.
    }

    // 1. Encontrar los valores mínimo y máximo en el arreglo
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    // 2. Calcular el número de buckets
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);

    // Inicializar los buckets
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // 3. Distribuir los elementos en los buckets
    for (let i = 0; i < arr.length; i++) {
        let bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    // 4. Ordenar cada bucket recursivamente y fusionar el resultado
    arr.length = 0;
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i].length > 0) {
            let sortedBucket = bucketSortRecursive(buckets[i], bucketSize); // Llamada recursiva para ordenar cada bucket
            arr.push(...sortedBucket);
        }
    }

    return arr;
}