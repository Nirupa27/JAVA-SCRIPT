class Person{
    constructor(name,age){
    this.myname = name
    this.myage = age
    }
    //defining method
    yourname(){
        console.log(`Hello ${this.myname + this.myage}`);
    }
}

//create object
Person1 = new Person(`Hiren`,`25`);
Person2 = new Person(`Ashish`,`21`);

//accessing property
console.log(Person1.myname);
console.log(Person2.myage);

//accessing method
Person2.yourname();
