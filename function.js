// Example 1: Display a Text

// program to print a text
// declaring a function
function greet(){
    console.log("Hello there!");
}
// calling the function
greet();

// Example 2: Function with Parameters

// program to print the text
// declaring a function

function greet(name){
    console.log("hello " + name + " :)");
}

// variable name can be different
let name = prompt("Enter a name");

//calling a function

greet(name);

// Example 3: Add Two Numbers

// program to add two numbers using a function
// declaring a function

function add(a,b){
console.log(a+b);
}
 add(5,10);
 add(52,10);

//  Example 4: Sum of Two Numbers

// program to add two numbers
// declaring a function

function add(a,b){
    return a + b;
}

// take input from the user

let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));

// calling function

let result = add(number1,number2);

// display the result

console.log("The sum is " + result);


// Function Expressions

// program to find the square of a number
// function is declared inside the variable

let x = function(num) { return num * num};
console.log(x(4));

// can be used value for another variable

let y = function(num) { return num * num * num};
console.log(y(5));