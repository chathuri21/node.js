// const person = {
//     name: 'John Doe',
//     age: 35
// }

// module.exports = person;

// console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greething() {
        console.log(`My name if ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;