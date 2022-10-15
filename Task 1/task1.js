// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array1 = [];
// for (let i=0; i <10; i++) {
//     array1[i]=i;
// }
// console.log(array1);

// - Створити масив з будь-якою кількістю елементів різного типу (string, number, boolean) та
// - вивести в консоль лише цифри
// - вивести в консоль лише стрічки, які мають 4 та більше символів.
// - вивести лише булівські значення true



// let arrayNumber = [];
// let arrayString = [];
// let arrayBoolean = [];
// let arrayTrash = [1,2,'Lenovo',false,'Asus',3,'BMW',true]
// for (let i=0; i<arrayTrash.length; i++) {
//     if (typeof(arrayTrash[i])==='number'){
//         arrayNumber[i]=arrayTrash[i];
//         // console.log(arrayNumber[i]);
//     }
//     else if (typeof(arrayTrash[i])==='string' && arrayTrash[i].length>=4){
//         arrayString[i]=arrayTrash[i];
//         // console.log(arrayString[i]);
//     }
//     else if (typeof(arrayTrash[i])==='boolean'){
//         arrayBoolean[i]=arrayTrash[i];
//         // console.log(arrayBoolean[i]);
//     }
// }
// console.log(arrayNumber.filter(Number));
// console.log(arrayString.filter(String));
// console.log(arrayBoolean.filter(Boolean));



// - Створити масив зі 100 ітерацій, та вивести:
// - кожен індекс

// let araAra = [];
// for (let i=0; i<100; i++) {
//     araAra[i]=i;
// };   
// console.log(araAra);

// - тільки парні індекси (2, 4, 6, 8 ...)
// - індекси кратні 3 (3, 9, 12, 15 ...)

// let araAra = [];
// for (let i=1; i<100; i++) {
//     araAra[i]=i;
//     let pare = araAra[i];
// 	if (i%2 === 0)
//         console.log(pare);
// };   

// let araAra = [];
// for (let i=1; i<100; i++) {
//     araAra[i]=i;
//     let trinity = araAra[i];
// 	if (i%3 === 0)
//         console.log(trinity);
// }; 



// - Дано масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());

// - Дано масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());

// - Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// let arr = [1, 2, 3, 4, 5];
//  arr.pop();
//  arr.pop();
// arr.push('a', 'b', 4, 5);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище. 

// let arr = [1, 2, 3, 4, 5];
// let one = arr.shift();
// let five = arr.pop();

// arr.unshift (one, 'a', 'b');
// arr.push ('c', five, 'd');

// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrDuo = [];
// for (i = 0; i < arr.length; i = i + 2) {
//     arrDuo[i] = i;
// }
// console.log(arrDuo.filter(Number));

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let empty = [];
// for (i = 0; i < arr.length; i++) {
//     empty.push(arr[i]);
// }
// console.log((empty), 'empty');
// console.log((arr), 'arr');

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrDuo = [];
// for (i = 0; i < arr.length; i++) {
//     arrDuo[i] = i;
// }
// console.log(arrDuo);
// console.log(arr);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

// let masiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < masiv.length) {
//     console.log(i, 'INDEX', masiv[i], 'NUMBER')
//     i++;
// }

// 2. перебрати його циклом for

// let masiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for(i=0; i<masiv.length; i++){
//     console.log((i), 'INDEX', masiv [i], 'NUMBER');
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let masiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < masiv.length) {
//     if (i % 2 !== 0)
//         console.log(i, masiv[i]);
//     i = i + 1;
// } 

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let masiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (i = 0; i < masiv.length; i = i + 1) {
//     if (i % 2 !== 0)
//     console.log(i, masiv[i]);
// } 

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let masiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < masiv.length) {
//     if (masiv[i] % 2 === 0)
//         console.log(i, masiv[i]);
//     i = i + 1;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let masiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (i = 0; i < masiv.length; i = i + 1) {
//     if (masiv[i] % 2 === 0)
//         console.log(i, masiv[i]);
// } 

// 7. замінити кожне число кратне 3 на ваше імя

// let masiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (i=0; i< masiv.length; i = i+1){
//     if (masiv[i] % 3 === 0)
//         masiv[i] = 'Sanya';
//         console.log(i, masiv[i]);
// }

// 8. вивести масив в зворотньому порядку.

// let masiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (i = masiv.length - 1; i >= 0; i--) {
//     console.log(i, masiv[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 9.1. перебрати його циклом while але в зворотньому циклі (с заду на перед)

// let masiv = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = masiv.length - 1;
// while (i >= 0) {
//     console.log((i), 'INDEX', masiv [i], 'NUMBER')
//     i--;
// }


// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

// let emptyArray = [];
// for (i = 1; emptyArray.length < 50; i++) {
//     if (i%2 === 0)
//     emptyArray.push(i);
// }
// console.log(emptyArray); 

// - заповнити його 50 непарними числами за допомоги циклу.

// let emptyArray = [];
// for (i = 1; emptyArray.length < 50; i++) {
//     if (i%2 !== 0)
//     emptyArray.push(i);
// }
// console.log(emptyArray);

// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let emptyArray = [];
// for (i=0; emptyArray.length<20; i++){
//     emptyArray[i] = Math.random();
//     console.log(i, emptyArray[i]);
// }

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let emptyArray = [];
// for (i=0; emptyArray.length<20; i++){
//     emptyArray[i] = Math.floor(Math.random() * (732 - 8) + 8);
//     console.log(i, emptyArray[i]);
// }

//  2. Вивести за допомогою console.log кожен третій елемен

// let array = [1, 4, 6, 228, -289, 322, 288, 1390, 7658, 23, 5, -28];
// for (i = 2; i<array.length; i = i + 3) 
//     console.log(i, array[i]);

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let array = [1, 4, 6, 228, -289, 322, 288, 1390, 7658, 23, 5, -28, 3, 99, 742];
// i = 2;
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(i, array[i]);
//     }
//     i = i + 3;
// } 

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let array = [1, 4, 6, 228, -289, 322, 288, 1390, 7658, 23, 5, -28, 3, 99, 742];
// let i = 2;
// let emptyArr = [];
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         emptyArr[i] = array[i];
//         console.log(i, emptyArr[i], '-> emtyArray');
//         console.log(i, array[i], ' -> array');
//     }
//     i = i + 3;
// } 

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
//     for(i=0; i<arr.length; i++){
//         if (arr[i+1]%2 === 0){
//             console.log(arr[i])
//         }
//     }

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
//     for (i=0; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     sum = sum/arr.length;
//     console.log(sum)

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let emptyArray = [];
// let increasedArray = [];
// for (i=0; emptyArray.length<10; i++){
//     emptyArray[i] = Math.floor(Math.random() * (20));
//     increasedArray[i] = emptyArray[i] * 5;
//     console.log(i, emptyArray[i]);
//     console.log(i, increasedArray[i]);
// } 

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let clownArray = ['sosiska', true, 48, 'true', false, 52, 'bograch', 7, 9, '9'];
// let numArr = [];
// for (i=0; i<clownArray.length; i++){
//     if (typeof(clownArray[i])==='number')
//         numArr[i]=clownArray[i];
// }
// console.log(clownArray);
// console.log(numArr.filter(Number));

// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let mas = ['a', 'b', 'c'];
// let word = '';
// for (i=0;i<mas.length;i++){
// word = word + mas[i];
// }
// console.log(mas);
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let mas = ['a', 'b', 'c',];
// let word = '';
// let i = 0;
// while (i<mas.length){
//     word = word + mas[i];
//     i++;
// }
// console.log(mas);
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let mas = ['a', 'b', 'c'];
// let word = '';
// for (let leter of mas){
//     word = word + leter;
// }
// console.log(mas);
// console.log(word);









// let masiv = [1, 'one', true];
// for (i=0; i<masiv.length; i++){
//     // if () // в if задаєш умову перевірки. 
//         console.log(i, '<- INDEX', masiv[i], '<- ELEMENT'); // перевіряєш ЕЛЕМЕНТИ масиву
// }


// let arr = ['Heloo', 10, true, 'World', 12, false];
// let duo = [];
// for (i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === 'string' && arr[i].length >= 4)
//         console.log(arr[i]);
// }

//     else if (typeof(arrayTrash[i])==='string' && arrayTrash[i].length>=4){
//         arrayString[i]=arrayTrash[i];

