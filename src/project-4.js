// Do not change any of the function names

const multiplyArguments = (...args) => {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if (!args.length) return 0;
  return [...args].reduce((sum, arg) => sum * arg, 1);
};

const invokeCallback = cb => cb();
// invoke cb

const sumArray = (numbers, cb) => cb(numbers.reduce((sum, n) => sum + n, 0));
// sum up all of the integers in the numbers array
// pass the result to cb
// no return is necessary

const forEach = (arr, cb) => {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  for (let i = 0, len = arr.length; i < len; i++) {
    cb(arr[i]);
  }
};

const map = (arr, cb) => {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  const newArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
};

const getUserConstructor = () => {
  // create a constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
  const User = function ({ username, name, email, password }) {
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
  };
  User.prototype.sayHi = function () {
    return `Hello, my name is ${this.name}`;
  };
  return User;
};

const addPrototypeMethod = (Constructor) => {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = () => 'Hello World!';
};

const addReverseString = () => {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  // eslint-disable-next-line no-extend-native
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  };
};

const nFactorial = (n) => {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n < 1) return 1;
  return (n * nFactorial(n - 1));
};

const cacheFunction = (cb) => {
  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
  const cache = {};
  return (arg) => {
    if (!Object.prototype.hasOwnProperty.call(cache, arg)) cache[arg] = cb(arg);
    return cache[arg];
  };
};


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  invokeCallback,
  sumArray,
  forEach,
  map,
  getUserConstructor,
  addPrototypeMethod,
  addReverseString,
  nFactorial,
  cacheFunction
};
