// console.log("Hello world");
// for(var i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i)
//     }, (i+1) * 5000);
// }
// let i = 100;

// for(let i = 0; i < 3; i++) {
//     setTimeout(function() {console.log(i)});
// }

// let i;
// for( var i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i);


  

 let num = 12345;
 function sum_of_digit(n)
 {
     if (n == 0)
     return 0;
     return (n % 10 + sum_of_digit(parseInt(n / 10)));
 }

 let result = sum_of_digit(num);
 console.log( "Sum of digits in "+ num +" is "+result );