//1. Example 1
 function myfunc (...args){
    console.log(args);
}
myfunc(3);
myfunc(4,5,6);

//2. Example 2

function demo(...args){
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
}
demo(10,20);

//3. Example 3

function demo (...args){
    for(i=0; i<args.length; i++){
        console.log(args[i]);
    }
}
demo(10,20,30);

//4. Example 4 for sperad operator

odd = [1,3,5];
even = [2,4,6];
combined = [...odd,...even];
console.log(`value is ${combined}`)
