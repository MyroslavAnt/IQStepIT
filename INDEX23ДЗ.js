// function printNumber(number) {
//     console.log(number);
//   }
  
//   function executePromises() {
//     const promise1 = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(1);
//       }, 5000);
//     });
  
//     const promise2 = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(2);
//       }, 5000);
//     });
  
//     const promise3 = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(3);
//       }, 5000);
//     });
  
//     Promise.all([promise1, promise2, promise3])
//       .then((values) => {
//         values.forEach((number) => {
//           printNumber(number);
//         });
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }
  
//   executePromises();
  




































// const http = require("http");
// const fs = require("fs");
    
// http.createServer(function(request, response){
      
//     if(request.url == "/hello"){
//         fs.readFile("index1.html", (error, data) => response.end(data));
//     }
//     else{
//         response.end("ERROR")
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));