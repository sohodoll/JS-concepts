Array.prototype.myReduce = function (fn, initial) {
  let values = this;

  values.forEach((item) => {
    initial = initial !== undefined ? fn(initial, item) : item;
  });

  return initial;
};

let values = [2, 4, 5];

console.log(values.myReduce((a, b) => a * b));

// accumulator is stored in the initial value at next steps after the first one. on the first iteration initial value is assigned to the first element of the array
