// class person{
//     name = 'Myroslav'
//     age = 14

//     data(){
//         console.log('JavaScript')
//         console.log(this.name,this.age)
//     }
// }

// let a = new person()

// console.log(a.name,a.age)
// a.data()


















// class person{
//     #name = "Myroslav"
//     #age = 14

//     data(){
//         console.log(this.#name, this.#age)
//     }
// }

// let a = new person()
// console.log(a.#age)




















// class НеКонструктор {
//     #a = 31
//     Sum(num1){
//         console.log(num1 + this.#a)
//     }
// }

// let obj = new НеКонструктор();
// obj.Sum(5)
















// class MyClass {
//     НеКонструктор(field1, field2) {
//         this.field1 = field1;
//         this.field2 = field2;
//     }

//     changeFields(newValue1, newValue2) {
//         this.field1 = newValue1;
//         this.field2 = newValue2;
//     }
// }

// let myObject = new MyClass("поле1", "поле2");
// console.log(myObject.field1);
// console.log(myObject.field2);

// myObject.changeFields("нове значення 1", "нове значення 2");
// console.log(myObject.field1);
// console.log(myObject.field2);