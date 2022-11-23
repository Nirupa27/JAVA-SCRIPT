function dosomethingAsync(then){
    setTimeout(then,2000);
    console.log(`call first asynchronously`);
}

dosomethingAsync(()=>console.log(`Done`))

console.log(`call second`);