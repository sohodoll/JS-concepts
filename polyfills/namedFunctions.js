function three() {
  return 3;
}

function minus(value) {
  return -value;
}

function seven(value) {
  return value + 7;
}

function plus(value) {
  return value;
}

function five(value) {
  return value + 5;
}

console.log(five(plus(seven(minus(three())))));
