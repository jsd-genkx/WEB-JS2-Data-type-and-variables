const person = {
  firstName: 'John',
  age: 30,
  gender: 'male',
  isEmployed: true
};

/*
CODE HERE:
display "firstName = ?" using person Object
display "age = ?" using person Object
*/

const person2 = {
  firstName: 'James'
}
/*
  CODE HERE:
  add James age
*/
console.log("age = ", person2['age']);

/*
  CODE BELOW:
  set value of key to something else
  and It should display James
*/
const key = '????';
console.log(person[key]);

/*
  CODE HERE: delete age of person 2
*/
console.log('person2 = ', person2);

const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2022,
  features: ['Air conditioning', 'Power windows'],
  owner: {
    name: 'Lak',
    age: 2
  }
};

/*
  CODE HERE: 
  display Lak using car Object
  diaplay Power windows using car Object
*/
const students = [
  {
    id: 1,
    name: 'Aof'
  },
  {
    id: 41,
    name: 'Egg'
  },
  {
    id: 2,
    name: 'Asman'
  }
];

/*
  CODE HERE: 
  display Aof using students Array
  display Asman using students Array
*/
