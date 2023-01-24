// 7. Declare variable. Initialize it with the value, which shows temperature in degrees Celsius. Print its equivalent in degrees Fahrenheit. To convert temperatures 	in degrees Celsius to Fahrenheit use the following formula: °C * 1.8 +32 = °F .
let variable;
variable = 5;
console.log(variable * 1.8 + 32);

console.log(" ")
// 8.	Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let num1 = 4;
let num2 = 8;
if(num1 % num2 === 0 || num2 % num1 === 0){
    console.log(1)
}else{
    console.log(0)
}

console.log(" ")
//9.	Given three numbers. Find the maximum one.
let arr = [33, 16, 55];
console.log(Math.max(...arr));
console.log(Math.max(33, 16, 55));

console.log(" ")
// 14.  	Print all numbers between 1 and 10.
for(let i = 1; i < 10; i++){
    console.log(i)
}

console.log(" ")
// 15.	Print all numbers between 1 and 10 except 6.
for(let i = 1; i < 10; i++){
    if(i===6){
        continue;
    }
    console.log(i)
}

console.log(" ")
// 16.	Print all even numbers between 1 and 10.
for(let i = 1; i < 10; i++){
    if(i%2 === 0){
        console.log(i)
    }
}

console.log(" ")

// 17.	Calculate the sum of all numbers between 1 and 10 (using loop).
let sum = 0;
for(let i = 1; i < 10; i++){
    
    sum += i;
}
    console.log(sum)

console.log(" ")
 //   18.	Calculate the sum of all numbers between 1 and 10 except 8.
 let sum1 = 0;
for(let i = 1; i < 10; i++){
    if(i === 8){
        continue;
    }else{
        sum1 += i;
    }
    
}
    console.log(sum1);

    console.log(" ")
// 19.	Calculate the sum of all odd numbers between 1 and 10.
let sum3 = 0;
for(let i=1; i<10; i++){
    if(i % 2 != 0){
        sum3 +=i;
    }
}
console.log(sum3);

    console.log(" ")
//20.	Calculate the sum of squares of all numbers between 1 and 10.
let sum4 = 0;
for(let i=1; i<10; i++){
    sum4 +=  i ** 2;
}
console.log(sum4);

    console.log(" ")
//22.	Given five numbers as input. Calculate and print the average of the numbers. 

// let x = Number(prompt("Insert first number"));
// let y = Number(prompt("Insert second number"));
// let z = Number(prompt("Insert third number"));
// let e = Number(prompt("Insert fourth number"));
// let f = Number(prompt("Insert fivth number"));

// console.log((x + y + z + e + f)/5)
