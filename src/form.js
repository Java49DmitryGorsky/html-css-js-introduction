const inputElements = document.querySelectorAll(".form-class [name]");
const errorElem = document.querySelector(".error");
const curYear = new Date().getFullYear();
let timerId = -1;

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
}
function onChange(event) {
    if (event.target.name == "salary") {
        const salary = +event.target.value;
        if (salary < 1000 || salary > 40000) {
            errorMission(event, `salary should be between 5000...50000`);
        }
    }

    if (event.target.name == "birthDate") {
        const arrDate = (event.target.value).split('-');
        const needYear = +arrDate[0];
        if (needYear < 1950 || needYear > curYear) {
            errorMission(event, `year should be between 1950...${curYear}`);
        }
    }
}

function errorMission(event, messages) {
    event.target.value = '';
    errorElem.innerHTML = 'Error: ' + messages;
    timerId = setTimeout(() => {
        errorElem.innerHTML = '';
    }, 5000);
}

