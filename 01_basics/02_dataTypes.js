"use strict"//treat all JS code as newer version

//alert("Hello") //We are using nodejs , not browser

console.log(9+3);
console.log("Ishwar")


let name="Ishwar"
let age=20
let isLoggedIn=false

//number => 2^53 range of number
//bigint 
//string=>""
//boolean => true/false
//null => standalone Value 
//undefined => 
// Symbol => unique

//object
console.log(typeof"ishwar")
console.log(typeof null)   //type of null is object

//Primitive (7) : they are call by value , changes are made in copy
// String,Number,Boolean,null,undefined,Symbol,Bigint

//

//Non Primitive(reference type) : Referance from memory is directly allocated
// Array , Objects ,Functions 
const heros=["shaktimaan","naagraaj","doga"]

let myObj={           //datatype:Object
    name:"Ishwar",
    age:22,
}

const myFunction=function(){  //datatype : function
    console.log("Hello worls");
}

console.log(typeof myObj);
console.log(typeof myFunction);