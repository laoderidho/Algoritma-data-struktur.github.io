
function binarySearch(array, target) {
  // Mencari indeks tengah dari array
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);

  // Selama masih ada elemen yang perlu dicari
  while (array[middle] !== target && left <= right) {
    if (target < array[middle]) {
      // Mencari di sebelah kiri
      right = middle - 1;
    } else {
      // Mencari di sebelah kanan
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }

  // Mengecek apakah target ditemukan
  if (array[middle] === target) {
    return middle;
  }
  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(array, 9)); // 2
console.log(binarySearch(array, 11)); // -1



