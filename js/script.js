console.log('hello world!');

const personData = {
    name: 'Derrek',
    age: 1600,
    isWarrior: true,
    isWizard: false,
    isHunter: true
};

console.log(`The persons name is ${personData.name}, human age: ${personData['age']} years old.`);
if (personData.isWarrior) {
    console.log(`${personData.name} is a Warrior`);
} else {
    console.log(`${personData.name} is NOT a Warrior`);
}
if (personData.isWizard) {
    console.log(`${personData.name} is a Wizard`);
} else {
    console.log(`${personData.name} is NOT a Waizard`);
}
if (personData.isHunter) {
    console.log(`${personData.name} is a Hunter`);
} else {
    console.log(`${personData.name} is NOT a Hunter`);
}

personData.health = 100;  // чтобы добавить новое свойство в объект, делаем это по его названию и через точку

// const isReady = confirm(`Are you ready to playing for ${personData.name}?`); // результат нашего выбора записывается в isReady
// console.log(isReady);

// const answer = prompt('How old are you?', '18'); // вторые кавычи не обязательны, но мы можем записать в них значение, которое быдет выводиться в строке дефолтно. Ответ пользователя всегда строка (важно)
// console.log(`${answer} typeOf: ${typeof(answer)}`);

// // чтобы введенное пользователем числовое значение записалось в переменную как число, нужно написать +prompt (динамическая типизация)
// const answer2 = +prompt('Huw much money you spent on this game?', '100'); // вторые кавычи не обязательны, но мы можем записать в них значение, которое быдет выводиться в строке дефолтно. Ответ пользователя всегда строка (важно)
// console.log(`${answer2} typeOf: ${typeof(answer2)}`);

const userAnswers = []; // создаем пустой массив для записи туда ответов пользователя
userAnswers[0] = confirm(`Are you ready to playing for ${personData.name}?`);
userAnswers[1] = prompt('How old are you?', '18');
userAnswers[2] = +prompt('Huw much money you spent on this game?', '100');

console.log(userAnswers);
document.write(userAnswers); // вывод на страницу браузера - старый формат JS

