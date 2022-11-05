const nineDigits = '012345678';
const minDigit = 0;
const maxDigit = 9;
const char0 = '0'.charCodeAt();

["1234567890", "001200343", "231740705", "339677395", "000000000", "123456782", "341141430"].map(function (e) {
    console.log(e + " is " + (checkTeudatZehut(e) ? "a valid" : "an invalid") + " Israeli ID");
});

function checkTeudatZehut(teudatStrNumber) {
    var teudatStrNumber = String(teudatStrNumber).trim(); https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

    function arraySum(teudatStrNumber) {
        let sum = 0;
        for (let i = 0; i < teudatStrNumber.length; i++) {
            sum += teudatStrNumber;
        }
        return sum;
    }

    if (teudatStrNumber.length > 9 || teudatStrNumber.length < 5 || isNaN(teudatStrNumber) || arraySum(teudatStrNumber) == 0) return false;

    // In case string with zeros up to 9 digits (optional) https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    teudatStrNumber = teudatStrNumber.length < 9 ? ("00000000" + teudatStrNumber).slice(-9) : teudatStrNumber;

    return Array
        .from(teudatStrNumber, Number)  // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        .reduce((counter, digit, i) => {  // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
            const step = digit * ((i % 2) + 1);
            return counter + (step > 9 ? step - 9 : step);
        }) % 10 === 0;
}
// const nineDigits = '012345678';
// const minDigit = 0;
// const maxDigit = 9;
// const char0 = '0'.charCodeAt();

function checkTeudatZehut(tzStr) {
    if (tzStr.length != nineDigits.length || isNaN(+tzStr)) {
        console.log("TZ=", tzStr, 'valid=', false);
        return false;
    }
    let ctrlSum = getControlSum(tzStr);
    let valid = ctrlSum % 10 == 0;
    console.log("TZ=", tzStr, "ctrlSum=", ctrlSum, 'valid=', valid);
    return valid;
}

function getControlSum(tzStr) {
    /*
    let array = Array.from(tzStr).map(function(symbol, ind) {
        let value = symbol.charCodeAt() - char0;
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value*2);
    });
    return array.reduce(function(sum, cur) {
        return sum+cur;
    }, 0);
    */
    return Array.from(tzStr).map(function (symbol, ind) {
        let value = symbol.charCodeAt() - char0;
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value * 2);
    }).reduce(function (sum, cur) {
        return sum + cur;
    }, 0);
}

function getOddValue(number) {
    return number < 10 ? number : number % 10 + Math.trunc(number / 10);
}

function getEvenValue(number) {
    return number;
}

function generateTeudatZehut() {
    let array = getGeneratedArray();
    array[8] = updateCtrlDigit(array);
    if (!checkTeudatZehut(integerArray2String(array))) {
        console.log('Generation failed');
    }
}
function getGeneratedArray() {
    return Array.from(nineDigits).map(function (symbol, ind) {
        let value = (ind == 8) ? 0 : getRandomIntegerValue(minDigit, maxDigit + 1);
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value * 2);
    });
}
function integerArray2String(array) {
    return array.reduce(function (str, cur) {
        return str + String.fromCharCode(cur + char0);
    }, "");
}
function updateCtrlDigit(array) {
    let sum = getControlSum(integerArray2String(array));
    let roundedSum = Math.floor(sum / 10) * 10;
    if (roundedSum === sum) {
        return 0;
    }
    return roundedSum + 10 - sum;
}
function getRandomIntegerValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}
// Tests

generateTeudatZehut();



//http://halemo.net/info/idcard/

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]




// commented 04/11/2022

// function fromNumberToString(value, code) {
//     var digit,
//         radix = code.length,
//         result = '';

//     do {
//         digit = value % radix;
//         result = code[digit] + result;
//         value = Math.floor(value / radix);
//     } while (value)

//     return result;
// }
// console.log(fromNumberToString(900550, '0123456789abcdefghijklmnopqrstuvwxyz')); //36
// console.log(fromNumberToString(46016237, '0123456789abcdefghijklmnopqrstuvwxyz')); //36
// console.log(fromNumberToString(46016237, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')); //36

// function fromStringToNumber(value, code) {
//     return [...value].reduce((r, a) => r * code.length + code.indexOf(a), 0);
// }
// console.log(fromStringToNumber('java', '0123456789abcdefghijklmnopqrstuvwxyz')); //36
// console.log(fromStringToNumber('react', '0123456789abcdefghijklmnopqrstuvwxyz')); //36
// // console.log(toString(11483, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')); 
// // console.log(parseInt('java', '0123456789abcdefghijklmnopqrstuvwxyz'));
// // console.log(parseInt('a', 'abcdefghijklmnopqrstuvwxyz0123456789+-'));
// // console.log(toString(142, 'abcdefghijklmnopqrstuvwxyz0123456789+-'));


// // function dec2bin(dec) {
// //     return (dec >>> 0).toString(2);
// //   }
// // console.log(dec2bin(11483)); //2

// function fromDecToBinary(v) {
//     // if (!Number.isSafeInteger(v) || v < 0) {
//     //   throw new Error('v must be a non-negative integer');
//     // }
//     if (v < 0) {
//         return console.log("you entered negative integer");
//     }
//     if (v === 1) {
//         return '1';
//     }
//     if (v === 0) {
//         return '0';
//     }
//     return fromDecToBinary(Math.floor(v / 2)) + (v % 2);
// }
// console.log(fromDecToBinary(11483));

// function changeBase(number, fromBase, toBase) {
//     if (fromBase == 10)
//         return (parseInt(number)).toString(toBase)
//     else if (toBase == 10)
//         return parseInt(number, fromBase);
//     else {
//         var numberInDecimal = parseInt(number, fromBase);
//         return parseInt(numberInDecimal).toString(toBase);
//     }
// }
// console.log(changeBase(10110011011011, 2, 10));

// console.log(changeBase(11483, 10, 2));

// // function sumDigits(number) {
// //     // if (number < 0) {
// //     //     number = -number;
// //     // }
// //     number = Math.abs(number);
// //     let sum = 0;
// //     number = Math.trunc(number); //get read of the fractional part
// //     do {
// //         let digit = number % 10;
// //         number = (number - digit) / 10;
// //         // sum = sum + digit;
// //         sum += digit;
// //     } while(number !=0);
// //     return sum;
// // }
// // let sum = sumDigits(-623.12345);
// // console.log(sum);


// //  let num = -0623;
// //  function sum_of_digit(n)
// //  {
// //      if (n == 0)
// //      return 0;
// //      if (n < 0)
// //      n = -n;
// //      return (n % 10 + sum_of_digit(parseInt(n / 10)));
// //  }

// //  let result = sum_of_digit(num);
// //  console.log( "Sum of digits in "+ num +" is "+result );

// // function sumDigits(n) {
// //     return `${n}`.match(/\d/g).reduce( (sum, digit) => sum + +digit, 0 );
// //   }

// //   console.log( sumDigits( -623 ) );

// // function sum_of_digit(n) {      
// //     let sum = 0;
// //     for( let digit of `${n}` ){ // прямо тут, сразу превращая n в строку
// //       sum += +digit;
// //     }      
// //     return sum;
// //   }

// //   console.log( sum_of_digit(-623) );

// commented 04/11/2022

// ["1234567890", "001200343", "231740705", "339677395", "341141430", "123456782"].map(function (e) {
//     console.log(e + " is " + (isValidIsraeliID(e) ? "a valid" : "an invalid") + " Israeli ID");
// });


// function isValidIsraeliID(id) {
//     var id = String(id).trim();
//     if (id.length > 9 || id.length < 5 || isNaN(id)) return false;

//     // Pad string with zeros up to 9 digits
//     id = id.length < 9 ? ("00000000" + id).slice(-9) : id;

//     return Array
//         .from(id, Number)
//         .reduce((counter, digit, i) => {
//             const step = digit * ((i % 2) + 1);
//             return counter + (step > 9 ? step - 9 : step);
//         }) % 10 === 0;
// }

