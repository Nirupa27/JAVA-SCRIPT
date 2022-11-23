class Car{
    constructor(carname){
        this.name = carname;
    }
    get carname(){
        return this.name
    }
    set carname(x){
        this.name = x;
    }
}
//object
myobj = new Car (`BMW`);
console.log(myobj.carname);
//assign
myobj.carname = `Audi`;
//get
console.log(myobj.carname);
myobj.carname = `Hondacity`
//get
console.log(myobj.carname);