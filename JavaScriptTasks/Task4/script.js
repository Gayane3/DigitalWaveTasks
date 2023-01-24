// 1․ Տրված են երկու թվեր, տպեք դրանցից մեծը
let num1 = 5;
let num2 = 3;
console.log(Math.max(num1, num2))

//2․ Տրված է բնական թիվ։ Ստուգեք արդյոք վերջին թվանշանը 2 է։ 
let num = 37;
let last = String(num).slice(-1);
if(Number(last) === 2){
    console.log(true)
}else{
    console.log(false)
}

//3․ Տրված է երկու հեռավորություն, մեկը կիլոմետրով, մյուսը մետրով։ Գտեք որն է ավելի մեծ։
// let firstDistance = 10; //km
// let secondDistance = 40;//m

// let z = secondDistance / 1000;
  //  z = secondDistance;
// console.log(z);
// console.log(Math.max(firstDistance, ))

arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45]
// 4․ Գտնել զանգվածի երկարություն
console.log(arr.length);

console.log(' ');
//5. Տպել զանգվածի բոլոր էլեմենտները
for(let item of arr){
    console.log(item)
}

console.log(" ");

//6․ Գտնել զանգվածի բոլոր թվերի գումարը
let sum = 0;
for(let item of arr){
    sum+=item;
}
    console.log(sum)

    console.log(" ");
//7․ Գտնել թե քանի 1 կա զանգվածում
let repeatedNumbers = 0;
for(let item of arr){
    if(item === 1){
        repeatedNumbers++;
    }
}
console.log(`${repeatedNumbers} հատ 1 կա զանգվածում:`)

console.log(" ");

//8․ Գտնել զույգ թվերի քանակը
let evenNumbers = 0;
for(let item of arr){
    if(item % 2 === 0){
        evenNumbers++;
    }
}
console.log(`${evenNumbers} հատ զույգ կա զանգվածում:` )
console.log(" ");

//9․ Գտնել կենտ էլեմենտների քանակը
let oddNumbers = 0;
for(let item of arr){
    if(item % 2 !== 0){
        oddNumbers++;
    }
}
console.log(`${oddNumbers} հատ կենտ կա զանգվածում:` )
console.log(" ");

//10․ Գտնել զանգվածի մինիմում արժեքը

console.log(Math.min(...arr));

console.log(" ");

// 11․ Գտնել զանգվածի մաքսիմում արժեքը


console.log(Math.max(...arr));

console.log(" ");

//12. Գտնել զանգվածի էլեմենտների քառակուսիների գումարը

let summ = 0;
for(let item of arr){
    summ +=  item ** 2;
}
    console.log(summ);

    console.log(" ");

    //13*․ Շուռ տալ զանգվածը, այնպես որ վերջին արժեքը դառնա առաջինը, իսկ առաջին դառնա վերջինը և այդպես շարունակ

let reveresedArr = arr.reverse();
console.log(reveresedArr)

    console.log(" ");

//14*․ Դասավորել աճման կարգով
// variant 1
let sortedArr = arr.sort((a,b)=>a-b);
console.log(sortedArr);

    console.log(" ");

//variant 2

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      val = arr[i];
      arr[i] = arr[j];
      arr[j] = val;
    }
  }
}
console.log(arr);

    console.log(" ");


// 15. Գտնել զանգվածի էլեմենտներից քանիսի տիպն է number
let arr2 =["Hello", 15, "World", true, 89, 157, [1, 3, 7] ]
for(let item of arr2){
    if(typeof item === "number"){
        console.log(item)
    }
}

    console.log(" ");

//16. Գտնել զանգվածի էլեմենտներից քանիսն են բուլյան տիպի
for(let item of arr2){
    if(typeof item === "boolean"){
        console.log(item)
    }
}

    console.log(" ");

//17․ Տպել զանգվածի վերջին էլեմենտի բոլոր էլեմենտները
let lastItems= arr2[arr2.length-1]
for(let item of lastItems){
    console.log(item)
}

    console.log(" ");

//18․ Տպել զանգվախի վերջին էլեմենտի բոլոր էլեմենտների գումարը
let sumofLastElems = 0;
for(let item of lastItems){
 sumofLastElems += item;
}
console.log(sumofLastElems);

    console.log(" ");

//19․ Տպել միայն զույգ ինդեքս ունեցող անդամները

for(let i=0; i<arr2.length; i++){
    if(i % 2 === 0){
        console.log(arr2[i])
    }
}

    console.log(" ");

//20․ Օգտատերը ներմուծում է թիվ։ ներմուծված թվին համապատասխան տպել Ամիսը։ Չօգտագործել if

// let inputNumber = Number(prompt("Insert the number"));
// switch(inputNumber){
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//      case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('September');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;
// }

//  console.log(" ");

//21. Օգտատերը ներմուծում է թվեր։ Այդ թվերը ավելացրեք զանգվածում այնքան ժամանակ մինչև չգրի "exit"

// let numbers = [];

// while(true){
//     let inputNumber2 = prompt("Insert the number");
// if(inputNumber2 !== "exit"){
//     numbers.push(Number(inputNumber2))
// }else if(inputNumber2 === "exit"){
//     console.log("Exit");
//     break;
// }
// }

// console.log(numbers);

//  console.log(" ");

//22. Տրված են 2 զանգվածներ։ Համեմատել նրանց
	//ա) երկարությունը և տպել առաջինն է մեծ թե երկրորդը
    let array1 = [5, 8, 10, 6, 23, 90];
    let array2 = [6, 8, 3, 7, 23, 45, 77, 88];

    if(array1.length > array2.length){
        console.log(`array1 is bigger than array2`);
    }else{
        console.log(`array2 is bigger than array1`)
    }


	//բ) էլեմենտների գումարը և տպել առաջինն է մեծ թե երկրորդը
    let add = 0;
    for(let item of array1){
     add += item;
    }
    let add2 = 0;
    for(let item of array2){
     add2 += item;
    }
    if(add > add2){
        console.log(`The sum of array1 is bigger than the sum of array2`);
    }else{
         console.log(`The sum of array2 is bigger than the sum of array1`)
    }
