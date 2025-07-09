/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
// let result = "5" - 2;
// console.log("The result is: " + result);

// let isValid = Boolean("false");
// if (isValid) {
//     console.log("This is valid!");
// }

// let age = "25";
// let totalAge = age + 5;
// console.log("Total Age: " + totalAge);


console.log("****************Part 1**Debugging challenge****************/");

// 
//let result = "5" - 2;
let result = "5" - 2; // Here there is no need to explicitly convert string to number for subtraction.
//As JavaScript converts automatically. 
// But it is always good to convert to Numbers before any arithmetic opeerations
console.log("The result is : " + result);

let isValid = Boolean("false"); // result is true 
console.log(Boolean("true")); // result is true
console .log(Boolean(""));  // result is false
// From the above debugging statement Boolean() is checking whether the given string is empty or not.
// The Boolean() is not converting string value of "false" to false.
//So we need to handle this with strict equality operator (===).
 isValid = "false" === false;
if (isValid) {
    console.log("This is valid!");
} 

let age = "25";
let totalAge = age + 5;
// Since age is string + operator concatenates two values.
 age =  Number("25"); 
 totalAge = age + 5;
console.log("Total Age: " + totalAge);

console.log("*****************Part2***Implicit conversion*****************");

// ### Implicit conversion
// Need to verify the user voting age.
// the userAge should be 18 and above.
//if the user enters 18 above values  it should display "YOU can VOTE"
//else "YOU can't Vote".

let userAge ;
//userAge = 17;
//userAge = null;
//userAge = "abc";
//userAge = "17years";
//userAge =  "18";

console.log(typeof(userAge)); // undefined
userAge = null;
console.log(userAge); // null
userAge = "17years";
console.log(Number(userAge)); // NaN

userAge =  "18";
if(Number(userAge) >= 18) {
  console.log("You are eligible to vote");
}
else {
  console.log("Please type number value");
}
  
console.log("************************Explicit conversion********************************");

//Explicit conversion

let costOfApples = "4$";
let costOfOranges ="5$";
let totalAmount = costOfApples + costOfOranges; 
// Adding the items price is not possible as
//  it is concatenating the strings.
console.log(totalAmount); //output is 4$5$


totalAmount = Number(costOfApples) + Number(costOfOranges);
console.log(totalAmount); // the result is NaN,
//  Eventhough the values in the string is converted to Number(), the $ is not accepted
// and resulted as Nan.
totalAmount = parseInt(costOfApples) + parseInt(costOfOranges);
console.log(totalAmount); // output is 9
// Here the parseInt() explictly used the type conversion which extracts any symbols other than number

console.log("............................");



