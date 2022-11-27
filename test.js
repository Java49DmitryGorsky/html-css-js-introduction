const correctAnswer = 'JavaScript';
console.log(correctAnswer.toLowerCase());
const userAnswer = ' javaScript! ';
console.log(userAnswer.toLowerCase());
const isCorrect = userAnswer.includes('correctAnswer');
console.log(isCorrect);

// 1
const fruits = ['apple', 'banana', 'melon', 'orange'];
const hasOrange = fruits.includes('orange');
console.log(hasOrange);
// TODO: сохранить булевое значение соответствующее наличию 'orange' в массиве fruits

// 2
const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia'];
const favoriteCars = cars.slice(0,3);
console.log(favoriteCars);
const otherCars = cars.slice(cars.length - 3,cars.length);
console.log(otherCars);
//TODO: сохраните в эту переменную первые три значения из массива cars
//
// // 3
// const otherCars // TODO: сохраните в эту константу три последних значения из массива cars