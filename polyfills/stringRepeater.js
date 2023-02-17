String.prototype.repeating = function (n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += `${this} `;
  }
  return result;
};

console.log('hello world'.repeating(3));
