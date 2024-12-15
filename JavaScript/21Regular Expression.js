// syntax to create regular expression
let regex = /Javascript/g  // 'g' means global variable,means if the same word is repeated it checks for another word also
// if we use 'i' instead of g , it means case insensitive. We can also use no any text
console.log(regex); // content with forward slaces will be displayed
console.log(regex.source); // only the content inside the slaces will be shown.

// Functions
// 1. exec() --> returns array for match or null for no match
let txt = "Javascript is the brain of website Javascript";
let output1 = regex.exec(txt); // checks if the regular expression inside the txt if yes then returns array
let output2 = regex.exec(txt); 
console.log(output1);
console.log(output2);
console.log(output1.input) // will return string value instead of array

// 2. test() --> will return true or false if match or not
let regex1 = /Avishek/;
let txt1 = "Avishek is from Arghakhanchi";
let output3 = regex1.test(txt1);
console.log(output3);

//3. match() --> will return an array of result or null
let output4 = txt1.match(regex1); // correct syntax
console.log(output4);
// let output 4 = regex1.match(txt) -->wrong syntax

// 4. search() --> will return index of 1st match else -1
let output5 = txt1.search(regex1);
console.log(output5);

//5. replace() --> return new replaced string with all replacements (if no flag is given,first match will be replaced)
let output6 = txt.replace(regex,'Python');
// let output6 = regex.replace(txt,'Python')  --> wrong syntax
console.log(output6);
