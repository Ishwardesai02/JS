

const score= 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber=123.8966

console.log(otherNumber.toPrecision(3));


const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(hundreds.toLocaleString());

/////////////////////////++++++ MATHS+++++////////


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)) //it takes the upper value 
console.log(Math.floor(4.9));

console.log(Math.min(4,3,6,8)); //returns min from array

console.log(Math.max(4,3,6,8)); //returns max from array

console.log(Math.random()*10);


const min=10
const max=20

console.log(Math.random() * (max-min+1)+min)



