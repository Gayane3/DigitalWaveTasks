//1․ Գրել ֆունկցիա, որը պարամետրով ստանում է n բնական թիվ և 
// 1 - 3 - ի դեպքում վերադարձնում է "Վատ",
//     4 - 6 - "Միջին"
// 7 - 8 - "Լավ"
// 9 - 10 - "Գերազանց"
// այլ դեպքերում "Սխալ գնահատական"։

let getGrade = (n) => {
    if (n <= 3) {
        return "Bad"
    } else if (n <= 6) {
        return "Middle"
    } else if (n === 7 || n === 8) {
        return "Good"
    } else if (n === 9 || n === 10) {
        return "Excellent"
    } else {
        return "wrong grade"
    }
}
console.log(getGrade(5));

console.log(" ");

//2. Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում 0 - ից n թվի միջև ընկած թվերի գումարը(n - ը ներառյալ)։

let getSum = (n) => {
    let sum2 = 0;
    for (let i = 0; i <= n; i++) {
        sum2 += i;
    }
    return sum2
}
console.log(getSum(3));

console.log(" ");

//3․ Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում n թվի ֆակտորյալը։

let getFactorial = (n) => {
    if (n === 1) {
        return n
    } else {
        return (n * getFactorial(n - 1))
    }
}
console.log(getFactorial(4));

console.log(" ");

//4 Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n ամբողջ թիվ և վերադարձնում true n-ը պարզ թիվ լինելու դեպքում, հակառակ դեպքում false:

let checkPrime = (n) => {
    if (n <= 2) {
        return false
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
            return true;
        }
    }
}
console.log(checkPrime(7));

//5․ Գրել ֆունկցիա, որը պարամետրով ստանում է (x1, y1) և (x2, y2) կետերի կոորդինատները և վերադարձնում 2 կետերի միջև եղած հեռավորությունը:

function getDistance(x1, y1, x2, y2) {
    var xDiff = x1 - x2;
    var yDiff = y1 - y2;

    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
console.log(getDistance(4, 3, 2, 6));

//6. Գրել ֆունկցիա, որը պարամետրով ստանում է arr զանգված և վերադարձնում նոր զանգված առանց կրկնվող տարրերի։ օր․[4, 4, 7, 8, 9, 5, 5, 6]-- > [4, 7, 8, 9, 5, 6]:
let arr22 = [4, 4, 7, 8, 9, 5, 5, 6];

function removeRepeatedEl(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

console.log(removeRepeatedEl(arr22));

//7.https://edabit.com/challenge/8Qg78sf5SNDEANKti

function animals(chickens, cows, pigs) {
    return chickens * 2 + cows * 4 + pigs * 4
}
console.log(animals(2, 5, 4));

//8․ https://edabit.com/challenge/JesaFi5ntBEbGT8bu

function convert(hours, minutes) {
    return hours * 3600 + minutes * 60
}
console.log(convert(3, 5));

//9․ https://edabit.com/challenge/vvuAkYEAArrZvmp6X

function bitwiseAND(n1, n2) {
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    return n1 | n2;
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2;
}
console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(7, 12));
console.log(bitwiseXOR(7, 12));

//10. https://edabit.com/challenge/3kcrnpHk7krNZdnKK

function binary(decimal) {
    let binNumber = decimal.toString(2);
    return binNumber
}
console.log(binary(5));

console.log(" ");

//11. https://edabit.com/challenge/Q3n42rEWanZSTmsJm

let arr23 = [3, 7, 5, 19, 35]
function minMax(arr) {
    let newArr = [];
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    newArr.push(minValue, maxValue)
    return newArr;
}
console.log(minMax(arr23));

console.log(" ");

//12. https://edabit.com/challenge/xsi99TwpGyFC8KS6d

function numberSplit(n) {
    let firstHalf = Math.floor(n / 2);
    let secondHalf = n - firstHalf;
    let newArr = [];
    newArr.push(firstHalf, secondHalf);
    return newArr;
}
console.log(numberSplit(11))

