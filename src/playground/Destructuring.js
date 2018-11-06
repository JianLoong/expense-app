console.log("Lol");

const person = {
  name: "Jian",
  age: 28,
  location: {
    city: "Melbourne",
    temperature: 29
  }
};

//ES6 Destructuring
const { name, age } = person;

console.log(`${name} is ${age}`);

console.log(`Its ${person.location.city} in ${person.location.temperature}`);
