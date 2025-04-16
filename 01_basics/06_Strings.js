const name="ishwar"
const repo_count=12

console.log(name+repo_count + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repo_count}`);

const givenname=new String("Ishwar-Desai")
console.log(givenname[0]);
console.log(givenname.length);

console.log(givenname.toLocaleUpperCase());
console.log(givenname.charAt(2));
console.log(givenname.indexOf('h'));


const newString =givenname.substring(0,4)
console.log(newString);

const anotherString =givenname.slice(-3,4)
console.log(anotherString);

const newstring1="  Ishwar "
console.log(newstring1.trim()) //removes the spaces


console.log(givenname.split('-'));
