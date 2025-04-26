
//const tinderUser=new Object() //Singletonobject

const tinderUser={} //non singleton object

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);


const regularUser={
    email:"ishwar@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ishwar",
            lastname:"Desai"
        }
    }
}
console.log(regularUser.fullname.userfullname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}

//const obj3=Object.assign(obj1,obj2)
//console.log(obj3);

const obj3={...obj1,...obj2}
console.log(obj3)

const users=[{
    id:1,
    email:"h@gmail.com"
},
{
    id:1,
    email:"h@gmail.com"
},
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    coursename:"js in hindi",
    price:"999",
    courseIntructor:"Ishwar"
}
course.courseIntructor

const{courseIntructor}=course
console.log(courseIntructor)

{ //API's
    "name":"hitesh",
    "coursename":"js in hindi",
    "price":"price"
}

