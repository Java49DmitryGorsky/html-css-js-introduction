let today = new Date();
let curYear = today.getFullYear();
createRandomEmployees(5, 3, 7000, 25000, 1964, 2000);
function createEmployee(id, name, birthYear, salary) {
    return { id, name, birthYear, salary };
}
function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear) {

    let arrNames = ['name'];
    let minYear = minBirthYear;
    let maxYear = maxBirthYear;
    let newArr = [];
    let birthYearForAverage = 0;
    if (idDigits = 3) {
        id_min = 100; id_max = 999;
    }
    for (i = 1; i <= nEmployees; i++) {
        let id = randomIntFromInterval(id_min, id_max);
        let name = randomArrayNames(arrNames);
        let idName = name + id;
        let salaryOut = randomIntFromInterval(minSalary, maxSalary);
        birthYear = randomIntFromInterval(minYear, maxYear);
        birthYearForAverage += (curYear - birthYear);
        console.log(createEmployee(id, idName, birthYear, salaryOut));
        newArr.push(createEmployee(id, idName, birthYear, salaryOut));
    }
    let averageAge = birthYearForAverage / nEmployees;
    console.log("Average age :" + averageAge);
    console.log(newArr);
    console.log("Average age All :" + getAverageAge(newArr));
    console.log(getEmployeesBySalary(newArr));
    increaseSalary(newArr, 9000, 10);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomArrayNames(array) {
    return array[Math.floor(Math.random() * array.length)] + "";
}
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + (curYear - user.birthYear), 0) / users.length;
}
function getEmployeesBySalary(array) {
    return array.sort(function (salaryFrom, salaryTo) { return salaryFrom.salary - salaryTo.salary });
}

function increaseSalary(array, borderSalary, percent) {
    let minSalary = array.filter(function (min) {
        return min.salary < borderSalary;
    }).map(function (min) {
        return min.salary + (min.salary * percent / 100);
    });
    console.log(minSalary);

}
