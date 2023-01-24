//1. Զանգվածով ստանալ վերը նշված օբյեկտի key-երը

let obj = {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
}

let arr = [];
let result = Object.keys(obj);
console.log(result);

//2. Զանգվածով ստանալ վերը նշված օբյեկտի value-ները

let arr2 = [];
let result2 = Object.values(obj);
console.log(result2);

//3․ ['author', 'title', 'readingStatus'] և ['Bill Gates', 'The Road Ahead', true] զանգվածներից ստանալ օբյեկտ, որտեղ key-երը առաջին զանգվածի էլեմենտներն են, իսկ value - ները 2րդ զանգվածի։ 

let keys = ['author', 'title', 'readingStatus'];
let values = ['Bill Gates', 'The Road Ahead', true];

let obj6 = {};

keys.forEach((item, index) => {
    obj6[item] = values[index]
});
console.log(obj6);

//4․ 
let library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];


// Սորտավորել զանգվածը ըստ յուր․ օբյեկտի libraryId - ի։

let sortedObj = (library.sort((a, b) => a.libraryID - b.libraryID));

console.log(sortedObj);

//5․ Գրել ֆունկցիա, որը կջնջի զանգվածում եղած null, 0, '', "", undefined, false էլեմենտները [NaN, 0, 15, false, -22, '', undefined, 47, null] 
let arr7 = [NaN, 0, 15, false, -22, '', undefined, 47, null]

let checkArr = (arr) => {
    return arr.filter((item) => {
        if (item) {
            return item;
        }
    })
}

console.log(checkArr(arr7))