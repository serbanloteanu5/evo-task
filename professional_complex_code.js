/* professional_complex_code.js */

// This code implements a custom sorting algorithm called QuickSort.
// QuickSort is a divide-and-conquer algorithm that sorts an array by selecting
// a pivot element and partitioning the other elements into two sub-arrays,
// according to whether they are less than or greater than the pivot.
// This process is carried out recursively until the sub-arrays are sorted.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Example usage:

const numbers = [9, 4, 2, 7, 5, 1, 8, 3, 6];
console.log("Original Array:", numbers);
console.log("Sorted Array:", quickSort(numbers));

// Output:
// Original Array: [9, 4, 2, 7, 5, 1, 8, 3, 6]
// Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]