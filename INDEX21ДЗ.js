// function printSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//       console.log(i);
//     }
//   }
  
// printSequence(0, 20);
  


















// function delayedHello() {
//     setTimeout(function() {
//       console.log("Hello World");
//     }, 5000);
//   }
  
// delayedHello();
  
























// function printCurrentTime(callback) {
//     const currentTime = new Date();
    
// callback(currentTime);
//   }
  

//   function displayTime(time) {
//     const hours = time.getHours().toString().padStart(2, '0');
//     const minutes = time.getMinutes().toString().padStart(2, '0');
//     const seconds = time.getSeconds().toString().padStart(2, '0');
    
//     console.log(`Current time is: ${hours}:${minutes}:${seconds}`);
//   }
  

// printCurrentTime(displayTime);
  





















// function оставшееся_время(целевая_дата) {
//     var текущая_дата = new Date();
//     var целевая_дата = new Date(целевая_дата);

//     var разница = целевая_дата - текущая_дата;

//     var дни = Math.floor(разница / (1000 * 60 * 60 * 24));
//     var часы = Math.floor((разница % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var минуты = Math.floor((разница % (1000 * 60 * 60)) / (1000 * 60));

//     return дни + " дней " + часы + " часов " + минуты + " минут";
// }

// var целевая_дата = "2025-03-01 12:00";
// console.log(оставшееся_время(целевая_дата));
























