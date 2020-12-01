const dateNow = new Date();
console.log(dateNow);
const datehms = new Date(2020, 11, 1, 20, 29, 10, 555);
console.log(datehms);

const dateString = Date();
console.log(dateString);

console.log(dateNow.toLocaleTimeString('hu'));

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());

function realTime()