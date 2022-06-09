// demonstrate types;

// create custom type for following

const student: any = {
  name: 'virendra',
  age: 24,
};

// all argumeents should be number type.
// make b and c optional
// give a default value 0 to the a;

function sum(a, b, c) {
  return a + b + c;
}

// users argument should be string or string array.
//  return type of fucntion should be string;
function sayHello(users) {
  console.log('....');
}

// gender argument can have 2 values M or F
function setGender(gender) {
  console.log(gender);
}

setGender('ABC');
