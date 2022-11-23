let Person = {
    Firstname : `Hiren`,
    Lastname : `Bathani`,
    Age : 25
}
//normal output
console.log(Person);

// convert to JSON Stringify
mydata = JSON.stringify(Person);

//JSON Data
console.log(mydata);

//convert to JSON parse
mydata = JSON.parse(mydata);

//JSON parse data
console.log(mydata);