//1․ Ստեղծել ֆունկցիա, որը կվերցնի զանգված որպես արգումենտ (սթրինգերի) և կվերադարձնի մեկ այլ լիստ, որը կպարունակի այդ լիստի բոլոր այն բառերը, որոնք սկվում են ձայնավորով։

let arr1 = ["hello", "sun", "eternity", "tree", "angle", "orange"];

let getVoyels = (arr) => {
    return arr.filter(arr => /^[aeiou]/i.test(arr))
}
console.log(getVoyels(arr1));

console.log(" ");
//2․ Ստեղծել ֆունկցիա, որը որպես արգումենտ ընդունած թիվը կստուգի և կասի այն պարզ թիվ է թե ոչ

function getPrimeNumber(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(getPrimeNumber(7));

console.log(" ");

//3․ Գրել ֆունկցիա, որը կտպի True, եթե լիստի բոլոր էլեմենտները 1 կամ 4 են։ Հակառակ դեպքում տպել False:

let arr2 = [4, 4, 4, 4, 4, 1];

function checkNumbers(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== 4 && arr[i] !== 1) {
            return false;
        }
    }
    return true;
}
console.log(checkNumbers(arr2));

console.log(" ");

//4․ Ստեղծել ֆունկցիա, որը կստեղծի և կտպի լիստ, որի արժեքները [1, 30] միջակայքում գտնվող թվերի քառակուսիներն են;
let pow;
let arr3 = [];

function getPowsValues(arr) {
    for (let i = 2; i < 30; i++) {
        pow = i ** 2;
        arr.push(pow)
    }
    return arr
}
console.log(getPowsValues(arr3));

console.log(" ");

//5․ Ստեղծել ֆունկցիա, որը կվերցնի մեկ արգումենտ՝ n: Վերադարձնել n երկարությամբ լիստ, որը կպարունակի (-100, 400) միջակայքում գտնվող պատահական թվեր։
let arr = [];
let getRandom = (n) => {
    let newArr = Array(n).fill().map(() => Math.floor(Math.random() * (400 - (-100) + 1)) + (-100));
    return newArr;
}
console.log(getRandom(5));

console.log(" ")

//6. Ստեղծել ֆունկցիա, որը կգումարի տրված լիստի բոլոր թվերը և կվերադարձնի այն։ Եթե տարրերից մեկը 13 է, դադարեցնել հաշվարկը
//# և վերադարձնել մինչև այդ պահը հաշված գումարը։
let arr4 = [4, 5, 2, 44, 13, 70, 7];

let getSum = (arr) => {
    let sum = 0;
    for (let item of arr) {
        sum += item
        if (item === 13) {
            return sum - item;
        }
    }
    return sum;
}
console.log(getSum(arr4));