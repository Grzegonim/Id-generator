const fs = require('fs');
const genders = ['M', 'W'];
const maleNames = ['James', 'Robert', 'John', 'Michael', 'David', 'William', 'Richard', 'Joseph'];
const femaleNames = ['Olivia', 'Emma', 'Charlotte', 'Amelia', 'Sophia', 'Isabella', 'Mia', 'Evelyn'];
const lastNames = ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Thomas'];
const randomNumber = number => {
 return Math.floor(Math.random() * (number));
};

const randChoice = () => {
  const people = [];
  for(let i = 0; i < 20; i++){
    const peopleObj = {
      gender: '',
      firstName: '',
      lastName: '',
      age: '',
    };
    peopleObj.gender = genders[randomNumber(2)];
    if(peopleObj.gender === 'M'){
      peopleObj.firstName = maleNames[randomNumber(8)];
    }else{
      peopleObj.firstName = femaleNames[randomNumber(8)];
    };
    peopleObj.lastName = lastNames[randomNumber(8)];
    peopleObj.age = randomNumber(60) + 18;
    people.push(peopleObj);
  }
  return people;
};

const data = JSON.stringify(randChoice());


fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});