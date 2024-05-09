// class Person{
//     name = "MirosAnt";
// }

// class Human extends Person{
//     print(){
//         console.log(this.name)
//     }
// }


// let a = new Human()
// a.print()


















// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     print(){
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     }
// }


// class Employee extends Person{
//     constructor(name, age, company){
//         super(name,age);
//         this.company = company;
//     }
//     work(){
//         console.log(`${this.name} works in ${this.company}`);
//     }
// }

// const tom = new Person("Tom", 34);
// tom.print()

// const sam = new Employee("Sam", 25, "Google")
// sam.print()
// sam.work()




















// class MyClass {
//     constructor(firstField, secondField) {
//       this.firstField = firstField;
//       this.secondField = secondField;
//     }
//   }
  
//   const myInstance = new MyClass("Hello", "World");
  
//   console.log("Перше поле:", myInstance.firstField);
//   console.log("Друге поле:", myInstance.secondField);




















// class MyBaseClass {
//     constructor(number1, number2) {
//       this.number1 = number1;
//       this.number2 = number2;
//     }
//   }
  
//   class MyDerivedClass extends MyBaseClass {
//     addNumbers() {
//       return this.number1 + this.number2;
//     }
//   }
  
//   const baseInstance = new MyBaseClass(10, 20);
  
//   const derivedInstance = new MyDerivedClass(5, 7);
  
//   console.log("Результат додавання:", derivedInstance.addNumbers());
  



































// for (let i = 20; i <= 100; i += 20) {
//     console.log(i);
//   }
  
























// class Особа {
//     constructor(вік) {
//       this.вік = вік;
//     }
  
//     перевіритиПовноліття() {
//       return this.вік >= 18;
//     }
//   }
  
//   // Приклад використання:
//   const особа1 = new Особа(25);
//   console.log(`Чи особа повнолітня? ${особа1.перевіритиПовноліття() ? 'Так' : 'Ні'}`);
  
//   const особа2 = new Особа(16);
//   console.log(`Чи особа повнолітня? ${особа2.перевіритиПовноліття() ? 'Так' : 'Ні'}`);
















// // Створення масиву
// let array = [2, 4, 6, 8];

// // Додавання числа на початок
// array.unshift(0);

// // Додавання числа на кінець
// array.push(10);

// // Виведення результату
// console.log(array);















