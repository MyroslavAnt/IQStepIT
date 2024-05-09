// function printName() {
//     setTimeout(function() {
//         console.log("Меня зовут Мирослав");
//         printAge(printName);
//     }, 7000);
// }

// function printAge(callback) {
//     console.log("Мне 13 лет");
// }


// printName();























// const myPromise = new Promise(function(resolve){
//     console.log("Выполнение асинхронной операции");
//     resolve("Привет мир!");
// });
// myPromise.then(function(value){
//     console.log(`Из промиса получены данные: ${value}`);
// })
















// function sum(x, y){
//     return new Promise(function(resolve){
//         const result = x + y;
//         resolve(result);
//     })
// }
// sum(3, 5).then(function(value){ console.log("результат", value);});
// sum(3, 5).then(function(value){ console.log("CYMA", value);});





























// const myPromise = new Promise(function(resolve, reject){
//     try{
//         console.log("Выполнение асинхронной операции");
//         getSomeWork();      // вызов не существующей функции
//         resolve("Hello world!");
//     }
//     catch(err){
//         reject(`Произошла ошибка: ${err.message}`);
//     }
// });
// myPromise.catch( function(error){
//     console.log(error);
// });


































// const myPromise = new Promise((resolve, reject) => {
//     console.log(nonExistentVariable);
  
//     const constantVariable = 5;
  
//     resolve("Усе в порядку!");
//   });
  
//   myPromise.then((message) => {
//     console.log("Успішно:", message);
//   }).catch((error) => {
//     console.error("Помилка:", error);
  
//     setTimeout(() => {
//       console.log("Ложна помилка: Це лише підроблене повідомлення про помилку.");
//     }, 5000);
//   });
  


























// const myPromise = new Promise((resolve, reject) => {
//     console.log(nonExistentVariable);
  
//     const constantVariable = 5;
  
//     resolve("Усе в порядку!");
//   });
  
//   myPromise.then((message) => {
//     console.log("Успішно:", message);
//   }).catch((error) => {
//     console.error("Помилка:", error);
  
//     setTimeout(() => {
//       console.log("Ложна помилка: Це лише підроблене повідомлення про помилку.");
  
//       setTimeout(() => {
//         console.error("Помилка: Оригінальна помилка знайдена.");
        
//         setTimeout(() => {
//           console.log("Всі помилки видалено. Усе в порядку.");
//         }, 10000);
//       }, 5000);
//     }, 5000);
//   });
  





































// const myPromise = new Promise((resolve, reject) => {
//     try {
//       console.log(nonExistentVariable);
      
//       const constantVariable = 5;
  
//       resolve("Усе в порядку!");
//     } catch (error) {
//       reject("Помилка: " + error.message);
//     }
//   });
  
//   myPromise.then((message) => {
//     console.log("Успішно:", message);
//   }).catch((error) => {
//     console.error(error);
  
//     setTimeout(() => {
//       console.log("Ложна помилка: Це лише підроблене повідомлення про помилку.");
  
//       setTimeout(() => {
//         console.error("Помилка: Оригінальна помилка знайдена.");
        
//         setTimeout(() => {
//           console.log("Всі помилки видалено. Усе в порядку.");
//         }, 10000);
//       }, 5000);
//     }, 5000);
//   });
  































// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const correctPassword = "1783";

// rl.question("Введіть пароль комп'ютера: ", (passwordAttempt) => {
//   if (passwordAttempt === correctPassword) {
//     console.log("Пароль успішно введений.");
//   } else {
//     console.log("Неправильний пароль.");
//   }
  
//   rl.close();
// });





























// const myNamePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const myName = "Miros";
//       console.log("MirosAnt", myName);
//       resolve(myName);
//     }, 6000);
//   });
  
//   myNamePromise.then((name) => {
//     console.log("Ім'я успішно виведено", name);
//   });
  



























// const myNamePromise = new Promise((resolve, reject) => {
//     const myName = "MrAnt!";
//     let index = 0;
  
//     const printNextLetter = () => {
//       if (index < myName.length) {
//         console.log(myName[index]);
//         index++;
//         setTimeout(printNextLetter, 3000);
//       } else {
//         resolve();
//       }
//     };
  
//     setTimeout(printNextLetter, 3000);
//   });
  
//   myNamePromise.then(() => {
//     console.log("Усі букви імені виведено.");
//   });
