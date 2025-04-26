const user={
    username:"Ishwar",
    price:100,

    welcomeMessage:function(){
        console.log(`${this.username} ,Welcome to website`);
        //this keyword refers current context
        console.log(this);
    }
}
user.welcomeMessage()
user.username="Krishna"
user.welcomeMessage()

console.log(this);


function chai(){
    console.log(this);   
}
chai()


//Arrow function
const chai1=()=>{
    let username="ishwar"
    console.log(this.username)
}
chai1()

const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4));
