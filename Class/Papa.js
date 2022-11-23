class Papa{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

class Son extends Papa{
    constructor(name){
        console.log(`creating son class`);
        super(name);
    }
}

son1 = new Son (`Hiren`);
son1.greet();
