// simple and clean API that uses promises to provide more powerful features to fetch resources from the server.

/* Basic syntax of fetch API
// sart the request by calling fetch method
fetch('URL').then(response =>{  //using then method to wait for server response
    // handle response data
}).catch(err => {     // catch method is optional
    // handle errors
})

*/

// Syntax of GET data in json format
function getdata(){
    fetch('https://api.github.com/orgs/nodejs').then(response =>{
        return response.json(); 
    }).then(data=>{
        console.log(data); // we get data in the form of json file
    }).catch(error =>{
        console.log(error);
    })

}
getdata();

// Syntax of GET data in xml format

function getdata1(){
    fetch('https://api.github.com/orgs/nodejs').then(response =>{
        return response.text(); 
    }).then(data=>{
        console.log(data); // we get data in the form of json file
    }).catch(error =>{
        console.log(error);
    })

}
getdata1();

// POST request --> send your data to server

/*  syntax for POST request

let data = {
    first_name: "Avishek",
    last_name: "Basyal",
    job_title: "AI/ML engineer"
}

const options = {
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        'content-type':'application/json'
    }
}
fetch('url',options).then(res =>{
    res.json();
}).then(res =>{
    console.log(res);
})

*/