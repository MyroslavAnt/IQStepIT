// function User(pName,pAge){
//     this.name = pName;
//     this.age = pAge;
//     this.print = function(){
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     };
// }

// const tom = new User("Tom",39);

// console.log(User.prototype);
// console.log(tom.__proto__);
// console.log(Object.getPrototypeOf(tom));














// function User(pName,pAge){
//     this.name = pName;
//     this._age =  pAge;
//     this.print = function(){
//         console.log(`Name: ${this.name} Age: ${this._age}`);
//     };
// }


// const tom = new User("Tom",39);
// tom.age = 11500;
// tom.print();























function User(pName,pAge){
    this.name = pName;
    let _age = pAge;

    this.getAge = function(){
        return _age;
    }
    this.setAge = function(age){
        if(age > 0 && age < 110){
            _age = age
        }
        else{
            console.log("Недопустиме значення");
        }
    }
    this.print = function(){
        console.log(`Name: ${this.name} Age: ${_age}`);
    };
}
const tom = new User("Tom",39);
console.log(tom.getAge())
tom.setAge();
console.log(tom.getAge())
tom.setAge(18);
console.log(tom.getAge())