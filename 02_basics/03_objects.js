

//singleTon
Object.create //made using constructor , singleton 

//object litrals

const mysum=Symbol("key1")

const user={
    [mysum]:"mykey1",
    name:"Ishwar",
    "full name":"Ishwar Desai",
    age:"20",
    location:"Astagaon",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(user.name)
console.log(user["full name"]);
console.log(user[mysum]);

user.location="Rahata"
Object.freeze(user)
user.location="Shirdi"
console.log(user);

user.greeting=function(){
    console.log("Hello");
    
}

user.greeting2=function(){
    console.log(`Heelo js user,${this.name}`);
    
}

console.log(user.greeting());
console.log(user.greeting2());

