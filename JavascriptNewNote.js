//ternary operator
let age = 18;

let type = age > 18 ? "Adult Ticket" : "Child Ticket";

console.log(type);



//name function

function add(name){
    console.log("im name function" + name);
}
add(" And im running now")

//Ananomus function

let anaFun = function(name){
    console.log("funtion running" +name);
}

anaFun(" And im fine");


//return function

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


//higher order function 04.36.00

//example 1
// function function1(){
//     console.log("higher order function");
// }

// function fun2(){
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

vijaydana97@gmail.com
Vijaydana@229420
