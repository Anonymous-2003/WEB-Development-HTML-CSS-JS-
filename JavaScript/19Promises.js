// Promises is a way through which we can deal with asynchronous operation
// promise has two outcomes whether it will be resolved or it can be rejected
//
function fun1(){
    return new Promise( function(resolve,reject) {
        setTimeout(function() {
            const error = true;
            if(!error){
                console.log("promise operation is successful ");
                resolve("Mission Successfull "); //if the condition is true , then the promise is resolved
    
            }
            else{
                console.log("Promise operation was unsuccessful");
                reject("Mission Failed ")
            } 
        }, 2000);
       
    })
}

fun1().then(function(){ // then method is called if the promise is resolved
    console.log("Thanks");
}).catch(function(error){ // catch method is called if the promise is rejected
    console.log("No thanks "+ error);
})

// we have use const keyword so it is aaccessible throughout the code