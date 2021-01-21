// Declaring variables 
// You can check this Variables are Available or not under the window object
var firstName; 
var lastName; 

var birthYear; 
var job;

var weight;
var height;

// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");

job = prompt("What is Your Profession ?")
birthYear = prompt("Enter Your Birth Year");

// Display  the result on console from input 
console.log("Here is your Profile ");
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Birth Year: " + birthYear + " " + "");


let tempAge ;
tempAge = parseInt(ageCalc(birthYear));

let isEligibleVote = tempAge;
if (tempAge >= 18){
    isEligibleVote  = true;
}
else{
    isEligibleVote = false;
}

console.log("is Eligible to Vote"+isEligibleVote)




// 
let familyMember = new Array();
let noOfFamily;

noOfFamily = prompt("No Of Family");

for (let i = 0; i< parseInt(noOfFamily); i++) {
    familyMember[i] =  prompt("your family members "+(i+1));

}


console.log("Family Member");

familyMember.forEach(function(familyMember,index) {
    console.log("Family Member  " + (index + 1) + " : " + familyMember);
 });

function ageCalc(birthYear){
    return new Date().getFullYear() - birthYear;

}

let calcBmi = function(weight,height){
    return weight / Math.pow(height);

}
console.log(calcBmi);