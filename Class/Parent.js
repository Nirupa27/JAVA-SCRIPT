//Inheritance Method
//parent Class
class Parent{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
//Inheriting Parent class
class Student extends Parent{

}

class Professor extends Parent{
    subject(){
        console.log(`I teach Programming Language ${this.name}`)
    }
}
//Object of Student class
student1 = new Student (`Hiren`);
student1.greet();

professor1 = new Professor (`Hiren Sir`);
professor1.greet();
professor1.subject();




