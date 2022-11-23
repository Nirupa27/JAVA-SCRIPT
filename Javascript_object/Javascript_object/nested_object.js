let person = {
    Firstname : `Hiren`,
    Age : 25,
    Gender : `Male`,
        Bike : {
            bike1 : `Pulsar`,
            bike2 : `Passion_pro`
        }
}

console.log(person.Bike.bike1); // accessing using dot
console.log(person.Bike[`bike1`]); // accessing using array like notation
