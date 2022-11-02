// for (let i = 1; i <= 5; i = i + 1) {
//     console.log("i = " + i);
//   }


// console.log("Hello world");
// for( i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i)
//     });
// }
i = 100;
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i) });
// } => 0 1 2

// for (var i = 0; i < 3; i++) {
//      console.log(i) ;
// }
// function sum(op1, op2) {
//     let res = op1 + op2;
//     return res;
// }
// let op1 = 10;
// let op2 = 20;
// let res = sum(op1, op2);
// console.log(res)
/************************************************** */
//HW #11
// function sumDigits(number) {
//     //compute sum of digits for the integer numbers
//    number = Math.abs(number);
//    let sum = 0;
//    number = Math.trunc(number); //get rid of the fractional part
//    do {
//         let digit = number % 10;
//         number = (number - digit) / 10;
//         sum += digit;
//    }while(number != 0);
//   return sum;

// }
// //Example
// let sum = sumDigits(123)
// console.log(sum); //should be printed out 6


/*********************************CW 12 */
// let strNum1 = "123";
// let strNum2 = '9';
// console.log(strNum1 + strNum2); //=> 1239
// console.log(strNum1 - strNum2); //=> 114
// console.log(strNum1 > strNum2);
//conversions from string to number
// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1 + num2); //=> 132
// console.log(num1 - num2); //=> 114
// console.log(num1 > num2); //true
// let strNumStr = '12.3ab';
// let numStr = +strNumStr;
// console.log(numStr);
// let num = parseInt(strNumStr);
// if (isNaN(numStr)) {
//     console.log("numStr is NaN")
// }
// let num10 = 123;
// let strNum10 = "" + num10;
// let strNum16 = num10.toString(36);
// console.log(strNum10, strNum16);

// conversion from Morse code to number
// symbol "." -> 0 ; "-" -> 1

// function  fromMorseToNumber(morseCode) {
//     let result = 0;
//     for (let i = 0; i < morseCode.length; i++) {
//         let code = morseCode[i] == '.' ? 0 : 1;
//         result = result * 2 + code;
//     }
//     return result;
// }
// console.log(fromMorseToNumber('-.-...-.---.-.-..--'));

// function fromNumberToMorse(number) {
//     number = Math.abs(number);
//     let res = "";
//     do {
//         let digit = number % 2;
//         let sym = digit == 0 ? '.' : '-';
//         res = sym + res;
//         number = Math.trunc(number / 2);

//     } while(number != 0);
//     return res;
// }
// console.log(fromNumberToMorse(333651));



// function fromNumberToString(number, base) {
//     //TODO

// }
// function fromStringToNumber(string, base) {
//     //TODO
// }

// //getting code from symbol 
// console.log('abc'.charCodeAt(2))

// //getting symbol from code
// console.log(String.fromCharCode(900550))


// function fromNumberToString(value, code) {
//     var digit,
//         radix= code.length,
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
//     // console.log(dec2bin(11483)); //2

//   function fromDecToBinary(v) {
//     // if (!Number.isSafeInteger(v) || v < 0) {
//     //   throw new Error('v must be a non-negative integer');
//     // }
//     if (v < 0) { 
//        return console.log("you entered negative integer"); 
//     }
//     if (v === 1) {
//       return '1';
//     }
//     if (v === 0) {
//       return '0';
//     }
//     return fromDecToBinary(Math.floor(v / 2)) + (v % 2);
//   }
//   console.log(fromDecToBinary(11483));

//   function changeBase(number, fromBase, toBase) {
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


  
function getSymbol(digit) {
    let codeA = 'a'.charCodeAt();
    return digit < 10 ? digit : String.fromCharCode(codeA + digit - 10)
}
function fromNumberToString(number, base) {
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % base;
        let sym = getSymbol(digit);
        res = sym + res;
        number = Math.trunc(number / base);

    } while(number != 0);
    return res;
}
console.log(fromNumberToString(900550,36));
// console.log(900550 % 36);

function getDigit(symbol) {
    let codeA = 'a'.charCodeAt();
    let res = symbol < '9' ? +symbol : symbol.charCodeAt() - codeA + 10
    return res;
}
function  fromStringToNumber(string, base) {
    string = string.toLowerCase();
    let result = 0;
    for (let i = 0; i <string.length; i++) {
        let digit = getDigit(string[i]);
        result = result * base + digit;
    }
    return result;
}
console.log(fromStringToNumber("java", 36));
console.log(fromStringToNumber("10", 16));


