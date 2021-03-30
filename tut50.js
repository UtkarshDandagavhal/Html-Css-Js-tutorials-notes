console.log("This is tutorial 50");

// let name = "Harry";
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");


function sum(a,b,c){
    let d = a + b + c;
    return d;

    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}


// As we can see in the above example, we are writing a particular set of codes every time. To avoid this JavaScript functions come into action. We can write the above code with the help of JavaScript functions as follows-

// function greet(name) {
//   console.log(name + " is a good boy");
// }
// let name = "Harry";
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// greet(name);
// greet(name1);
// greet(name2);
// greet(name3);

// We have increased the use of code reusability with the help of a JavaScript function. Also, we can increase more number of parameters in the JavaScript functions without writing the code again. Let us see the below code-

function greet(name, greetText){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}
let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);

// We also use some functions to make it return a particular value. Return value means it gives you some output in return. For example, if we write-

// let returnVal = greet(name3);
// console.log(returnVal)

// The output will be undefined because the parameter greet does not return anything. It just prints the value through console.log. But if we make a new function as follows-

let returnVal = sum(1,2,3);
console.log(returnVal);

