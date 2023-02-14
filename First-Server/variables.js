//can be used to stop global variables
//"use strict"


// Never do this
//totalGlobalVariable = "Never do this"
//var globalVariable = "Also never do this"



{
    var someValue = true;
    let someLetValue = true;
    const someConstValue = true;
    {
        var someValue = false;
        let someLetValue = false;
        const someConstValue = false;
    }
    console.log(someValue)
    console.log(someLetValue)
    console.log(someConstValue)
}



//Will print 6,6,6,6,6,
for(var i = 0; i <=5 ; i++){
    setTimeout(() =>{
        console.log(i)
    },1000) 
}

//will print 0,1,2,3,4,5
for(let i = 0; i <=5 ; i++){
    setTimeout(() =>{
        console.log(i)
    },1000) 
}