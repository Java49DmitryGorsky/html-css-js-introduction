 let num = 623;
 function sum_of_digit(n)
 {
     if (n == 0)
     return 0;
     if (n < 0)
     n = -n;
     return (n % 10 + sum_of_digit(parseInt(n / 10)));
 }

 let result = sum_of_digit(num);
 console.log( "Sum of digits in "+ num +" is "+result );



// const sumDigits = (n = 0) =>
// { if (n < 0)
//     if (n > -10)
//       return n
//     else
//       return (-n % 10) + sumDigits (n / 10 >> 0)
//   else
//     if (n < 10)
//       return n
//     else
//       return (n % 10) + sumDigits (n / 10 >> 0)
// }  

// console.log(sumDigits(-623))