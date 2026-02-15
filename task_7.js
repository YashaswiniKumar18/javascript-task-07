// ================================
// SECTION 1 – Date Object Tasks
// ================================

// TASK 1 – Custom Digital Clock
function startClock() {
  setInterval(() => {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(`Current Time: ${hours} : ${minutes} : ${seconds}`);
  }, 1000);
}

// Uncomment to run clock
// startClock();


// TASK 2 – Find Current Day Name
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date();
console.log("Today is " + days[today.getDay()]);


// TASK 3 – Age Calculator
let birthYear = 2003;
let currentYear = new Date().getFullYear();
console.log("Your age is " + (currentYear - birthYear));


// TASK 4 – Create Specific Date
let customDate = new Date();
customDate.setFullYear(2020);
customDate.setMonth(7); // August (0-based index)
customDate.setDate(15);
customDate.setHours(10);
customDate.setMinutes(30);
customDate.setSeconds(45);

console.log("Custom Date: " + customDate.toLocaleString());


// ================================
// SECTION 2 – setTimeout & setInterval
// ================================

// TASK 5 – Delayed Message
setTimeout(() => {
  console.log("Welcome Naveen");
}, 3000);


// TASK 6 – Stop Interval After 5 Seconds
let count = 1;

let interval = setInterval(() => {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(interval);
    console.log("Stopped");
  }
}, 1000);


// ================================
// SECTION 3 – Promise Practice
// ================================

// TASK 7 – Simple Promise
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Valid number");
    } else {
      reject("Invalid number");
    }
  });
}

checkNumber(15)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise execution completed");
  });


// ================================
// SECTION 4 – Fetch API Task
// ================================

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      console.log("Product: " + product.title);
      console.log("Price: " + product.price);
      console.log("-----------------");
    });
  })
  .catch(error => console.log("Error:", error));


// ================================
// SECTION 5 – Execution Order Task
// ================================

function one(){
  console.log("one");
}

function two(){
  console.log("two");
}

function three(){
  console.log("three");
}

one();
setTimeout(two,0);
three();

/*
Output:
one
three
two

Explanation:
setTimeout is asynchronous. Even with 0 delay,
it goes to the callback queue.
So synchronous code runs first.
*/
