// OBJECT Destructuring

// const person = {
//   name: 'Nick',
//   location: {
//     city: 'Cincinnati',
//     temp: 59
//   }
// };

// const { name = 'Anonymous', age = 'not going to tell age' } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penquin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// ARRAY Destructuring

// const address = [];

// const [, city, state = 'NY', zip] = address;

// console.log(`You are in ${state}`);

const item = ['coffee (iced)', '$2.00', '$2.50', '$2.75'];

const [coffee = 'coffee (hot)', , , large] = item;

console.log(`A large ${coffee} costs ${large}!`);
