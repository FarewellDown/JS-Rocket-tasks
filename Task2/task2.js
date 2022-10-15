// 1) створити функцію яка приймає масив та виводить його

// function outputArray (numbers = []){
//     console.log(numbers);
// } 
// outputArray ([])

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function outputRandomArray (randomArray = []){
//     for (let i=0; i<10; i++){
//         randomArray[i] = (Math.floor(Math.random()*100));
//     }
//     return randomArray;
// }
// outputArray(outputRandomArray());

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function outMinNum (number1, number2, number3){
//     if (number1<number2 && number1<number3)
//         return number1;
//     else if (number2<number1 && number2<number3)
//         return number2;
//     else
//         return number3;
// }
// console.log (outMinNum(9, 7, 3));

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function outMinNum (number1, number2, number3){
//     if (number1>number2 && number1>number3)
//         return number1;
//     else if (number2>number1 && number2>number3)
//         return number2;
//     else
//         return number3;
// }
// console.log (outMinNum(9, 7, 3));

// 5) створити функцію яка повертає найбільше число з масиву

// function outArray (array = []){
//     let max = 0;
//     for(let i=0; i<array.length; i++)
//         if (array[i] > max)
//         max = array[i];
//     return max;
// }
// // console.log(outArray(outputRandomArray()));
// // console.log(outArray([1, 172, 2, 6, 9, 0]));

// 6) створити функцію яка повертає найменьше число з масиву

// function outArray(array = []) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++)
//         if (array[i] < min)
//             min = array[i];
//     return min;
// }
// // console.log(outArray(outputRandomArray()));
// console.log(outArray([79, 172, 45, 6, 9, 0.123123123]));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його.

// function sumArr (array = []){
//     let sum = 0;
//     for (let i=0; i<array.length; i++){
//         sum = sum + array[i];
//     }
//     return sum
// }
// console.log(sumArr([5,10,20,-20,-40,60]))

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його 
// значень.

// function averageArr (array = []){
//     let sum = 0;
//     for (let i=0; i<array.length; i++){
//         sum = sum + array[i];
//     }
//     return sum/array.length
// }
// console.log(averageArr([1,2,3,4]))

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив 
// ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function informationArr (obj){
//     let arr = [];
//     for (let keys of obj){
//         arr.push(Object.keys(keys));
//     }
//     console.log(arr.flat());
// }
// const car ={
//     name: 'Scoda',
//     age: 12,
//     model: 'Superb'
// }
// const ovner ={
//     name: 'Alex',
//     age: 22,
//     carInStock: true
// }
// let objects = [car, ovner];
// informationArr(objects);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив 
// значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function informationArr (obj){
//     let arr = [];
//     for (let values of obj){
//         arr.push(Object.values(values));
//     }
//     console.log(arr.flat());
// }
// const car ={
//     name: 'Scoda',
//     age: 12,
//     model: 'Superb'
// }
// const ovner ={
//             name: 'Alex',
//             age: 22,
//             carInStock: true
//         }
// let objects = [car, ovner];
// informationArr(objects);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function summElem(arr1, arr2, arr3) {
    for (i = 0; i < 4; i++) {
        arr3[i] = (arr1[i] + arr2[i]);
    }
    return arr3
}

console.log(summElem([1, 2, 3, 4], [2, 3, 4, 5], []));

// =========================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function numbersSelection (number){
//     let min = number[0];
//     let max = number[0];
//     for (let i=0; i<number.length; i++){
//         if (number[i] > max){
//             max = number[i];
//         }
//         if (number[i] < min){
//             min = number[i];
//         }
//     }
//     console.log(max)
//     return min
// }
// console.log(numbersSelection([3,28,92,6,0.45,78]));

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// function informationArr (obj){
//     let arr = [];
//     for (let element of obj){
//         if (obj === objectKeys){
//             arr.push(Object.keys(element));
//         }
//         else if (obj === objectValues){
//             arr.push(Object.values(element));
//         }
//     }
//     console.log(arr.flat());
// }
// const car ={
//     name: 'Scoda',
//     age: 12,
//     model: 'Superb'
// }
// const ovner ={
//     name: 'Alex',
//     age: 22,
//     carInStock: true
// }
// let objectKeys = [car, ovner];
// let objectValues = [car, ovner];
// informationArr(objectKeys); //TODO затраїти ще одним способом )

// function informationArr (objects, IsValuesNeeded){
//     let arr = [];
//
//     for(const object of objects)
//     {
//         if(IsValuesNeeded)
//         {
//             for (const key of Object.keys(object)) {
//                 arr.push(key);
//             }
//         }
//         else
//         {
//             for (const key of Object.keys(object)) {
//                 arr.push(object[key]);
//             }
//         }
//     }
//     return arr;
// }
// const car ={
//     name: 'Scoda',
//     age: 12,
//     model: 'Superb'
// }
// const ovner ={
//     name: 'Alex',
//     age: 22,
//     carInStock: true
// }
//
// let bitObject = [car,ovner];

// console.log(informationArr(bitObject, true));  // will return values
// console.log(informationArr(bitObject, false)); // will return keys


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function exChange(arrNum = [], i){
//     if (i>=arrNum.length || i+1>=arrNum.length){
//         arrNum = "Error";
//     }
//     let x = arrNum[i];
//     arrNum[i] = arrNum[i+1];
//     arrNum[i+1] = x;
//
//     return arrNum;
// }
//
// console.log(exChange([9,8,0,4],2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// =================================
// Тут потрібно гуглити. Ми цього не розглядали.
// Для тих, хто не боїться пошукової строки

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
