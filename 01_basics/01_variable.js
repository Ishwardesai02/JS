const accountID=1445443
let accountEmail="ishwar0234@gmail.com"
var accountPassword="1234"  
accountCity="Jaipur"   //  
let accountState;

//accountID=2 //Not allowed because aaccountIDin declared as const

accountEmail="h@gmail.com"
accountPassword="1231234"
accountCity="Bengaluru"

/*
Prefer not to use var 
beacause of issue in block scope and functional scope
*/

console.log(accountID);
console.log([accountID,accountEmail,accountPassword,accountCity,accountState])