const myName = 'Ira';
// myName = 5;
document.write(myName + ' ');
console.log(typeof myName);

console.log('Я получила сегодня ' + 5);
console.log('6' + 5);
console.log(5 + '5');
console.log();

console.log(`Я получила сегодня: ${5}`);

console.log(myName == 'ira');
console.log(myName != 'ira');

// alert('закрой меня!');
// const age = prompt('wats up?', 57);
// console.log(age);
const  condition = confirm('Ты сделал уроки?')

const age = prompt('Сколько тебе лет?', 57);
console.log(age);
if (age <= 18) {
	window.location.href = 'http://vasilika.ru/'
} else if (age >= 50){
	document.write('Ты старый!')
} else {
	document.write('Ты взрослый!')
}