// const mergeSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   } else {
//     const mid = Math.floor(arr.length / 2);
//     const leftArr = arr.slice(0, mid);
//     const rightArr = arr.slice(mid);
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
//   }
// };

// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   let left = 0;
//   let right = 0;

//   while (left < leftArr.length && right < rightArr.length) {
//     if (leftArr[left] <= rightArr[right]) {
//       sortedArr.push(leftArr[left]);
//     } else {
//       sortedArr.push(rightArr[right]);
//     }
//   }

//   return [...sortedArr, ...leftArr, ...rightArr];
// }

// const mergeSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   } else {
//     const mid = Math.floor(arr.length / 2);
//     const leftArr = arr.slice(0, mid);
//     const rightArr = arr.slice(mid);
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
//   }
// };

// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   let left = 0;
//   let right = 0;

//   while (left < leftArr.length && right < rightArr.length) {
//     if (leftArr[left] <= rightArr[right]) {
//       sortedArr.push(leftArr[left]);
//       left++;
//     } else {
//       sortedArr.push(rightArr[right]);
//       right++;
//     }
//   }

//   // Append remaining elements from either subarray
//   return sortedArr.concat(leftArr.slice(left)).concat(rightArr.slice(right));
// }

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  const merge = (leftArr, rightArr) => {
    const sortedArr = [];
    let left = 0;
    let right = 0;

    while (left < leftArr.length && right < rightArr.length) {
      if (leftArr[left] <= rightArr[right]) {
        sortedArr.push(leftArr[left]);
        left++;
      } else {
        sortedArr.push(rightArr[right]);
        right++;
      }
    }

    return sortedArr.concat(leftArr.slice(left)).concat(rightArr.slice(right));
  };

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort([3, 1, 66, 22, -1, -4, -122]));
