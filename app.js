//---------------HW15--------------------------------------
//1
let numbers = [3, -25, 10, -12, 7, 2];
function minMax(numbers) {
  return numbers.reduce((mm, val) => {
      mm[0] = ( mm[0] === undefined || val < mm[0] ) ? val : mm[0]
      mm[1] = ( mm[1] === undefined || val > mm[1] ) ? val : mm[1]
      return mm;
  }, []);
  }
console.log(minMax(numbers));

//2
let itemsArr = ['abc', 'old_abc', 'lmn', '123', 'old_lmn'];
let prefix = 'old_';

function deleteWithPrefix(itemsArr, prefix) {
    return itemsArr.filter(element => !element.startsWith(prefix));
}

console.log(`deleteWithPrefix. in: ${itemsArr},    pref: ${prefix},     out: ${deleteWithPrefix(itemsArr, prefix)}`);

//3

function getSortedEvenOdd(numbers) {
  return numbers.sort((a, b)=> {
      return a % 2 == 0 && a < b ? -1 : b % 2 == 0 ? 1 : b-a;
  })
}
numbers = [1, 6, 3, 8, 5, 2, 7, 4];
console.log(`2. getSortedEvenOdd input: ${numbers}, output: ${getSortedEvenOdd(numbers)}`);


let n = [1, 6, 3, 8, 5, 2, 7, 4];
let odds = n.filter((a) => a % 2 !== 0).sort((a, b) => b - a);
let even = n.filter((a) => a % 2 === 0).sort((a, b) => a - b);
let sorted = even.concat(odds);
console.log(sorted);


// const arr = [3, -25, 10, 12, -7, -2, 15, 4, -11, 20];
// const isEven = num => num % 2 === 0;
// const sorter = ((a, b) => {
//    if(isEven(a) && !isEven(b)){
//       return -1;
//    };
//    if(!isEven(a) && isEven(b)){
//       return 1;
//    };
//    return a - b;
// });
// const oddEvenSort = arr => {
//    arr.sort(sorter);
// };
// oddEvenSort(arr);
// console.log(arr);



// -----------------------HW14-----------------------------------------

// //1
// let strings = ["abc", "lmn", "cd"];

// function ulSurround() {
//     strings = strings.map(function (part) {
//         return "<li>" + part + "</li>";
//     });
//     strings.splice(0, 0, '<ul>')
//     strings.splice(strings.length, 0, '</ul>');
//     return strings;
// };
// strings = ulSurround(strings);
// console.log(strings);

// //2
// let strings2 = ["abc", "lmn", "cd", "abc", "abc"];
// let str = "abc";
// let str2 = "ab";
// function count(strings2, str) {
//     return strings2.reduce((count, elem) => count + (elem == str), 0);
// }
// console.log(str + " element in ar [" + strings2 + "]  " + count(strings2, str));
// console.log(str2 = "ab" + " element in ar [" + strings2 + "]   " + count(strings2, str2));


// //3

//   function arrayCopy(src, srcPos, dst, dstPos, length) {
//       let Array1 = src.slice(srcPos, srcPos + length);
//     let Array2 = dst.slice((dstPos));
//     dst = dst.slice(0, dstPos).concat(Array1).concat(Array2); //
//     return dst;
//   }
  
//   console.log(arrayCopy([1, 2, 3, 4, 5, 6, 7], 3, [10, 20, 30, 40, 50, 60, 70], 4, 3));

// //4
  
//   let array1 = [1, 2, 3, 4, 5, 6, 7];
//   let array2 = [1, 2, 3, 4, 5, 6, 7];
//   move(array1,3,-1);
//   move(array2,2,4);
//   console.log("Output array: " + array1);
//   console.log("Output array: " + array2);
  
//   function move(array, index, offset) {
//      let element = array.splice(index,1)[0];
//     array.splice(index+offset, 0, element);
//   }




// ------------- 13 HW -------------------------------------------------------------------
// ["1234567890", "001200343", "231740705", "339677395", "000000000", "123456782", "341141430"].map(function (e) {
//     console.log(e + " is " + (checkTeudatZehut(e) ? "a valid" : "an invalid") + " Israeli ID");
// });

// function checkTeudatZehut(teudatStrNumber) {
//     var teudatStrNumber = String(teudatStrNumber).trim(); https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

//     function arraySum(teudatStrNumber) {
//         let sum = 0;
//         for (let i = 0; i < teudatStrNumber.length; i++) {
//             sum += teudatStrNumber;
//         }
//         return sum;
//     }

//     if (teudatStrNumber.length > 9 || teudatStrNumber.length < 5 || isNaN(teudatStrNumber) || arraySum(teudatStrNumber) == 0) return false;

//     // In case string with zeros up to 9 digits (optional) https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//     teudatStrNumber = teudatStrNumber.length < 9 ? ("00000000" + teudatStrNumber).slice(-9) : teudatStrNumber;

//     return Array
//         .from(teudatStrNumber, Number)  // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//         .reduce((counter, digit, i) => {  // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//             const step = digit * ((i % 2) + 1);
//             return counter + (step > 9 ? step - 9 : step);
//         }) % 10 === 0;
// }

// ------------- 13 HW -------------------------------------------------------------------

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