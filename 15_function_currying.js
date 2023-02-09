function sum(a) {
  let currentResult = a;

  let calculate = function (b) {
    currentResult += b;
    return calculate;
  };

  calculate.showResult = () => {
    return currentResult;
  };

  return calculate;
}

console.log(sum(5)(9)(-4)(1).showResult());
