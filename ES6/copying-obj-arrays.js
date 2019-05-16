const person ={
    name: 'Max'
};

const secondPerson = {
    ...person
};

//this does NOT copy the object, simply
//references the same space in memory
const thirdPerson = person;

person.name = 'Pedro';

console.log(person, secondPerson, thirdPerson);