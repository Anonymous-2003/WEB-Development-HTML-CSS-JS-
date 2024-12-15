let myset = new Set();
// add() is used to add elements in set
myset.add('Avishek');
myset.add('Basyal');
myset.add('JavaScript');
myset.add('HTML');
console.log(myset);

// to store array in sets
let myset1 = new Set([1,2,'Hello','World',{a:'apple',b:'ball'}]);
console.log(myset1);

console.log(myset1.size);

// To check if any element is present in set , return boolean value
console.log(myset1.has('chitti'));

// to delete particular element, returns true if element is present and deleted
console.log(myset1.delete(2));
console.log(myset1);

// to iterate set
for (let items of myset1){
    console.log(items);
}