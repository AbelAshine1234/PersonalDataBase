var firstName;
var lastName;
var profession;
var birthYear;
var job;

var weight;
var height;

(
    function(){
        firstName = prompt("What is your first name?");
        lastName = prompt("What is your last name?");
        profession = prompt("What is your proffesion");
        birthYear =       prompt("Enter your birth Year");
        
        weight =   prompt("Enter your weight in kg");
        height = prompt("Enter your height in meter")
        
        
        
        console.log("Here is your profile");
        console.log("Full Name\t\t"+firstName+"\t\t"+lastName);
        console.log("Proffesion\t\t\t"+profession);
        console.log("You are  Born in \t"+birthYear);

       console.log("Your Bmi Is\t\t\t"+calBMI(weight,height));
    }
)();


let isEligibeToVote;

let tempAge = ageCalc(birthYear);
 

if(tempAge>=18){
    isEligibeToVote =true;
}
else{
    isEligibeToVote =false;
}

console.log('Is Eligible to vote'+isEligibeToVote);



let familyMembers = new Array();

let numberOfFamily;

numberOfFamily = prompt("Enter your family number");



for (let i  = 0; i  <numberOfFamily; i++) {

    familyMembers[i] = prompt("Enter your family member  "+i +"\t\t");
}

 
 
familyMembers.forEach(function(member) {
    console.log("Family Member    : " + familyMembers.indexOf(member)+1+"\t\t"+member);
 });
 



 function ageCalc(birthYear){

 
     return new Date().getFullYear()-birthYear;
 }


 

function calBMI(weight,height){

return weight/height *height;

 }