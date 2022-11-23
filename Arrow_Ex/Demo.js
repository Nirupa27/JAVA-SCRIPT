//1. Simple Function
let msg = () => console.log("Function called");
msg();

//2. Parameter
let get = (x) => console.log(`Hi my name is ${x}`);
get(`Hiren`);

//3. Parameter with Return Value
let sum = (x,y) => x+y;
let ans = sum(10,20);
console.log(`Sum is ${ans}`);

//4. Ternury Condition
let age = 5;
let welcome = (age < 18) ? //condition
() => console.log(`Baby`) : //true
() => console.log(`Adult`); //false
welcome(); //Baby

//5. Return Value Multiple line
let addtion = (a,b) => {
    let result = a + b;
    return result;
}
return1 = addtion(10,20);
console.log(return1); //30

//spread operator

const odd = [1,3,5];
const combined =[...odd,6,7,8,...odd];
console.log(combined);//[6,7,8,1,3,5]

myfunction = function(...args){
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
}
myfunction (3); //[3]
myfunction (3,4,5); //[3,4,5]