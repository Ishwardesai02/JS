
//Dates 

let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getTime());


let myTimeStamp=Date.now()

console.log(myTimeStamp);


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday:"Long"
    
})



