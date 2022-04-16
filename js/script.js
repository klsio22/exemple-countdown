import Coutdown from './countdown.js';

const tempoParaOWWB = new Coutdown('Sat Apr 16 2022 10:00:00 GMT-0300');

/* console.log(tempoParaOWWB._actualDate)
console.log(tempoParaOWWB._futureDate)
console.log(tempoParaOWWB._timeStampDiff)
console.log(tempoParaOWWB.days)
console.log(tempoParaOWWB.hours)
console.log(tempoParaOWWB.minutes)
console.log(tempoParaOWWB.seconds) */
console.log(tempoParaOWWB.total);
const times = document.querySelectorAll('[data-time]');
console.log(times);

function showTime() {
  times.forEach((time, index) => {
    time.innerHTML = tempoParaOWWB.total[index];
  });
}
showTime();
setInterval(showTime, 1000);
