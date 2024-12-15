// Synchronous Programming
function fun2(){
    console.log("Running fun2");
}
function fun1(){
    console.log("Runing fun1");
    fun2();
    console.log("fun1 has ended");
}
fun1();

// Asynchronous Programming
function fun3(){
    setTimeout(function() { // setTimeout means this function will execute after 5000ms i.e 5 sec
        console.log("fun3 is running")
    }, 5000); // seconds in miliseconds
}
function func(){
    console.log("func is running");
    fun3();
    console.log("func has ended");
}
func();