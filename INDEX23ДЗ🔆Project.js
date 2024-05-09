let arr = [3, 5, 1, 4, 2]
// let arrSort = [1, 2, 3, 4, 5]

















// let A = 5,
//     B = 3

//     console.log("До", A, B);
//     if (A > B){
//         // Змінюємо місцями
//         let temp = A
//         A = B
//         B = temp
//     }
//     console.log("Після", A, B);













// let count = 0
// for(j=0; j<arr.length; j++) {
//     for(let i=0; i < arr.length - 1; i++){
//         let A = arr[i],
//         B = arr[i + 1]
//         if (A > B){
//             // Змінюємо місцями
//             let temp = A
//             A = B
//             B = temp
//         }
//         arr[i]=A
//         arr[i + 1]=B
//     }
   
// }














// console.log("До", arr);
// for(j=0; j<arr.length; j++) {
//     for(let i=0; i < arr.length - 1; i++) {
//         if (arr[i] < arr[i + 1]) {
//             // Змінюємо місцями
//             let temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//         }
//     }
// }
// console.log("Після", arr);















// function sort(arr){
//     let result = [...arr]
//     for(j=0; j < result.length; j++) {
//     for(let i=0; i < result.length - 1; i++) {
//         if (result[i] < result[i + 1]) {
//             // Змінюємо місцями
//             let temp = result[i]
//             result[i] = result[i + 1]
//             result[i + 1] = temp
//         }
//     }
// }
// return result
// }


















// function sort(arr, func){
//     let result = [...arr]
//     for(j=0; j < result.length; j++) {
//     for(let i=0; i < result.length - 1; i++) {
//         if (func(result[i], result[i + 1])) {
//             // Змінюємо місцями
//             let temp = result[i]
//             result[i] = result[i + 1]
//             result[i + 1] = temp
//         }
//     }
// }
// return result
// }

// let users = [
//     {name: "Аня", age: 15},
//     {name: "Юра", age: 21},
//     {name: "Яна", age: 17},
//     {name: "Ваня", age: 14},
//     {name: "Антон", age: 11}
// ]

// console.log("До", arr);
// console.log("Після", sort(arr, function(A, B){
//         return A.name < B.name
// }));