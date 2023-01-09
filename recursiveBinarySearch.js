const search = (arr, target) =>{
    return binarySearch(arr, target, 0, arr.length -1)
}

function binarySearch(array, target, left, right) {
  // Mencari indeks tengah dari array
  let middle = Math.floor((left + right) / 2);

  // Base case: target ditemukan atau tidak ada elemen yang perlu dicari
  if (array[middle] === target || left > right) {
    return array[middle] === target ? middle : -1;
  }

  // Rekursif: mencari di sebelah kiri atau kanan tergantung dari nilai target
  if (target < array[middle]) {
    return binarySearch(array, target, left, middle - 1);
  } else {
    return binarySearch(array, target, middle + 1, right);
  }
} 
arr = [1,2,3,4,5,6,7,8,9,10]
arr2 = ['ayam', 'babi', 'cicak', 'harimau', 'itik', 'jerapah', 'kancil', 'lumba lumba', 'rusa']

console.log(search(arr2, 'lumba lumba'))
console.log(search(arr2, 'kancil'))

//algoritma binary search harus di urutkan, hal ini yang menjadi kelemahan binary search