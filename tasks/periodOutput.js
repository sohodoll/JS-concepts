function periodOutput(period) {
  let timePassed = 0;
  const interval = setInterval(() => {
    timePassed = timePassed + period;
    console.log(`${timePassed}ms`);
  }, period);

  setTimeout(() => {
    clearInterval(interval);
  }, 3000);
}

periodOutput(100);
