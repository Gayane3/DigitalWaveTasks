// //1. Ստուգել, արդյո՞ք ներմուծված սթրինգը սկսվում է a կամ o-ով։ Եթե հա տպենք սթրինգն ինչպես կա, իսկ հակառակ դեպքում՝ սթրինգի հակառակը։

// let inputText = prompt("Insert the text");
// if(inputText.includes("a") || inputText.includes("o")){
//     console.log(inputText);
// }else{
//     let arrText = inputText.split('').reverse();
//     let joinText = arrText.join('')
//     console.log(joinText)
// }

//console.log(" ");

// //2. Պահանջել մուտքագրել ծածկագիր։ Եթե ծածկագիրը պարունակում է 6-ից 12-ից նիշ և պարունակում է թվանշաններ, տառեր և հետևյալ սիմվոլներից մեկը "%", տպել, որ ծածկագիրն ուժեղ է։ Հակառակ դեպքում զգուշացրեք օգտատիրոջը, որ ծածկագիրը պետք է փոխվի։

// let pass = prompt("Insert the password");
// console.log(pass.length)
//     if(pass.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12}$)")){
//     console.log(true)
//     }else{
//     console.log(false)
// }

//console.log(" ");

//3. Տրված է սթրինգ։ Տպեք նոր սթրինգ, որը կպարունակի օրիգինալ սթրինգի բոլոր տառերը կրկնապատկված։Օրինակ, եթե ունենք հետևյալ սթրինգը՝ Monty, պետք է ստանանք MMoonnttyy

let str = "sun";
let str2 = "";
for (let i = 0; i < str.length; i++) {
    str2 += str[i].repeat(2)
}
console.log(str2);

console.log(" ");

//4. # Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.Տրված են a և b սթրինգերը։ Գտնել, թե քանի անգամ է դրանց մեջ նույն դիրքում հանդիպում 2 երկարությամբ նույն ենթասթրինգերը հանդիպում։

let a = 'xxcaazz';

let b = 'xxbaazz';


let getPositions = (a, b) => {
    let size = Math.min(a.length, b.length);
    let count = 0;
    for (let i = 0; i < size - 1; i++) {
        let aSubString = a.substring(i, i + 2);
        let bSubString = b.substring(i, i + 2);
        if (aSubString === bSubString)
            count++;
    }
    return count
}
console.log(getPositions(a, b));


//5․ Տրված է թվերի զանգված։ Ֆիլտրել և ստանալ նոր զանգված, որտեղ բոլոր էլեմենտները մեծ կլինեն 6-ից։
let newArr = [2, 6, 23, 77, 3, 90, 1];
let result = newArr.filter(item => item > 6
)
console.log(result)

console.log(" ");

//6. Տրված է թվերի զանգված։ Բոլոր էլեմենտները մեծացնել 5 անգամ։

let arr4 = [2, 6, 23, 77, 3, 90, 1];
let res = arr4.map(item => item * 5);

console.log(res)

console.log(" ");

//7․ Տրված է օգտատերերի օբյեկտների զանգված․ 
let arr5 = [
    { name: "John", age: 30 },
    { name: "Lilit", age: 25 },
    { name: "Ani", age: 27 },
    { name: "Karen", age: 20 },
    { name: "Aram", age: 32 },
    { name: "Luse", age: 17 }]

console.log(" ");

//ա) գտնել օգտատերերի միջին տարիքը
let func = arr6 => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr6.reduce(reducer);
    return sum / arr6.length;
}
let ages = arr5.map(person => person.age)
console.log(func(ages));

console.log(" ");

//բ) ֆիլտրել բոլոր օգտատերերին, որոնց տարիքը մեծ է 23-ից։

let filteredAge = arr5.filter(item => item.age > 23)
console.log(filteredAge);

console.log(" ");

//8․ Տրված է հետևյալ օբյեկտը
let obj = {
    id: 1,
    firstName: "Avetiq",
    lastName: "Avetiq",
    age: 30,
    address: "Komitas 15",
    city: "Ijevan",
    isAdmin: true,
}

//ա) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի բանալիները(keys)
let arr8 = Object.keys(obj);
console.log(arr8);

console.log(" ");

//բ) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի արժեքները(values)
let arr9 = Object.values(obj);
console.log(arr9);