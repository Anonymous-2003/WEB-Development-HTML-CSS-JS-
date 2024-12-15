// Syntax to create map
const map = new Map();
console.log(map);

// To insert elements in map we use the set() method
let map1 = new Map();
map1.set('info',{name:'Avishek',age:21});
map1.set('bio',{address:'Arghakhanchi',headquater:'Sandhikharka'});
map1.set('hehe',{asdf:'hek',ghh:'fff'});
console.log(map1);

// You can also use objects or functions as keys
let map2 = new Map();
let obj = {} // creating empty object
map2.set(obj,{name:"Basyal",age:23});
console.log(map2);

// You can access map element using get()
console.log(map2.get(obj));

// has() to check if element is in map, returns  boolean value
console.log(map1.has('hehe'));

console.log(map1.size); // to get number of elements in map1

// clear() and delete() -> to remove elements from a map
map1.delete('hehe'); // returns true if specified keye value pair exists and has been deleted otherwise returns false
console.log(map1);

map1.clear();
console.log(map1) // removes all the key value pairs from a map object . For delete you have to specify which key you want to delete

// iterate through map using forOf
let map3 = new Map();
map3.set('info',{name:'Avishek',age:21});
map3.set('bio',{address:'Arghakhanchi',headquater:'Sandhikharka'});
map3.set('hehe',{asdf:'hek',ghh:'fff'});
for (let [key,value] of map3){
    console.log(key + '-' + value);
}

// you can iterete over a map and get a key using keys()
map3.set('name' , 'Tom');
map3.set('age',60);

for(let key of map3.keys()){
    console.log(key);
}

// using values()
for(let value of map3.values()){
    console.log(value);
}