const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const setTimerText = (key) => {
  process.stdout.write(`setting timer for ${key} seconds...`)
}

const setTimer = (alarm) => {
  setTimeout(() => {
    process.stdout.write('.   ');
  }, alarm * 1000);
};

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!`)
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('.   ');
  }
  if (key >= '1' || key <= '9') {
    setTimerText(key)
    setTimer(key)
  }
});
