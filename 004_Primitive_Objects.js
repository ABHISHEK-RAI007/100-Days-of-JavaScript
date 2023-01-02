// NN SS  BB U - Primitives in JS 
N = null
N = Number

S = Symbol
S= String

B = Boolean
B = BigInt
U = undefined 
// NN SS BB U


let a  = null;
let b  = 345;
let c  = true; //  can also be false
let d = BigInt("567") + BigInt("3");
let e = "Abhishek";
let f  = Symbol(" I am a nice symbol");
let g = undefined;
let h;

console.log(a, b, c, d, e, f, g, h);

console.log(typeof d);

//Non Primitive Data Types Objects in JS 
const item ={
    "Abhishek": true,
    "Shubh": false,
    "Pooja": 67,
    "Rohan": undefined
}

console.log(item["Abhishek"]);
console.log(item["sdf"]);
console.log(item["Rohan"]);
console.log(item["Shubh"]);
