// JS Datatypes
let score = 40000000;
let balance = new Number(300);
console.log(score);
console.log(balance);
console.log(score.toLocaleString('en-US'));
console.log(score.toLocaleString('en-IN'));
console.log(Number.MIN_VALUE);
console.log(Math.floor(Math.random()*(20 - 10 + 1) + 10));
console.log(Math.floor(Math.random()*(20 - 10 + 1) + 10));
console.log(Math.floor(Math.random()*(20 - 10 + 1) + 10));

// JS Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

let newDate = Date.now();
console.log(newDate/1000);

// JS Loops
const obj ={
    name :"Aniket",
    age:21,
    cgpa : 8.90,
    trade :"GCS"
}
const obj2 = [23, 78 , 32.21, 71 ,9.02];

// // for in loop
for(let val in obj){
    console.log(val, "=>", obj[val]);
}
for(let val in obj2){
    console.log(val, "=>", obj2[val]);
}
// for of loop
for(let val of obj2){
    console.log(val*10);
}
console.log("\n");

obj2.forEach((element , index , array) =>{
    array[index] = element*10.20 ;
    console.log(array[index].toFixed(2));
});
console.log(obj2);

let arr = Array.from(obj2);
arr[2] = "Modified";
arr[5] = "Aniket";
console.log(arr);

obj2.map((val) =>{
    let elem = val*2;
    console.log(obj2);
});

const check = obj2.filter((elem) => {
    return elem > 200;
});
console.log(check);

const reduce = obj2.reduce((acc , val) =>{
    return acc + val;
});
console.log(reduce);

// JS Functions
function calSum (n1 , n2 , ...num1){
    obj2.push(n1);
    obj2.push(n2);
    return num1;
}
console.log(calSum(200 , 300 , obj2));
function setName(obj){
    console.log(`Hello ${obj.name} and your age is ${obj.age}`);
};
setName(obj);

//IIFE
(()=>{
    console.log("hello I am an IIFE")
})();

let va1 , va2;
console.log(va1 = null ?? 10 ?? 20);
console.log(va2 = undefined ?? 30 ?? 40);

// JS String
let val = "Aniket Srivastava" ;
console.log(val.length);
console.log(val.toUpperCase());
console.log(val.slice(2, 8));

// JS Array
let val1 = [12 , "Aniket" , 56.32 , 91 , "monday"];
console.log(val1.join("-"));
delete val1[4];
val1[4] = val1.push("John")
console.log(val1);
console.log(val1.reverse());
console.log(val1.splice(1,2,"Year", "Month" , "Day"));
console.log(val1);

