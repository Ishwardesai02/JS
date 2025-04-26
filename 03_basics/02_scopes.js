function one(){
    const username="Ishwar"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website)

    two()
}

one()


if(true){
    const username="Ishwar"
    if(username==="Ishwar"){
        const website="youtube"
        console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);



//insteresting

console.log(addone(5))

function addone(num){
    return num+1
}
addone(5)



addtwo(5)  //cant access addtwo
const addtwo=function(num){
    return num+2
}

