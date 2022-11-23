// Function Statement aka Function Declaration
 function a(){
    console.log(`a called`);
 }
 a();

 //Function Expression 

 let b = function(){
    console.log(`b called`);
 }
 b();

 //anonymyous Function

 //function (){

// }

//Name Function Expression

c = function xyz(){
   console.log(`C called `);
}
c();

//difference Between Parameter & Arguments

d = function(param1, param2){
   console.log(`d called ${param1} ${param2}`)
}
d(1,2);


d = (param1,param2) => return {`d called ${param1} ${param2}`}
console.log(d(1,2));

//First class function

e =  function (param3) {
   console.log(`e called ${param3}`)
   return function xyz(){
      console.log(`Hello`);
   }
}
e(55)();
