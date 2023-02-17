function stringEditor(symbol, ...rest) {
  let result = symbol;

  rest.forEach((element) => {
    result += `${element}${symbol}`;
  });

  return result;
}

console.log(stringEditor('!', 4, -10, 34, 0));
