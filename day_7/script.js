function init() {
	let i = 0;

	while (i <100) {
		console.log(`Элемент цикла ${i}`);
		i++;
	}
	console.log(i)
	for (i=100; i>=0; i--) {
		console.log(`на полке стояло ${i} бутылок рома`);
	}

	const ivanov = {
		surname: 'Иванов',
		name: 'Ваня',
		age: 32,
		showAge() {
			return `Мне ${this.age} лет!`
		},
	}

	const petrov = {
		surname: 'Петров',
		name: 'Петя',
		age: 34,
		showAge() {
			return `Мне ${this.age} лет!`
		},
	}

	const vasechkin = {
		surname: 'Васечкин',
		name: 'Вася',
		age: 26,
		showAge() {
			return `Мне ${this.age} лет!`
		},
	}

	const klukvina = {
		surname: 'Клюквина',
		name: 'Ира',
		age: 30,
		showAge() {
			return `Мне ${this.age} лет!`
		},
	}

	const userList = [ivanov, petrov, vasechkin, klukvina];
	console.log(userList.length);
	for ( i = 0; i < userList.length; i++) {
		console.log(userList[i]);
		console.log(`Фамилия ${userList[i].surname}`);
		console.log(userList[i].showAge());
	}
	console.log(1, document.getElementsByTagName('div') );
const numb = parseFloat(prompt('Загадай любую цифру'));
console.log('результат', focus(numb));
console.log(numb);
}

init();

function focus(N) {
	if (N <= 5) {
	return (N + N)
} else {
	return (N * N)
}
}

window.onload = function() {
	console.log(2, document.getElementsByTagName('div') );
	console.log(document.querySelector('.element').innerText );
	document.querySelector('.element').innerText = 'Я обниму тебя!';
}



// let user = {
// 	name: "Ира",
// 	isAdmin: true,
// 	writeName() {
// 		alert("Ппривет, " + this.name);
// 	}
// }