let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },


    bmiCalc: function(weight,height){ return weight/height*height;}
}

personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ")


for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}



personProfile.ageCalc();
personProfile.checkVote();
var yourBmi = personProfile.bmiCalc(personProfile.weight,personProfile.height);

(function() {

    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    console.log("Profession : " + personProfile.job);
    console.log("Age : " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    console.log("Your Bmi is"+yourBmi);
    console.log("Family Members ");

    personProfile.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

      
    console.log("**************************************************************")

})();





















