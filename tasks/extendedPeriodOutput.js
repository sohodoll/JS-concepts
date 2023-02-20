// let timePassed = 0;
// let interval = 0;

// function extendedPeriodOutput(period) {
//   period += period;
//   console.log(period, 'ms');
//   setTimeout(() => {
//     extendedPeriodOutput(period);
//   }, period);
// }

// extendedPeriodOutput(100);

function extendedPeriodOutput(period) {
  console.log(period, 'ms');

  period += 100;

  setTimeout(() => {
    extendedPeriodOutput(period);
  }, period);
}
extendedPeriodOutput(100);
