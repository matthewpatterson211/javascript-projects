console.log("Some Programming \nLanguages:");

console.log("Python\nJavaScript\tJava\nC#\nSwift");

const input = require('readline-sync');

let firstName = input.question("Enter your first name: ")
let lastName = input.question("Enter your last name: ");

console.log("First name:" + firstName);
console.log("Last name:" + lastName);
console.log("full name:" + firstName + lastName);