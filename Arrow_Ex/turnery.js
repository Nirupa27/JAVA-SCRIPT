age = 19;

voterid = (age < 18) ?

() => console.log(`Not Eligible`):
() => console.log(`Eligible`);

voterid();