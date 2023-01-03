// Chapter 1 - Q1

let a = "Abhishek";
let b = 6;
console.log(a + b); //Abhishek6

// Chapter 1 - Q2
console.log(typeof (a+b)); //string

// Chapter 1 - Q3
const a1 = {
    name: "Abhishek",
    section: 1,
    isPrinciple: false,

}
// a1 = "Prabhat" //Assignment to constant variable

// Chapter 1 - Q4

// a1 ={} Assignment to constant variable
a1['friend'] = "Prabhat";
console.log(a1);

a1['name'] = "Abhi";
console.log(a1) //{ name: 'Abhi', section: 1, isPrinciple: false, friend: 'Pooja' }

// Chapter 1 - Q5
const dict = {
    appreciate: "to recognize the full worth of",
    bazaar: "a marketplace or shopping quarter",
    yakka: "especially hard work"
}

console.log(dict.yakka); //especially hard work 
console.log(dict['yakka']); //especially hard work 
