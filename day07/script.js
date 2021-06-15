// task-01
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
// Sample Output: name,sclass,rollno
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
let arr=[];
for(let i in student){
    arr.push(i);
}
console.log(arr.join(","));

// task-02
// 2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(arr.join(","));
arr=[];
delete student.rollno;
for(let i in student){
    arr.push(i);
}
console.log(arr.join(","));
// task-03
// 3. Write a JavaScript program to get the length of a JavaScript object.  
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
let c=0;
for(let i in student){
    c++;
}
console.log(c);

// task-04
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 
// var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
// { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
// { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
for(let i of  library){
    console.log("book name="+i.title+ "\n Author ="+i.author+"\n status= "+i.readingStatus);
}

// task-05
// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
// Try To Attempt : Difficult Level Increased 
const cylinder=
{
    r:0,
    h:0,
    volume(){
    return ((22/7)*this.r*this.h).toFixed();
},};
cylinder.r=2;
cylinder.h=2;
console.log(cylinder.volume());

// task-06
6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : 
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
