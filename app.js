//1.Arrayin icindeki ededlerin cemi cutdurse --true, tekdirse-- false ekrana gostersin

// let a = +prompt("Nece ededli massiv isteyirsiniz?")
// let arr = []
// let sum = 0;

// for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`${i+1} ededi daxil edin`)
//     sum += arr[i]
// }

// if(sum % 2 == 0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//2.Arrayda guzgu ededleri tapsin

//1-ci usul
// let a = +prompt("Nece ededdden ibaret masiiv isteyirsiniz?")
// let arr = []

// for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`${i+1} - ci elementi daxil edin`)
// }
// console.log(arr);


// for (let j = 0; j < arr.length; j++) {
//     if (arr[j].toString().split('').reverse().join('') == arr[j]) {
//         console.log(arr[j]);
//     }
// }


//2-ci usul
// let a = +prompt('Nece ededden ibaret masiiv isteyirsiniz?')
// let arr = []

// for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`${i+1}-ci ededleri daxil edin`)
// }

// console.log(arr);


// for (let k = 0; k < arr.length; k++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j].toString().split('').reverse().join('') == arr[k] ){
//           console.log(arr[k]);
//         }
//     } 
// }


//3.Arrayda m herfi ile biten sozleri cixardin.

//1-ci usul
// let a = +prompt("Nece elementden ibaret massiv isteyirsiniz?")
// let arr = []


// for (let i = 0; i < a; i++) {
//     arr[i] = prompt(`${i+1} elementi daxil edin`)
// }
// console.log(arr)


// for (let j = 0; j < arr.length; j++) {
//     if (arr[j].at(-1).toLowerCase() === "m") {
//         console.log(`M ile biten sozler: ${arr[j]}`)
//     }
// }


//2-ci usul

// let a = +prompt("Nece ededden ibaret massiv isteyirsiniz?")
// let arr = [];

// for (let i = 0; i < a; i++) {
//     arr[i] = prompt(`${i+1}-ci ededi  daxil edin`)
// }

// console.log(arr);

// for (let j = 0; j < arr.length; j++) {
//      if (arr[j].endsWith("m") == true) {
//         console.log(arr[j]);
//      }
// }

//4.Arrayda sozde butun herfleri boyuk olub olmadigina baxin

// let a = +prompt("Nece ededden ibaret massiv isteyirsiniz?")
// let arr = []

// for (let i = 0; i < a; i++) {
//     arr[i] = prompt(`${i+1}-ci elementi daxil edin`)
// }

// console.log(arr);

// for (let j = 0; j < arr.length; j++) {
//     if (arr[j].toUpperCase() == arr[j]) {
//         console.log(`Butun herfler boyukdur: ${arr[j]}`);
//     }
// }


//5.Array icerisinde 0-9 kimi reqemler var, hansisa 1 reqem yoxdur onu tapin



//6.Istifadeci 0 daxil edenedek ededleri arrayda goster (while)

