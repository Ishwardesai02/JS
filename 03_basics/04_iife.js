//Immediately INvoked function Expressions (IIFE)

(function chai(){
    console.log("DB CONNECTED");
})();
//there is problem with global scope pollution so we use iife 


(func1=(num1,num2)=>{
    return num1+num2
})(3+4);


(()=>{
    console.log("3+4");
})();



((name)=>{
    console.log("Connected");
    
})('Ishwar')