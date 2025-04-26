const userEmail="ishwar@gmail.com"

if(userEmail){
    console.log("Got user email")
}else{
    console.log("Dont have user email")
}

//faalsy values
//false ,0,-0,BigInt ,"",null,undefined,NaN


//Truthy values
//"0",'false'," ",[],{},function(){}
const userEmail1=[]
if(userEmail1.length===0){
    console.log("Array is empty");
}


//if(Object.keys(emptyObj).legth===0){
//    console.log("Object is empty")
//}


//Nullish Coalescing Operator (??) : null undefined

let val1;
val1=5??10
val1=null??10
val1=undefined??10

console.log(val1);

//Terniary Operator

//consdition ? true : false
