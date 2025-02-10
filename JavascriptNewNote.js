//==========================================================================================
// W3school

//JavaScript Where To  --->JavaScript code is inserted bet

// 1. The <script> Tag

/*
<script>

document.getElementById("demo").innerHTML = "My First JavaScript";     // script can placed in <body> or <head> of html page

</script>
*/



// 2. External JavaScript


//External file: myScript.js
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}


//-------------------------------------------------------------------------
/*
JavaScript Display Possibilities

//JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().

*/

//----------------------------------------------------------------------------

//JavaScript Statements  --->In a programming language, these programming instructions are called statements. A JavaScript program is a list of programming statements.

// JavaScript statements are composed of:  Values, Operators, Expressions, Keywords, and Comments.


//Statement vs Expression in JavaScript
/*

1️⃣ What is an Expression?
An expression is a piece of code that evaluates to a value. It can be a simple value, a variable, a function call, or a combination of operators.

*/

//✅ Examples of Expressions:

5 + 3;                                        // Arithmetic expression → evaluates to 8
"Hello" + " World";                           // String expression → evaluates to "Hello World"
let sum = 10 * 2;                              // Expression → evaluates to 20
function add(a, b) { return a + b; }         // Function expression
//✅ Key Feature: Always produces a value.

/*
2️⃣ What is a Statement?
A statement is a complete instruction that performs an action. It may contain expressions inside it.

*/

//✅ Examples of Statements:
 
let X = 10;                             // Variable declaration statement
if (X > 5) {                            // Conditional statement
    console.log("X is greater than 5");
}

for (let i = 0; i < 5; i++) {  // Loop statement
    console.log(i);
}
// ✅ Key Feature: Executes an action but does not return a value.

// Difference Between Statements and Expressions
        
/*                                                           Statements               Expressions

Definition  ------------------------------------------>    Produces a value      	Performs an action
Can be assigned to a variable?        ----------------->	  ✅ Yes	                    ❌ No
Example	   ---------------------------->                      5 + 3 → 8            	let x = 5 + 3;
Can it be executed directly?	------------------>           ✅ Yes	                    ✅ Yes
Used inside statements?	         -------------------- >       ✅ Yes	                    ❌ No





*/ 

//Example Comparing Expression & Statement

// Expression (produces a value)
let result = 10 + 5; // Expression: 10 + 5 evaluates to 15

// Statement (performs an action)
if (result > 10) {  // Statement: Checks a condition
    console.log("Result is greater than 10"); // Statement: Prints output
}
/*
🔹 Simple Rule:
✅ If it returns a value → Expression
✅ If it does something (like declaring variables, loops, conditions) → Statement
*/

//Semicolons ;------------->Semicolons separate JavaScript statements.

//------------------------------------------------------------------------------------------------------

//JavaScript Identifiers / Names ---------> name of variables and keywords and function  

//javascript  case sensitive

//Camel Case

/*
1. Underscore:

first_name, last_name, master_card, inter_city.

2. Upper Camel Case (Pascal Case):

FirstName, LastName, MasterCard, InterCity.


3. Lower Camel Case:----------->JavaScript programmers tend to use camel case that starts with a lowercase letter:

firstName, lastName, masterCard, interCity.

*/

//-------------------------------------------------

// let, const, var

//------------------------------------------------

//Types of JavaScript Operators

/*
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. String Operators       --------->Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".
5. Logical Operators
6. Bitwise Operators   // see it later
7. Ternary Operators    || Conditional (Ternary) Operator
8. Type Operators

*/


//1. Arithmetic Operators  ----->Arithmetic Operators are used to perform arithmetic on numbers:

/*

         Operator	                 Description

            +	                       Addition
            -	                       Subtraction
            *	                       Multiplication
            **	                       Exponentiation (ES2016)
            /	                       Division
            %	                       Modulus (Division Remainder)
            ++	                       Increment
            --	                       Decrement
*/

/*
Operators and Operands---->Operand	Operator	Operand
                             100	  +	          50
*/

//2. Assignment Operators  ------->Assignment operators assign values to JavaScript variables.

/*
                                        Operator	         Example	          Same As
Simple Assignment                           =	              x = y	               x = y
Addition Assignment Operator               +=	              x += y	           x = x + y
Subtraction Assignment Operator            -=	              x -= y	           x = x - y
Multiplication Assignment Operator         *=	              x *= y	           x = x * y
Division Assignment Operator               /=	              x /= y	           x = x / y
Remainder Assignment Operator              %=	              x %= y	           x = x % y
Exponentiation Assignment Operator         **=	              x **= y	           x = x ** y
*/

//3. Comparison Operators   --->Comparison and Logical operators are used to test for true or false.
                                                                //https://www.w3schools.com/js/js_comparisons.asp
/*
                                              Operator	            Description                            Comparing	      Returns

                                               ==	                  equal to                              // x == 8           False    doesnt validate datatype   (for more google it)
                                               ===	                  equal value and equal type           
                                               !=	                  not equal
                                               !==	                  not equal value or not equal type
                                               >	                  greater than
                                               <	                  less than
                                               >=	                  greater than or equal to
                                               <=	                  less than or equal to
                                               ?	                  ternary operator
*/



//5. Logical Operators

/*
                              Operator	       Description                 Example                  Result

                                &&	            logical and       	(x < 10 && y > 1)                true
                                ||	            logical or          (x == 5 || y == 5)               false
                                !	            logical not         	!(x == y)                    true
*/



// 7. Ternary Operators or  Conditional (Ternary) Operator   ---> JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

//Syntax
variablename = (condition) ? value1:value2 

//Example
let voteable = (age < 18) ? "Too young":"Old enough";


//8. Type Operators

/*
Operator	                   Description

typeof	                 Returns the type of a variable
instanceof	             Returns true if an object is an instance of an object type

*/

//The ??= Operator  ----> The Nullish coalescing assignment operator is used between two values.         (Google it for more)



//-----------------------------------------------------------------------------------------

// Data Types in JavaScript

/*

JavaScript has two main categories of data types:
1️.Primitive Data Types (stored directly in memory)
2️.Non-Primitive (Reference) Data Types (stored as references in memory)

*/
// 1️.Primitive Data Types (stored directly in memory)

let name = "John";   // String
let age = 25;        // Number
let isStudent = true; // Boolean
let city;            // Undefined
let salary = null;   // Null
let bigNumber = 12345678901234567890n; // BigInt
let id = Symbol("unique"); // Symbol

//2️.Non-Primitive (Reference) Data Types (stored as references in memory)

let Person = { name: "John", age: 30 };       // Object
let numbers = [10, 20, 30];                   // Array
function greet() { console.log("Hello"); }    // Function

/*
Difference between primitive and non-primitive data type

Feature	            Primitive Data Types	           Non-Primitive Data Types

Storage	            Stored in stack memory	            Stored in heap memory
Reference	        Directly stored	                    Stored by reference
Mutability	        Immutable (cannot be changed)	    Mutable (can be modified)
Example	                let x = 10;	                    let obj = { name: "John" };

*/
// Type checking with typeof()

console.log(typeof "Hello");         // "string"
console.log(typeof 100);             // "number"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (JavaScript bug)-------->  This is a known bug in JavaScript. null is a primitive value, but typeof null incorrectly returns "object".
console.log(typeof []);              // "object" (Arrays are objects)-----> Arrays are a special type of object in JavaScript.
console.log(typeof function(){});    // "function"


//===========================================================================================

// video content

//function 03.38.33   ----->A JavaScript function is a block of JavaScript code, that can be executed when "called" and used many times , with same code with different argument to produce different result

//The code to be executed, by the function, is placed inside curly brackets: {}
//Syntax
function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }

  /*
1. Function parameters are listed inside the parentheses () in the function definition.
2. Function arguments are the values received by the function when it is invoked.
3. Inside the function, the arguments (the parameters) behave as local variables.

//Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

1. When an event occurs (when a user clicks a button)
2. When it is invoked (called) from JavaScript code
3. Automatically (self invoked)

*/

//Function Return

/*
1. When JavaScript reaches a return statement, the function will stop executing.
2. If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
3. Functions often compute a return value. The return value is "returned" back to the "caller":
*/
//Example
//Calculate the product of two numbers, and return the result:

// Function is called, the return value will end up in x
let ReturnFun = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
//============================================================
// JavaScript Objects

// object properties---> A real life car has properties like weight and color.   example:  car.name = Fiat, car.model = 500

// object methods ---->  A real life car has methods like start and stop.        example: car.start(), car.drive(), car.brake(), car.stop().

//JavaScript Object Definition

/*
1. Using an Object Literal ----> const person = {};

An object literal is a list of name:value pairs inside curly braces {}.

Example 1:
const person ={firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}        // name : value pairs  called  key : value pairs     // object literals are also called object initializers.

Example 2:

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

2. Using the new Keyword        ------> This example create a new JavaScript object using new Object(), and then adds 4 properties:

// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


3. Using an Object Constructor   ----->

i.    Sometimes we need to create many objects of the same type.
ii.   To create an object type we use an object constructor function.
iii.  It is considered good practice to name constructor functions with an upper-case first letter.

// object template
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";              // property default value      //A value given to a property will be a default value for all objects created by the constructor:
}

// Creating object using new person()

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

//Adding a Property to an Object ===> note: ****The new property will be added to myFather. Not to any other Person Objects.****
myFather.nationality = "English";



//Adding a Property to a Constructor ===> note: ****You can NOT add a new property to an object constructor****
Person.nationality = "English";  // show error

//Adding a Property to a Constructor (must add it to the constructor function prototype)
Person.prototype.nationality = "English";

// Constructor Function Methods ---> refer the W3school
*/

//----------------------------------------------------------------------------------------------------------------
//JavaScript Object Properties---------->  Properties can be changed, added, deleted, and some are read only.

//Accessing JavaScript Properties
/*
// 1. objectName.property
let age = person.age;

person.firstname + " is " + person.age + " years old.";

// 2. objectName["property"]
let age = person["age"];

person["firstname"] + " is " + person["age"] + " years old.";

// 3. objectName[expression]
let age = person[x];

person[x] + " is " + person[y] + " years old.";
*/
//---------------------------------------------------------------------------

// Deleting Properties  --------->The delete keyword deletes a property from an object:

/*
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
     OR
delete person["age"];

*/
//-------------------------------------------------------------------------

// Nested objects  -------> Property values in an object can be other objects:

/*
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

//can access nested objects using the dot notation or the bracket notation:

1.  myObj.myCars.car2;
2.  myObj.myCars["car2"];
3.  myObj["myCars"]["car2"];

*/
//-----------------------------------------------------------------------

//JavaScript Object Methods   ---->Object methods are actions that can be performed on objects. A method is a function definition stored as a property value.
/*
//  Object with method

 const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;    // this represent the current object
  }
};


// Accessing the object methods

syntax
objectName.methodName()

name = person.fullName()

name = person.fullName;      // If you access the fullName property without (), it will return the function definition:


//Adding a Method to an Object

person.name = function () {
  return this.firstName + " " + this.lastName;
};

// Using JavaScript Methods

person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();      //uses the JavaScript toUpperCase() method to convert a text to uppercase:
};

*/
//-----------------------------------------------------------------------------------------------------------------

// Javascript object Display  --> see later in W3school


//------------------------------------------------------------------------------------------------------------------------

// javascript string   ----> string for storing text with quotes


let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes


// Template Strings (``)   -----> Templates are strings enclosed in backticks (`This is a template string`). Templates allow single and double quotes inside a string:

//https://www.w3schools.com/js/js_strings.asp      (refer for more)

let text02 = `He's often called "Johnny"`;      //--->Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

//Template strings or String Templates or template literals------> all same name 

//Multiline Strings   --->Template Strings allow multiline strings:

let text03 =
`The quick
brown fox
jumps over
the lazy dog`;

//Escape Characters --->Because strings must be written within quotes, JavaScript will misunderstand this string:

// let text01 = "We are the so-called "Vikings" from the north.";  ----->The string will be chopped to "We are the so-called ". To solve this problem, you can use an backslash escape character.

/*
                                                  Code             Result	        Description
                                                  
                                                  \'	             '	             Single quote      ---->let text= 'It\'s alright.';
                                                  
                                                  \"	             "	             Double quote       ---->let text = "We are the so-called \"Vikings\" from the north.";
                                                  
                                                  \\	             \	             Backslash          ----->let text = "The character \\ is called backslash.";


Six other escape sequences are valid in JavaScript:--->(refer site for more)
*/


//Interpolation   ---->Template String provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.
/*
Syntax

${...}

*/

//Variable Substitutions------> template string allow variables in strings

//Example

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;   // Automatic replacing of variables with real values is called string interpolation.
 
//JavaScript Numbers 
//refer site for more
//   https://www.w3schools.com/js/js_numbers.asp

// javascript number methods  

//These number methods can be used on all JavaScript numbers:

/*
                      Method	                        Description
                      
                      toString()	            Returns a number as a string
                      
                      toExponential()	        Returns a number written in exponential notation
                      
                      toFixed()	                Returns a number written with a number of decimals
                      
                      toPrecision()	            Returns a number written with a specified length
                      
                      valueOf()	                Returns a number as a number

*/


// JavaScript Number Properties  (refer site)

/*
                                        Property	                                     Description
                                        EPSILON	                              The difference between 1 and the smallest number > 1.
                                        MAX_VALUE	                          The largest number possible in JavaScript
                                        MIN_VALUE	                          The smallest number possible in JavaScript
                                        MAX_SAFE_INTEGER	                  The maximum safe integer (253 - 1)
                                        MIN_SAFE_INTEGER	                  The minimum safe integer -(253 - 1)
                                        POSITIVE_INFINITY	                  Infinity (returned on overflow)
                                        NEGATIVE_INFINITY	                  Negative infinity (returned on overflow)
                                        NaN	                                  A "Not-a-Number" value
*/
//==========================================================

// Arrays in javascript------>An array is a special variable, which can hold more than one value.

const cars = ["Saab", "Volvo", "BMW"];

//Why Use Arrays?  ----->An array can hold many values under a single name, and you can access the values by referring to an index number.

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

//Creating an Array  ---->Using an array literal is the easiest way to create a JavaScript Array.

//Syntax:--------------------------------------->It is a common practice to declare arrays with the const keyword.
//const array_name = [item1, item2, ...];      

//1. Spaces and line breaks are not important. A declaration can span multiple lines

const car01 = [
    "Saab",
    "Volvo",
    "BMW"
  ];

//2. You can also create an array, and then provide the elements

const cars02 = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

//3. JavaScript Keyword new

const cars03 = new Array("Saab", "Volvo", "BMW");      //For simplicity, readability and execution speed, use the array literal method.


//Accessing Array Elements

// 1. You access an array element by referring to the index number

const cars04 = ["Saab", "Volvo", "BMW"];
let car = cars[0];                          //Note: Array indexes start with 0. [0] is the first element. [1] is the second element.

// Changing an Array Element

//This statement changes the value of the first element in cars:

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";


//Converting an Array to a String  ----->The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruits01 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();      //Banana,Orange,Apple,Mango


//Access the Full Array   ----> With JavaScript, the full array can be accessed by referring to the array name

const cars06 = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;


//Arrays are Objects ------>Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// Array  ---> numbers used to access its element  // person[0]

const person11 = ["John", "Doe", 46];    // John

// Object -----> names used to access its values    // person.firstName

const person12 = {firstName:"John", lastName:"Doe", age:46};  // John

/*
//The Difference Between Arrays and Objects

1. In JavaScript, arrays use numbered indexes.    //Arrays are a special kind of objects, with numbered indexes.
2. In JavaScript, objects use named indexes.
*/

//Array Elements are Objects ----> array can have objects, functions, arrays in array.
/*
myArray[0] = Date.now;
myArray[1] = myFunction;   // function
myArray[2] = myCar;        //object
*/

//Looping Array Elements 

/*
1.  for loop 
2.  forEach loop 

*/

//How to Recognize an Array

// The problem is that the JavaScript operator typeof returns "object":  (because array is an object)

const fruits12 = ["Banana", "Orange", "Apple"];
let type = typeof fruits;


// solution 1: ---->defined a new method Array.isArray():

Array.isArray(fruits);

// solution 2:-------> The instanceof operator returns true if an object is created by a given constructor

const fruits13 = ["Banana", "Orange", "Apple"];

(fruits instanceof Array);


// Nested arrays and objects ----->Values in objects can be arrays, and values in arrays can be objects

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

// To access arrays inside arrays, use a for-in loop for each array:

for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j];
    }
  }


  //=======================================================================================
  // Array methods  ----> refer the site

/* 
Basic 

1. Array length
2. Array toString()
3. Array at()
4. Array join()
5. Array pop()
6. Array push()

*/

/*
Search Methods
Sort Methods
Iteration Methods
Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()
*/


//===========================================================================
// Array find and Search methods    ---> refer the site

/*
Array indexOf()
Array lastIndexOf()
Array includes()
*/

/*
Basic Methods
Sort Methods
Iteration Methods
*/

/*
Array find()
Array findIndex()
Array findLast()
Array findLastIndex()
*/



//=====================================================================

// Array sort methods

/*
Alphabetic Sort
Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects
*/

/*
Basic Methods
Search Methods
Iteration Methods
*/

/*
//Numeric Sort

Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()
*/


//=================================================================

// Array iteration  ----->Array iteration methods operate on every array item:

/*
Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRight()
*/

/*
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)
*/

//=======================================================================
//refer the site
// Array const-------->common practice to declare arrays using const.


//=====================================================================

//Comparisons

//1. Comparison Operators and Logical Operators --> used to test true or false

//2. Conditional (Ternary) Operator --->contains a conditional operator that assigns a value to a variable based on some condition.

/*
Syntax

variablename = (condition) ? value1:value2 

*/

let voteale = (age < 18) ? "Too young":"Old enough";


//3.  The Nullish Coalescing Operator (??)  --------->The ?? operator returns the first argument if it is not nullish (null or undefined).

let nameE = null;
let textE = "missing";
let resultE = nameE ?? textE;

// 4. The Optional Chaining Operator (?.) ----->The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).


// Create an object:
const carE = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = carE?.name;

//======================================================================

// if, else and else if   ----->Conditional statements are used to perform different actions based on different conditions.

// conditional statements

/*
1. Use if to specify a block of code to be executed, if a specified condition is true
2. Use else to specify a block of code to be executed, if the same condition is false
3. Use else if to specify a new condition to test, if the first condition is false
4. Use switch to specify many alternative blocks of code to be executed
*/

/*
Syntax
// 1. if statement  -----> block of code executed if condition is true.

if (condition) {
  //  block of code to be executed if the condition is true
}

 
// 2. else statement   ----->  block of code executed if condition is false.

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}


// 3. The else if Statement   ----> specify new condition if the first condition is false.


if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

*/

//===============================================================================

// Switch statement  -------> The switch statement is used to perform different actions based on different conditions.

/*

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


This is how it works:

1. The switch expression is evaluated once.
2. The value of the expression is compared with the values of each case.
3. If there is a match, the associated block of code is executed.
4. If there is no match, the default code block is executed.
*/

// break keyword   ----> when reaches a break keyword, it breaks out of the switch block.

// default keyword   ---->  The default keyword specifies the code to run if there is no case match:


//==============================================================================================
// Different kinds of loops   (refer the site for more)

/*
1. for - loops through a block of code a number of times
2. for/in - loops through the properties of an object
3. for/of - loops through the values of an iterable object
4. while - loops through a block of code while a specified condition is true
5. do/while - also loops through a block of code while a specified condition is true
*/
// Note: It is better to use a for loop, a for of loop, or Array.forEach() when the order is important for an array.  (loop used in arrays)

// 1. for loop  ---->Loops can execute a block of code a number of times.

/*Loops are handy, if you want to run the same code over and over again, each time with a different value.

// Syntax  ---->The for statement creates a loop with 3 optional expressions:

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
1. Expression 1 is executed (one time) before the execution of the code block.
2. Expression 2 defines the condition for executing the code block.
3. Expression 3 is executed (every time) after the code block has been executed.
*/

//--------------------------------------------------------------------------------------------
// 2. for/in   ---->statement loops through the properties of an Object.

/* Syntax

for (key in object) {
  // code block to be executed
}

*/

// Array.forEach() ---->refer chatgp for more

//--------------------------------------------------------------------------------------------


//3. for/of       ---->statement loops through the values of an iterable object.

//loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.

/* Syntax

for (variable of iterable) {
  // code block to be executed
}

*/

//----------------------------------------------------------------------------------------------

// 4. while loop  ----->The while loop loops through a block of code as long as a specified condition is true.

/* Syntax------>note:  Do not forget to increase the variable used in the condition, otherwise the loop will never end!

while (condition) {
  // code block to be executed
}

*/


// 5. do while loop  --->   This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

/* Syntax  

do {
  // code block to be executed
}
while (condition);

*/

//============================================================================================

// Break and continue statement  

/*
 break     ---> break statement "Jumps out" of a loop.
 continue ----> continue statement "Jumps over" one iteration in the loop.
*/





//===========================================================================================

//basic

function Username(){
    console.log("Im a function");
}

Username();


//declared object and used in function

let member1 = {
    name1 : "John",
    age : 28

}

function obj1(){
    console.log("Hello Everyone", member1.name1, member1.age);
}

obj1();


//function with parameter

function people(UName, UAge){
    console.log("Hi " +UName+ " your age is " +UAge);
    // template literals
    console.log(`hi ${UName}, your age is ${UAge}`);


}
people("vijay", 28)
people("Ajay", 30)



//function with condition execution



function condition(Uname, Uage){

    if(Uage < 40){
        console.log(`hi ${Uname}, your age is ${Uage}`);
    }
}

condition("Gova", 50);

//default argument/ default parameter   3.49.00


function condition(Uname, Uage = 25){

    if(Uage < 40){
        console.log(`hi ${Uname}, your age is ${Uage}`);
    }
}

condition("Gova");        //hi Gova, your age is 25
condition("Gova", 35);    //hi Gova, your age is 35

//default variable 03.54.00

let employeeid = 123;
let newid = employeeid || "UQ1234"

console.log(newid);

// return type or non-return type  03.57.00


function findRectArea(l,b){
    console.log("Find Val"); 
    return l*b;
    console.log("Find Val");  // After return keyword, next statement wont work
}

let newValue = findRectArea(20,10);
console.log(findRectArea(200,50));
console.log(findRectArea(100,50), newValue);


// non-return type

function name1(){
    console.log("Non-return type");

}

// with return keyword
let noReturn = name1()   //Non-return type
console.log(noReturn);   //undefined


// with return keyword

function Name1(){
    console.log("Non-return type");
    return 12;

}
let NoReturn = Name1()    //Non-return type
console.log(NoReturn);    //12


//======================================================================

// Scope (var , let , const)   04.09.00

//1. function scope
//2. Block scope
//3. global scope

// var (Both function scope and global scope)

//1. function scope

function outerfun(){
    if(true){
        var funVar = "Im a variable"
        console.log(funVar); 
    }
    console.log(funVar);   //function scope
}
outerfun()   //calling the function

//2. Block scope (let & const)

function blockScope(){
    if(true){
        let blockVar = "im a block scoped variable"
        console.log(blockVar);  //im a block scoped variable

    }
    // console.log(blockVar);  //ReferenceError: blockVar is not defined (varible cannot access outside blockscope)
    
}
blockScope();         //calling the function



function blockscoped(){
    let blockVari = "Im block scoped variable"
    if(true){
        const blockVari1 = "im const variable"
        console.log(blockVari);
        console.log(blockVari1);
    }
}
blockscoped()



//3. Global scope

var GlobalVar = "Im accessible throughout the global"
let BlockScope = "Im let varible"
const BlockScope1 = "Im const variable"

//console.log(window.GlobalVar);   //global scope
//console.log(window.BlockScope);  //undefined
//console.log(window.BlockScope1); //undefined

// what is global variable and block variable


var a = 10;
let b =20;
const c =30;   //(outside function--->global variables)

function accessGlobalLocalVar(){
    //re-assign value throw error, but here in block scope its stored in different memory
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a+b+c);   //get output from local scope (inside function-->local varibles)

}

accessGlobalLocalVar();  // 600
console.log(a+b+c);  // 60


//search what is local variables and block scope??  are they same

// W2school content
// Local variable---> can only accessed from within function

/* Example for local variable

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName

*/




//04.25.00  (see once clearly)


//========================================================================================


// Type of Function in javascript       //04.28.00

// 1. Named function
// 2. Anonymous function
// 3. Arrow function

//name function

function add(name){
    console.log("im name function" + name);
}
add(" And im running now")

//Anonymous function

let anaFun = function(name){
    console.log("funtion running" +name);
}

anaFun(" And im fine");


// Arrow function   //  () => {}
 /*

 () => {}
 (a) => {return a + a}
 (a) => a + a
 a => a + a        // no parathese for single parameter

 */


// let FatArrow = (a,b) => console.log("Arrow Function " + (a*b));    

// FatArrow(10,20);


let FatArrow = a => console.log("Arrow Function " + (a));

FatArrow(10);

//return function  04.36.36
fName = "Brendan"

let retnfun = (fName) => {
    return fName
} 
let got = retnfun(fName);
console.log(got)

// difference between Anonymous function and Arrow function  ??? (see in website)


//higher order function 04.36.00

//example 1

// function function1(){
//     console.log("higher order function");    //higher order fun
// }

// function fun2(){                           // fun2 call back fun
//     console.log("call back fun");         
// }

// function1(fun2());

 
//example2

function fun1(callback, a, b){
    console.log(a+b);
    callback(1,2);

}

function fun2(num1, num2){
    console.log(num1 + num2);

}


fun1(fun2,10,20);

// 
const person = {
    fname : "Vijay",
    lname : "D",
    age : 28,
    Myfun : function(){
        return this;
    }
}

let funretn = person.Myfun();
console.log(funretn);



//===============================================

// Hosting (declaration part goes to top)

//a) Variable declaration Hosting    04.43.00

// var
console.log(A);       //undefined

var A = 10;           //variable declaration

console.log(A);       // 10


//let                     // temparal dead zone
//console.log(B);        //ReferenceError: Cannot access 'B' before initialization

let B = 20;

console.log(B);


// const                // temparal dead zone
                 
//console.log(C);        //ReferenceError: Cannot access 'C' before initialization

let C = 30;

console.log(C);



// b) Function declaration Hosting

//function declaration hosting only possible in named function, not in anonymous function

// i. named function hosting


sample();

function sample(){
    console.log("Im in")
}


// ii. anonymous function hosting (not possible)  //04.52.00 see once

// let----> //referrence error    //04.52.00 see once
// var----> //type error

//sample1();       //ReferenceError: Cannot access 'sample1' before initialization


let sample1 = function(){
    console.log("Am i accessible");
}



//==========================================================================

//Currying function  04.56.47


//Uncurried Function or normal function ----------->in one function, has multiple arguments

//A function where you can pass all arguments at once
function add(x,y,z){
    console.log(x+y+z)
}
add(1,2,3);      //6


// Curried Function  --->   A function where you give one argument at a time


function addd(v){
    return function(i){
        return function(j){
            console.log(v+i+j);
        }
    }
}

addd(10)(20);  //chaining calling       //60


// another method of curried function
function addd(v){
    return function(i){
        return function(j){
            console.log(v+i+j);
        }
    }
}

let curry1 = addd(100);
let curry2 = curry1(200);
curry2(300);

//console.log(curry1);
//console.log(curry2);

//====================================================

    //05.04.00

//self invoked function   (IIFE-->immediately invoked function expression)

//normal function
function normalFun(){
    console.log("Executed whenever i called")
}
normalFun();
normalFun();
normalFun();

//self invoked function  or IIFE

//Example 1
(function(){
    console.log("self invoked function");  //automatically called whenever code run's
})()

//Example 2

// (function(Oname, OAge){
//     console.log("self invoked function", Oname,OAge);  //automatically called whenever code run's
// })("vijay",27);


//closure function  ----------> inner function accessing variable from outer function

function outerFunction(){
    let OuterVariable = "Im from outer scope"
    function innerFunction(){
        console.log(OuterVariable);
    }
    return innerFunction;
}

let innerFun = outerFunction();
innerFun();                      //innerfunction access variable from outer function



//=================================================================================
//05.13.00
// Generator Function---------->Generator functions allow you to pause and resume execution using the yield keyword.


function* genatorFun(){
    yield "First val"
    yield "Second val"
    yield "Third val"
    return "Final Val"
}

let generator = genatorFun();
console.log(generator.next().value)   // First val
console.log(generator.next().value)   //second val
console.log(generator.next().value)   //Third val
console.log(generator.next().value)   //Final val


//===================================================================================
//05.24.00

// Data Structure 

// Arrays

let flavors = ["Vannila", "Butterscorth", "lavandar", "chocolate"]
console.log(flavors);
console.log(flavors[0]);   //access individual value
console.log(flavors[1]);

console.log(flavors.length);   //to find number of element in array
console.log(flavors.length-1);  //to find last array index
console.log(flavors[flavors.length-1]);  //print last array value

//array stored number, string, boolean, null, undefined, object
let ArraySample =  [1,"two", true, null, undefined, {id:1}]


//ruels and features in arrays
//1. array is a data structure used to store multiple values in single variables
//2. can hold various data types or different data types
//3. can hold homogeneous(same values) and heterogenous(different) values
//4. elements acessed by their index, starting from zero
//5. arrays are flexible in size, so they grow or shrinks as you add or remove elements


//two types to create arrays
//1. array literal  --->array[]
//2. array constructor

// array constructor  //05.31.00  ------->Array constructor is used to create new array objects

let newArray = new Array();

newArray[0] = "First"
newArray[1] = "second"
newArray[2] = "Third"
newArray[3] = "Fourth"

console.log(newArray);
console.log(newArray.length);


//=======================================================================

// Object  -------->is a collection of key-value pairs

// outer appearance is properties and ability of object is methods or behaviour

let userProfile = {
    Usename : "Vijay",
    Useage : 27,
    Usehair : "Black",
    Useeye : "Black",
    eat : function(){
        console.log("Im a method of the object, ability to eat icecream")
    },
    drink : function(){
        console.log("Im a method of the object, ability to drink juice")
        return "apple juice"
    }
}

console.log(userProfile.Usename, userProfile.Useage);   //acess object using dot 

userProfile.eat();
let behav = userProfile.drink();  //return object value
console.log(behav);


// ways to access the objects

let velhicle = {
    "velhicleType" : "fourwheeler",
    "price" : 20000,
    fuelType : "petrol",
    "seater type" : ["two", "three", "four"]
}

console.log(velhicle.velhicleType);
console.log(velhicle["velhicleType"]);
console.log(velhicle["fuelType"]);
console.log(velhicle["seater type"][0]);

//-----------------------------------------------------------
//Shorthand assigned property

let memName = "Kesavan"
let meAge = 27
/*
let Mem1 = {
    memName : memName,
    meAge : meAge
}
*/
// assigning variable values to objects
let Mem1 = {
    memName,
    meAge
}
console.log(Mem1.memName, Mem1.meAge);   // Kesavan 27

//Dynamic property---------->to the ability to add, modify, or delete properties of an object at runtime.

let dynamicProp = "employeeId"    //using varible as property in object
let Mem11 = {
    memName,
    meAge,
    [dynamicProp] : "1234",
    ["dynamicProp"] : "5678"
    
}
console.log(Mem11.memName, Mem11.meAge, Mem11[dynamicProp]);   // Kesavan 27
console.log(Mem11.memName, Mem11.meAge, Mem11[dynamicProp], Mem11["dynamicProp"]);   // Kesavan 27 1234 5678
console.log(Mem11.memName, Mem11.meAge, Mem11[dynamicProp], Mem11.dynamicProp);   //using dot notation  // Kesavan 27 1234 5678
console.log(Mem11);                                                              //  {memName: 'Kesavan',meAge: 27,employeeId: '1234',dynamicProp: '5678'} 

//----------------------------------------------------------------

// Type of creating object

//Example 1---->Using Object Literals:
let Obj = { key1: "value1", key2: "value2" };

//Example 2-------> using new Object()
let obj = new Object();
obj.key1 = "value1";
obj.key2 = "value2";

//Example 3----->Using Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  let person1 = new Person("Vijay", 27);
  console.log(person1.name); // "Vijay"
  
//Example 4------->Using Classes (ES6+):
class Person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  let person2 = new Person1("Vijay", 27);
  console.log(person2.name); // "Vijay"
  

//==================================================================================
//05.55.00
//Iteration in JavaScript ---->process of repeatedly executing a block of code over a data structure (like an array, object, or string).
//iteration is commonly used to loop through elements, properties, or characters.


//iterat (array, object, or string) using for-loop, for-in, for-of

// for-loop (array and string)

let arr = [10,20,30,40]

/*
console.log(arr[0]);   //10

let len = arr.length;
let FindIndex = arr.length-1
console.log(len);       // 4  (length of array)
console.log(FindIndex);  // 3  (Find index)
*/

// 1. for loop  (Iteration over array)--->control flow statement that allows you to execute a block of code repeatedly for a specific number of iterations

/*
for (initialization; condition; increment/decrement) {
    // Code to execute
}
*/

for(let i = 0; i<=arr.length; i++){
    console.log(arr[i]);
}

// 2. for loop (Iteration over string)

let str = "Javascript"


for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}


// for of loop  //06.04.00
//used to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It simplifies the process of accessing elements directly without worrying about the index.

// for...of loop index
/*
for (const element of iterable) {
    // Code to execute for each element
}

iterable: An object you can loop through (e.g., arrays, strings, maps).
element: The value of the current iteration.
*/

// 1. for of  loop over array

let arr1 = [10,100,1000,10000]

for(let iterator of arr1){
    console.log(iterator);
}

// 2. for of  loop over string

let str1 = "Javascript"

for(let char of str1){
    console.log(char);
}


// 3. Using for..of loop in generative function

function* genFunction(){
    yield "one"         //yield statement
    yield "Two"
    yield 3
}

let GenIterator = genFunction()    // creating iterate object

for(let Val of GenIterator){
    console.log(Val);          // One Two 3
              
}


// 4. Using for..of loop in object

/*
let ObjLoop = {
    id : 1
}

for (let key of obj){
    console.log(key);
}

output // TypeError: Object is not iterable in for..of loop

// to loop over object for..in loop is used
*/


//========================================================

//06.10.00
//for..in loop-------->used to iterate over the keys (enumerable properties) of an object or the indexes of an array.

let member2 = {
    MemTwoName : "Vijay",
    hobbies : ["Cricket", "Video Maker", "Editor"],
    familyDetails : {     //nested object
        familyMembers : 5,
        siblings : ["a", "b", "C"]

    },
    walk(){
        console.log("Im go for walk")
    }

}

for(let key in member2){
    console.log(member2[key]);         //for in to access the object
}


// for in loop to iterate over array


let ForArray = [100,200,300]

for(let key in ForArray){
    console.log(key);         //it print the index (0,1,2)
    console.log(ForArray[key])   //it access the array values  (100,200,300)
}


// for in loop to iterate over String

let Forstr = "ECMA script"

for(let key in Forstr){
    console.log(Forstr[key]);  //access over string
    
}


//========================================================================
//06.18.00
//ES6  Spread operator and Rest operator

//Spread operator(...)  --->used in array and object
/*
Key Use Cases of Spread Operator
1. Expanding an array, string and object into individual elements.
2. Combining or cloning arrays.
3. Merging or cloning objects.
4. It simplifies tasks like merging, cloning, or expanding data structures.
5. spread operator ... works with arrays, objects, strings, and function arguments.
*/

// normal copying of original variable values to variable

let hobbies = ["Cricket", "Football", "Basketball"]
let hobbies1 = ["Reading", "Writer"]

let CopyArr = hobbies    //copying array values to copyArr

// stored in reference memory so it effect the original values
CopyArr[0]  = "Baseball"
hobbies[2] = "Handball"

console.log(CopyArr, hobbies)   // Modifying the clone does affect the original in this method, So instead using spread... operator

// spread operator used in array 

let Hindimovies = ["Raone", "Jawan", "Animal"]
let Tamilmovies = ["Kaan", "ko", "coolie"]

let SpreadArr = [...Hindimovies, ...Tamilmovies]
console.log(SpreadArr)   //spread into individual element

Tamilmovies[0] = "Jailer"
console.log(Tamilmovies)   // original data and clone data stored in separate memory and doesnt effect each other.
console.log(SpreadArr)   //doesnt effect the spread element, because it stored in heap memory.

//creating new array with add new values

let NewSpreadArr = [...SpreadArr, "Kaala", "Beast"]  //can add new values in array
console.log(NewSpreadArr);


//Using spread operator in object

//cloning , modifying values, adding new value of object

let EmpDetail = {
    empId : "IQ123",
    EmpName : "Kesavan",
    EmpRole : "React developer",
}
let team2 = {...EmpDetail, empId : "IA564", EmpSalary : "10,000", TeamDesig : "Full stack dev"}
console.log(team2);

//Rest operator---->used to gather the remaining elements of an array or object into a new array or object.

/*
Key Use Cases of the Rest Operator

1. In Function Parameters (Rest Parameters)
2. Destructuring Arrays
3. Destructuring Objects
*/

// Rest parameter or Rest operator

function RestPara(...arr){
    console.log(arr)
}
RestPara(1,2,3,4,5)   //all parameter values stored in the arr parameter


//=====================================================================
//06.32.00
// Destructuring

// destructuring in array

let DestArr = [10,20,30,40,50]

let [a1, a2, a3, a4, a5] = DestArr

// let [i,,,, v] = DestArr
//console.log(i, v)

console.log(a1, a2, a3, a4, a5)


// destructuring multiple values

let DestMult = [100,200,300,400,500,600,700,800,900,1000]

//using ...rest operator 
let [A1, A2, A3, ...A4] = DestMult

console.log(DestMult)



// nest array destructuring  using ...rest operator  /// no video

//============================================================================= refer website or chatgpt(array methods)
//05.24.00
// Array methods
// methods effect the original array values


// .pop()--->remove last element


let arrMethod = [100,200,300,400]

let popedVal = arrMethod.pop()
console.log(popedVal, arrMethod)   // 400 [ 100, 200, 300 ]


// .push()---> to add element

arrMethod.push(500,600,700)
console.log(arrMethod)        //[ 100, 200, 300, 500, 600, 700 ]


//======================================================================06.59.00


// Higher order array method  07.24.00------->forEach adnd map()

// forEach() method----->used to iterate over an array and execute a provided callback function once for each element in the array.

let fruits = ["apple", "waterlemon", "musklemon", "banana"]   // does modify the original array

fruits.forEach(printFruit)

function printFruit(currentElement, index, totalArray){
    console.log(currentElement, index, totalArray)
}

/* output
apple 0 [ 'apple', 'waterlemon', 'musklemon', 'banana' ]
waterlemon 1 [ 'apple', 'waterlemon', 'musklemon', 'banana' ]
musklemon 2 [ 'apple', 'waterlemon', 'musklemon', 'banana' ]
banana 3 [ 'apple', 'waterlemon', 'musklemon', 'banana' ]
*/

// forEach() method---> doesnt return any value (undefined)

let newArr = fruits.forEach((CurrElement) => {
    return CurrElement
})

console.log(newArr)    //undefined


// map() method

fruits.map(function(currEle, index, totalarr){
    console.log(currEle, index, totalarr)
})

/* output
apple 0 [ 'apple', 'waterlemon', 'musklemon', 'banana' ]
waterlemon 1 [ 'apple', 'waterlemon', 'musklemon', 'banana' ]
musklemon 2 [ 'apple', 'waterlemon', 'musklemon', 'banana' ]
banana 3 [ 'apple', 'waterlemon', 'musklemon', 'banana' ]
*/

// map() method---> return new array and doesnt modify the original array

console.log(" ")

let newArr1 = fruits.map((CurrElement) => {
    return CurrElement
})

console.log(newArr1)    //[ 'apple', 'waterlemon', 'musklemon', 'banana' ]


// Chaining method--->The order of methods matters. Each method operates on the result of the previous one.


// chaining method in map()----> only possible in map() because it return values

let newAry = fruits.map(currtElement => currtElement.toUpperCase()).sort()
console.log(newAry);   //[ 'APPLE', 'BANANA', 'MUSKLEMON', 'WATERLEMON' ]


// condition based statement---------> possible in both forEach() and map()

let newAry1 = fruits.map((curtEle) => {return curtEle == "apple"})
console.log(newAry1)    //[ true, false, false, false ]

//------------------------------------------------------------------------------- 
//07.46.00
// Higher order array method ----->filter() and find()

// filter()  ----> also chaning call can be possible

let employeess = [
    {empName : "Kesavan", salary : "150000"},
    {empName: "murugan", salary : "100000" },
    {empName: "John", salary : "120000" }
]

//let filterData = employeess.filter(val, index, array => val.salary > 110000)
let filterData = employeess.filter(val => val.salary > 110000)
console.log(filterData)

/* output // new array of value created based on condition
[ 
  { empName: 'Kesavan', salary: '150000' },
  { empName: 'John', salary: '120000' }
]
*/

// chaining call 07.53.00

// find() method

let filterDataFind = employeess.find((val, index, array ) => { 
    return val.salary > 100000
})
 
console.log(filterDataFind)       //{ empName: 'Kesavan', salary: '150000' }

//---------------------------------------------------------------------------

//07.57.00
// Higher order array method -----> sort(), sum(), every()

// sort()-->compare function

// 1. ascending order---> smallest to largest number

let SortArr = [10,5,100,30,6,2]

let NewSortArr = SortArr.sort((a,b) => { return a-b})
console.log(NewSortArr)  //[ 2, 5, 6, 10, 30, 100 ]

/*
// ascending order
 a - b => postive   ---> swapping
 a - b => negative  ---> no swapping

 // descending order
 b - a => postive   ---> swapping
 b - a => negative  ---> no swapping
*/

/* Example
let SortArr = [10,5,100,30,6,2]   //ascending order

a - b => 10 - 5 => 5 => [5,10,100,6,2]          // postive value--> swapping
a - b => 10 - 100 => -90 => [5,10,100,30,6,2]        // negative value---> no swapping 
a - b => 100 - 30 => 70 => [5,10,30,100,6,2]        // postive value--> swapping 
*/

// 2. Descending order----> largest to smallest  //08.07.00

let DecSortArr = [10, 20, 30, 1, 4, true, "100"]

let NewSortArry = DecSortArr.sort((a,b) => { return b-a})
console.log(NewSortArry)         //['100', 30, 20,10, 4, 1,true]


// some()--> predicate function // same as logical OR---> any one condition true =>output true

let sumArr = [1,2,3,4,5]

let sumValues = sumArr.some((curEle, index, arr) => {
    return curEle % 2 == 0
})

console.log(sumValues)    //true (any one value true--> output true)

// every()---->

let evrValues = sumArr.some((curEle, index, arr) => {
    return curEle % 2 == 0
})
console.log(evrValues)    //false (every value must be true, otherwise--> output false)

//-------------------------------------------------------------------------
//08.13.00
// Higher order method---->reduce() method

// sum of array element using for loop

let sumArray = [10,20,30,40,50]
/*
10+20+30+40 => 150

1st=> totalVal = 0 + 10 => 10
2nd => totalVal = 10 + 20 =>30
5th => totalVal = 100 + 50 => 150
*/

let totalVal = 0;  

for (let i = 0; i < sumArray.length; i++) {
    totalVal = totalVal + sumArray[i];
    
}
console.log(totalVal);   //150

// sum of array using reduce() method

/* syntax
array.reduce(function(total, currentValue, currentIndex, array), initialValue)

let sumArray = [10,20,30,40,50]
1st => total + currentEle => 0 + 10 => 10
2nd => total + currentEle => 10 + 20 => 30
3rd => total + currentEle => 30 + 30 => 60
5th => total + currentEle => 100 + 50 => 150

*/

let reduceVal = sumArray.reduce((total, currentEle) => {return total + currentEle}, 0)

console.log(reduceVal)   //150

//===================================================================================== pending 
//08.25.00
// String methods  




//=====================================================================================
//09.03.48
// Data object and math object

// math.object

// Data object  //09.15.00

//=====================================================================================
//09.21.00
// prototypal inheritance ----> mechanism by which objects can inherit properties and methods from other objects.


// Object methods  //09.27.00

let personObj = {
    pName : "Johny",
    age : 30
}

// 1. Object.create()  --->Creates a new object with the specified prototype and optional properties.

let newObj = Object.create(personObj)
newObj.location = "Tamilnadu"       // adding new properties to object
console.log(newObj);                // {}   empty object
console.log(newObj.__proto__);     //{ pName: 'Johny', age: 30 }
console.log(newObj.pName);         //Johny
newObj.location = "Tamilnadu"

console.log(Object.getPrototypeOf(newObj));   //{ pName: 'Johny', age: 30 }



// 2. Object.assign() ---> merage one or more source object

//Example 1
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }

//Example 2  // also spread operator is used to merge the values

let assObj = {
    id : "QUI123",
    name1 : "Kesavan"
}

Object.assign(assObj, {role : "front dev", salary : 100000})

console.log(assObj);   //{ id: 'QUI123', name1: 'Kesavan', role: 'front dev', salary: 100000 }


// 3. Object.entries----> returns array of key-value pair for object properties

let entriEmployees = {
    eName : "Murugan",
    eRole : "Back and developer"
}
let multiArr = Object.entries(entriEmployees)
console.log(multiArr);                         //[ [ 'eName', 'Murugan' ], [ 'eRole', 'Back and developer' ] ]

// adding properties using push() method

multiArr.push(["eGender","Male"])       // should be in array literal
console.log(entriEmployees);

// 4. Object.fromEntries ----> covert array of key-value pair to object properties


let normalObj = Object.fromEntries(multiArr)
console.log(normalObj);      //{ eName: 'Murugan', eRole: 'Back and developer' } 


// 5. Object.keys ----> store only the object keys separatly


let onlyKeys = Object.keys(normalObj)
console.log(onlyKeys);                  //[ 'eName', 'eRole', 'eGender' ]


// 6. Object.values ---> store only the object values separatly

let onlyValues = Object.values(normalObj)
console.log(onlyValues);                   //[ 'Murugan', 'Back and developer', 'Male' ]

// 7. Object.freeze ---->Freezes the object, preventing properties from being added, removed, or modified.


let newObj1 = {
    id : 1
}

Object.freeze(newObj1)

newObj1.name1 = "javascript"
newObj1.id = "QT123"

console.log(newObj1);   // { id: 1 }  // prevent add or remove properties


// 8. Object.isFrozen --------> Checks if the object is frozen. (true or false)

console.log(Object.isFrozen(newObj1))   //true


//====================================================================================
//09.46.22

//Function method (call, apply, bind)

// this. keyword
// this. keyword represent current object and can access the object properties with this.

//Example 1
let employeee = {
    eName : "kesavan",
    eSalary : 10000,
    introYourself : function(a,b){             //anonymous function
        console.log(a + b +" "+ this.eName);   //30 kesavan  //this. represent current object
    
    },
    arrowFun : (a,b) => {           // arrow function //09.54.00
        console.log(this.eName);
    }
}
employeee.introYourself(10,20)
employeee.arrowFun(10,20)     //undefine  // because this. in arrow function represent the global scope

//---------------------------------------------------------------------------------------------------------
//09.58.00---->call()

// call() is used to access the properties from other class

let PMember = {         //Object 1
    pFName : "Vijay",
    PLName : "Kumar"
}

let person01 = {         //Object 2
    pFName : "Kesvan",   // when call() is called, this properties not be accessed
    PLName : "Murugan",
    introSelf : function(a,b){
        console.log(this.pFName +" "+this.PLName + (a+b))
        return (a+b)
    }
}
                 /* another object name*/
person01.introSelf.call(PMember ,10,20); //Vijay kumar30    // accessing another object properties from current object

//10.05.00
//apply()

person01.introSelf.apply(PMember,[40,100]);     //Vijay kumar140   // apply()


//10.06.00
// bind()--------->used only when function return some values

let newFun = person01.introSelf.bind(PMember,500,600);  //Vijay kumar1100

console.log(newFun());  // 1100


//=====================================================================================================
// 10.10.00
// primitive and non-primitive date type(array,object,function)

/* 1. Call by value

Stack ---> used to store the primitive values
Heap ----> used to store the non-primitve value (array,object,function)

        Stack(Before modification):

  | Address     | Variable  |  Value  |             
  |_____________|___________|_________|
  | 0x100       |    x      |   10    |
  | 0x104       |    y      |   10    | 

       Stack(After modification):

  | Address     | Variable  |  Value  |      y = 10---> y value doesnt change after re-assigning value of x = 20, because in primitive datatype variables stored in separate address
  |_____________|___________|_________|
  | 0x100       |    x      |   20    |
  | 0x104       |    y      |   10    | 


*/

let x = 10;
let y = x;    // y = 10;

x = 20;

console.log(x,y);   // 20  10

//----------------------------------------------------------------------------
//10.16.00
// 2. call by reference 

/*

Heap ----> used to store the non-primitve value (array,object,function)


                  Stack memory

  | Address     | Variable  |  Value--> reference/pointer(Address)  |             
  |_____________|___________|_______________________________________| 
  | 0x100       |   Obj01     |                0X001                |   // Obj01 = 0x001  (reference)  // stack memory only store the address of the heap memory
  | 0x100       |   Arry1     |                0X002                |
  | 0x108       |   Obj02     |                0X001                |   // Obj02 = 0x001  (reference)



              Heap memory

|  Address    |         Object          |            
|_____________|_________________________|
|   0x001     |  {name : "Kesavan"}     |   
|   0x002     |  [1,2,3,4,5,]           |       //heap memory store the values of datatype  

*/

let Arry1 = [1,2,3,4,5]    // array values store in heap memory and only address of array stored in stack memory




let Obj01 = {
    name : "Kesavan"
}
console.log(Obj01);  //{ name: 'Kesavan' }


let Obj02 = Obj01;
console.log(Obj01, Obj02);    //{ name: 'Kesavan' } { name: 'Kesavan' }


Obj02.name = "Murugesan"
console.log(Obj01, Obj02); //{ name: 'Murugesan' } { name: 'Murugesan' } // Obj02 assigned to Obj01 and if assigning new value to Obj02, result in changing values in both object because the memory address is same.


//==========================================================================================
//10.28.00
// 1. Deep copy in primitive value---->A deep copy creates a completely independent clone, including nested objects and arrays. Changes in the copied object do not affect the original.     shallow copy

let a01 = 10;
let b01 = a01;   //b01 = 10;

a01 = 20;
console.log(a01,b01);   // 20 10   //because of separate memory

// 2. Deep copy in non-primitive value  //10.31.00

let DObj1 = {
    name1 : "Murugesan",
    rolee : "Developer"
}

let DObj2 = {...DObj1}        //spread operator make reference datatype to primitive datatype    //by creating literals separate memory created and spread operator used which makes deep copy in non-primitive value
console.log(DObj1, DObj2);    //{ name1: 'Murugesan', rolee: 'Developer' } { name1: 'Murugesan', rolee: 'Developer' }

DObj2.name1 = "Kesavan"        // re-assign value of DObj2 name properties
console.log(DObj1, DObj2);    // { name1: 'Murugesan', rolee: 'Developer' } { name1: 'Kesavan', rolee: 'Developer' }   // now achieved deep copy


//----------------------------------------------------------------------------------------------
//10.34.00
// Shallow copy  ----->A shallow copy creates a new object or array but only copies references for nested objects or arrays. Changes in nested objects affect both the original and the copied object.

let Sperson01 = {
    name1 : "Johny",
    role : "Youtuber",
    hobbies : {                         // nested object
        cricket : "T20 player",
        football : "60 mins"
    }
}

let Sperson02 = {...Sperson01}        // let Sperson02 = {...Sperson01, hobbies: {...person.hobbies}}   //spread operator--> solution for shallow copy to deep copy

console.log(Sperson01, Sperson02);  // both are same values //{name1: 'Johny',role: 'Youtuber',hobbies: { cricket: 'T20 player', football: '60 mins' }} {name1: 'Johny',role: 'Youtuber',hobbies: { cricket: 'T20 player', football: '60 mins' }} 

Sperson01.role = "Video creator"    // obj1 value will change but doesnt effect the obj2 values
console.log(Sperson01,Sperson02);  //{name1: 'Johny',role: 'Video creator',hobbies: { cricket: 'T20 player', football: '60 mins' }} {name1: 'Johny',role: 'Youtuber',hobbies: { cricket: 'T20 player', football: '60 mins' }}               

// changing value in nested object

Sperson01.hobbies.cricket = "ODI player"  // changing values in nested object

console.log(Sperson01,Sperson02); // change value in both nested obj  //{name1: 'Johny',role: 'Video creator',hobbies: { cricket: 'ODI player', football: '60 mins' }}   {name1: 'Johny',role: 'Youtuber',hobbies: { cricket: 'ODI player', football: '60 mins' }}
  
 // let Sperson02 = {...Sperson01, hobbies: {...person.hobbies}}---> spread operator, make shallow copy to deep copy for nested object

//---------------------------------------------------------------------------------------------------
//10.41.00
// other method of acheiving shallow copy to deep copy--->Deep Copy Using JSON.stringify() and JSON.parse() 


/*
JSON.stringify() ---->Converts a JavaScript object into a JSON string.
JSON.parse() -------->Converts a JSON string back into a JavaScript object.
*/

// 1. JSON.parse(JSON.stringify());

const original = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      zip: 10001,
    },
  };
  
  const deepCopy = JSON.parse(JSON.stringify(original));
  
  // Modify the deep copy
  deepCopy.address.city = "Los Angeles";
  
  // Check if the original object is affected
  console.log(original.address.city); // "New York" (original remains unchanged)
  console.log(deepCopy.address.city); // "Los Angeles" (modified copy)
  
  //------------------------------------------------

  // 2. Alternative: structuredClone() (Recommended)

  const DeepCopy = structuredClone(original);

  //-------------------------------------------------

  // shallow copy of array  // 10.45.00




  //------------------------------------------------------

  // deep copy for array----> 10.45.00


//======================================================================================

//ternary operator
// let age = 18;

// let type = age > 18 ? "Adult Ticket" : "Child Ticket";

// console.log(type);
//===========================================================================================



