// // Задание 1
// const spainCapital = 'Valencia';
// let isCorrectAnswer;

// Конструкция if..else
// if (spainCapital === 'Madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'MADRID') {
//     isCorrectAnswer = true;
// } else {
//     isCorrectAnswer = false;
// }

// Добавьте код здесь, переписав конструкцию выше на switch




// Задание 2
// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// Добавьте код здесь, переписав конструкцию выше на тернарный оператор

// const htmlDiv = {
//     className: 'column',
//     rel: 'main',
//     id: 'block',
// };
// console.log('rel' in htmlDiv);
// // console.log(htmlDiv);
// for (let allst in htmlDiv) {
//     console.log(allst, htmlDiv[allst]);
// }

// const numbers = [1, 2, 3, 4, 5];
// for (let number of numbers) {
//     console.log(number);
// }

const person = {
    name: 'Anna',
    surname: 'Dance',
    age: 18,
    greeting() {
        console.log('Hello');
    },
    changeSurname() {
       this.surname = 'Anal'
       console.log(this); 
    }
};
person.changeSurname();
person.greeting();
