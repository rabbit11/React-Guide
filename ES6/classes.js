//ES7
class Human{
    gender = 'Male';
    printGender = () => {
        console.log(this.gender);
    }
}


//ES6
class Person extends Human{
    constructor(){
        super();
        this.name = 'Pedro';
    }
    printMyName(){
        console.log(thisname);
    }
}

const person = new Person();

person.printMyName();
person.printGender();