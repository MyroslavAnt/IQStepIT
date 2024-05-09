// //Створити функцію яка буде виводити імя через 10 секунд
// function Name5Second(){
//     setTimeout(()=>{
//         console.log("MrAntPro")
//     }, 5000)
// }
//  Name5Second()






















// //Створити коллбек який буде виводити імя будь яке число
// function call(getName){
//     getName()
//     console.log('Myroslav')
// }
// function getName(){
//     setTimeout(()=>{
//         console.log('Vitalii')
//     }, 3000)
// }
// call(getName)




























// //Створити проміс який виведе ваше імя
// function getName() {
//     return new Promise((resolve, reject) => {
//       const myName = "lagust lage duku guste guste lage Magust lage duku guste guste lage";
//       resolve(myName);
//     });
//   }
  
//   getName()
//     .then(name => {
//       console.log("Vitalii " + name);
//     });
  


























// //Створити проміс який буде перевіряти чи повнолітня людина якщо так то виводить resolve якщо ні то reject
// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//       if (age >= 18) {
//         resolve("Ця людина є повнолітньою.");
//       } else {
//         reject("Ця людина не є повнолітньою.");
//       }
//     });
//   }
  
//   const age = 20;
  
//   checkAge(age)
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
































// //Створити створити масив та вивести його через 10 секунд
// let myArray = [1, 2, 3, 4, 5];

// function printArray() {
//     console.log(myArray);
// }

// setTimeout(printArray, 10000);




























// //Створити обєкт з 3 полями. Перевірити на наявність будь яке поле
// let a = {
//     b:12,
//     c:9
// }

// let res = a.hasOwnProperty("b")
// console.log(res)






















