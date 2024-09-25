//1 Ordenamiento Burbuja(Bubble Sort)
function BubbleSort(arr){
    let n = arr.length;
    for (let i = 0; i<n; i++){
        for (let j =0; j< n - i-1; j++){
            if (arr[j]>arr[j + 1]){
//intercambia los elementos
let temp = arr[j];
arr[j] = arr[j+ 1];
arr[j + 1] =temp;
            }
        }
    }

    return arr;
}

//2 Ordenamiento por seleccion
function selectionSort(arr){
    let n=arr.length;
    for(let i =0; i<n; i++){
        let minIndex = i;
        for (let j=i+1; j<n; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;            }
        }
    }
    if (minIndex !== i){
        //Intercambia los elementos
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}


// 3 Ordenamiento por insercion
function insertionSort(arr){
    let n= arr.length;
    for (let i=1; i<n; i++){
        let key = arr[i];
        let j=i-1;
        while (j>= 0 && arr[j]> key ){
            arr [j + 1] = arr[j];
            j--;
        }
arr[j + 1]= key;
    }
    return arr;
}

//4 Ordenamiento rapido (Quick Sort)
function QuickSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i< arr.length -1; i++){
        if (arr[i]<pivot){
            left.push(arr[i]);
            }else{
                right.push(arr[i]);
        }
    } 
    return[...QuickSort(left),pivot, ...QuickSort(right)];
}

//5 Ordenamiento por mezcla (Merge Sort)
function MergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length /2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return MergeSort(MergeSort(left), MergeSort(right));

}

function Merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
            }else{
                result.push(right[rightIndex]);
                rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

//6 Ordenamiento incorporado (JavaScript (sort))
let arr =[5,2,9,1,5,6];

//Ordenamiento numerico
arr.sort((a,b) => a-b);