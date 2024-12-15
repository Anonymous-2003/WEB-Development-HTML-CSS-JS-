// Try Catch
try {
    fun(); // calling function that hasn't been defined so, throws refrence error
} catch (error) {
    console.log("Error in your code");
    console.log(error.name); // also shows the type of error
    console.log(error.message); // displays the error in code
}
finally{
    console.log("This is executed by default")
}

// Throw 
let x = "Error handling";
if (x!= undefined){ // if the condition is true then we want to throw error and the execution will stop
    throw new Error("This is not undefined"); 
}
else{
    console.log("This is undefined");
}

