//for loop

for (let index = 0; index < 10; index++) {
    const element =index;
    if(element==5){
    console.log("5");
    }
    console.log(element)
}

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value ${i}`);
    
    for (let j = 0; j <=10; j++){
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i+ "*" + j + '=' + i*j);
    
    }
}



let myArray=["flash","batman","superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
    
}
