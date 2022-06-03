//What is a Temporal Dead Zone?
//Its a place where the let and const variables reside as long as they are not declared. 
// It also has a default value of undefined only but if we try to access them, then will get ReferenceError.
//let and const declarations are both block-scoped, which means they are only accessible within the { } surrounding them. var, on the other hand, doesn't have this restriction.

//What is the for-in loop in JavaScript? Give its syntax?
//For-in loop in JavaScript is used to iterate over properties of an object.
//The for-in loop iterates only over those keys of an object which have their enumerable property set to “true”.
//Syntax: for(key in object){
                 //statments
// }
let employee = {
    name : "kusuma krishna",
    class : "B.tech",
    college : "VEC"
}

for(let key in employee){
    console.log(key);
}

//Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript?
//local scope:
//  a local scope is the opposite of the global scope .here the variable can only be access within a given scope 
//  but can still be accessible for the other scope which are being nested within that parent  scope 

//  Since local variables are only recognized inside their functions, variables with the same name can be used in different scope

//  Local variables are created when a scope starts, and deleted when the scope is completed.
//  local scope can further be divided into block and functional scope

//  block Scope:
//  a block scope is a type of scope if a variable is define it can only be acesss  that variable within that scope only

//  Block scoped variables: A block scoped variable means that the variable defined within a block will not be 
// accessible from outside the block. A block can reside inside a function, and a block scoped variable will not be
//  available outside the block even if the block is inside a function.

//  functional scope:
//  A function scoped variable means that the variable defined within a function will not accessible from outside the function.

//What is difference between null and undefined and where to use what?
//null is a data type which can be use to implement or initialized a variable
//   null can also be written as "",''
// let N = null;
// console.log(N);//null

//  undefine is  when a variable is define but not initialized or we have assign value to a variable then we get undefine

// var s;
// console.log(s); //undefine

//what is Symbol?
//Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn’t affect anything.
//Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.
//If we want to use a symbol in an object literal {...}, we need square brackets around it.

let sym1 = Symbol("cricket");
let sym2 = Symbole("cricket");
console.log(sym1 == sym2);

//Write code to explain map and filter in arrays
//map:map is an array method. it is used to iterate through the array to perform some perticular operation on an array elements.
//filter:filter is an array method. it is used to perform some conditional operations on array inside filter.

let array = [1,2,3,4,5];
let map = array.map(x => x*2);
console.log(map) //2,4,6,8,10

let filter = array.filter((x)=>x>3);
console.log(filter);//4,5

//Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same?
let person1 = {
    name : "kusuma krishna",
    id : [1,2,3,4,5]
}
let person2 = {
    name : "kalvakollu",
    id : [1,2,3,4,5]
}

function equal(){
    let f=person1.id;
    let s=person2.id;
    let count=0;
    for(let i=0 ; i<f.length;i++){
        for( j=0 ; j<s.length;j++){
               if(f[i]==s[i]){
                   count=count+1;
               }
        }
    }
    if(count==f.length){
        console.log("same");
    }
    else{
        console.log("Not same");
    }
}
equal();

//Please explain Self Invoking Function and its code?
//A self-invoking (also called self-executing) function is a nameless.
//function that is invoked immediately after its definition.
// An anonymous function is enclosed inside a set of parentheses followed by another set of parentheses ().

(()=>{
    console.log("Hi");
})(); //syntax will look like this.
