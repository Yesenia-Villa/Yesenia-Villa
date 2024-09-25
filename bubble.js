// Metodo no recursivo ( Blubble sort iterativo)


function bubble_sort(arr){
    let n = arr.length;
    for (let i = 0; i< n; i++){
        for (let j = 0; j< n-i-1; j++){
            if (arr[j]> arr[j+1]){
               //intercambia los elementos
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr [j+1]=temp;
            }
        }
    }

    return arr;
}


//metodo con recursividad
function BubbleSortRecursive(arr, n= arr.length){
    if(n ==1){
        return arr;
    }

    for (let j=0; j<n-1; j++){
        if (arr[j] > arr[j + 1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1]= temp;
        }
    }
    return BubbleSortRecursive(arr, n - 1);
    }