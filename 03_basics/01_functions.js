

function MyName(){
console.log("I");
console.log("s");
console.log("h");
console.log("w");
console.log("a");
console.log("r");
}

console.log(MyName())

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
const result=addTwoNumbers(2,2)
console.log("Result:",result);


function loginUserMessage(username){
    if (username===undefined)//if(!username)
    {
        console.log("Plz enter usrname");
        return
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Ishwar"));
console.log(loginUserMessage());


function calculateCartPrice(...num1){  // if used ... it will print all the elemnet passed while calling
    return num1
}
console.log(calculateCartPrice(200,300,400));



const user={
    username:"Ishwar",
    price:1333
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const array=[200,400,500,700]

function myArray(anyarray){
    console.log(anyarray[3]);
}
myArray(array)