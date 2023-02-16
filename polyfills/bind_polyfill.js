//BIND POLYFILL

const obj = {
  name: 'Vil',
};

function logger() {
  console.log(this.name);
}

Function.prototype.bind = null;

Function.prototype.bind = function (context) {
  const fn = this;
  return function () {
    fn.call(context);
  };
};

logger.bind(obj)();
