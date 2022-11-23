//with ES6 (Object Destructuring)
//object
let person = {
    fname : `Hiren`,
    lname : `Bathani`,
    gender : `Male`,
    contact : 8200440873
};
//extracting multiple properties
let {fname,lname,gender,contact} = person

console.log(fname,lname,gender,contact);



//without ES6 
//object
let Person = {
    Fname : `Hiren`,
    Lname : `Bathani`,
    Gender : `Male`,
    Contact : 8200440873
};
//javascript Extract
let Fname = Person.Fname;
let Lname = Person.Lname;
let Gender = Person.Gender;
let Contact = Person.Contact;


console.log(Fname,Lname,Gender,Contact);


//with ES6 (array destructuring)
let colors = [`Red`, `White`, `Green`]

//destructuring assignment
let [color1,color2,color3] = colors;

console.log(color1);
console.log(color2);
console.log(color3);


//array destructuring and rest operator
let Colors = [`Red` , `White` , `Pink`, `Black`, `Yallow`, `Green`];

//destructuring Assignment
let [a,b,...args] = Colors

console.log(Colors[0],Colors[1]);
console.log(args);


//Javascript Default Parameter

function sum(x = 5, y = 5){
    return x + y ;
 }
 
 console.log(sum(1,4));
 console.log(sum(2,1));
 console.log(sum());


 //passing parameter as default values

 function add(a = 1 , b = a , c = a + b){
    console.log(a + b + c);
 }
 add();