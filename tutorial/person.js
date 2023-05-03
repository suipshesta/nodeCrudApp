// const person={
//     name:"sudip kumar shrestha",
//     address:"Lokanthali, bhaktapur",
//     age:32
// }

// module.exports=person;

// create class
class Persons{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greetings(){
        console.log(`Hello my name is ${this.name} and my age is ${this.age}.`);
        // console.log(`Hello my name is `+this.name+` and my age is `+this.age+`.`);
    }
}

// export modules,packages,library
module.exports=Persons;