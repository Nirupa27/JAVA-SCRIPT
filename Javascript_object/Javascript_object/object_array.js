//object Example
let person = {
    Firstname : `Hiren`,
    Lastname : `Bathani`,
    age : `25`,
    Email : `hirenpatel96661@gmail.com`,
}

// adding new property to an object
person.middlename = `Bharatbhai`;

//modify property
person.Email = `bathanih.v@gmail.com`;
console.log(person[`Email`]);

//accessing using array like notation
console.log(person[`Firstname`]);
console.log(person[`Lastname`]);

//check property
console.log(`Firstname` in person);
console.log(`middlename` in person);

//delete Property
delete person.middlename;
console.log(person[`middlename`]);