 let num = 12345;
 function sum_of_digit(n)
 {
     if (n == 0)
     return 0;
     return (n % 10 + sum_of_digit(parseInt(n / 10)));
 }

 let result = sum_of_digit(num);
 console.log( "Sum of digits in "+ num +" is "+result );