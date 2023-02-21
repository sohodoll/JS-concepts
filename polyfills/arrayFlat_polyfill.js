// iterativePolyfill = function (array) {
//   const result = [];
//   let currIndex = 0;

//   while (currIndex < array.length) {
//     const item = array[currIndex];

//     if (Array.isArray(item)) {
//       array.splice(currIndex, 1, ...item);
//     } else {
//       result.push(item);
//       currIndex += 1;
//     }
//   }

//   return result;
// };

const iterativePolyfill = (array) => {
  let result = [];
  let currIndex = 0;

  while (currIndex < array.length) {
    const item = array[currIndex];

    if (Array.isArray(item)) {
      array.splice(currIndex, 1, ...item);
    } else {
      result.push(item);
      currIndex += 1;
    }
  }

  return result;
};

// console.log(iterativePolyfill([1, [2, [3, 48, 66], 7], 3, 4, 5]));

const recursivePoly = (array) => {
  let result = [];

  array.forEach((element) => {
    if (!Array.isArray(element)) {
      result.push(element);
    } else {
      let temp = recursivePoly(element);
      result.push(...temp);
    }
  });

  return result;
};

console.log(recursivePoly([1, [2, [3, [48, 66]], 7], 3, 4, 5]));
