// AJAX --> Asynchronous Javascript And XML
// AJAX is a technique for creating faster and more interactive web application with the help of XML , HTML, Css and JS.
 
// Basic syntax when sending request with AJAX to the server
/*
var request = new XMLHttpRequest();

request.open("GET","URL"); // GET means get your data from server . (POST means send your data to server)

request.send();

*/

let btn = document.getElementById('btn');
btn.addEventListener('click',loadabout);

function loadabout(){
    var request = new XMLHttpRequest();
    request.open("GET","17about.html");
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById('container').innerHTML = this.responseText;

        }
    }
    request.send();
}
// all this is done just to display the content in about.html after clicking 'load about' button.
// div with id 'container' is made in HTML where the text is shown
// in this process the text is shown without refreshing the website

/* --> for ready state
Value   State                   Description
0       UNSENT                  Client has been created. open() not called yet.
1       OPENED                  open() has been called.
2       HEADERS_RECEIVED        send() has been called, and headers and status are available.
3       LOADING                 Downloading; responseText holds partial data.
4       DONE                    The operation is complete.
*/

/* For HTTP response status code
1. Informational responses (100 - 199)
2. Successful responses (200 — 299)
3. Redirection messages ( 300 — 399)
4. Client-error responses (400— 499)
5. Server error responses ( 500-599)
*/





