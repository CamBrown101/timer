const setTimer = (alarm) => {
  setTimeout(() => {
    process.stdout.write('.   ');
  }, alarm * 1000);
}

const timer = () => {
  let alarms = process.argv.slice(2);
  for (let number of alarms) {
    if (number > 0 && number !== NaN) {
      setTimer(number)
    }
  }

}
timer();
