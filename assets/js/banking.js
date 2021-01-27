var  AccountNo1={
    balance:0,
    accounNo:"This"

}

var  AccountNo2={
    balance:0,
    accounNo:"This"

}


var  AccountNo3={
    balance:0,
    accounNo:"This"

}

var  AccountNo4={
    balance:0,
    accounNo:"This"

}


function Deposit(){

    var accountToDeposit= prompt("Choose the account you are depositing from \n 1 Account 1 \n2 Account 2\n Account 3\n4 Account4 ");

    accountToDeposit= parseInt(accountToDeposit);
    switch(accountToDeposit){
        case 1:
              var amountToDeposit = prompt("Enter the number of amount your deposit?");

               amountToDeposit = parseInt(amountToDeposit);
               AccountNo1.balance += amountToDeposit;

               console.log("This Account Balance is\t\t\t"+AccountNo1.balance);
             break;
        case 2: 
                var amountToDeposit = prompt("Enter the number of amount your deposit?");

                amountToDeposit = parseInt(amountToDeposit);
                AccountNo2.balance += amountToDeposit;

                console.log("This Account Balance is\t\t\t"+AccountNo2.balance);
                break;
        case 3:
                var amountToDeposit = prompt("Enter the number of amount your deposit?");

                amountToDeposit = parseInt(amountToDeposit);
                AccountNo3.balance += amountToDeposit;
        
                console.log("This Account Balance is\t\t\t"+AccountNo3.balance);
                break;
        case 4: 
                
                var amountToDeposit = prompt("Enter the number of amount your deposit?");

                amountToDeposit = parseInt(amountToDeposit);
                AccountNo4.balance += amountToDeposit;

                console.log("This Account   balance is\t\t\t"+AccountNo4.balance);
                break;
        default:
            alert("Incorrect input please try again");
            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
            break;  
    }
      
    


        

    
}


function WithDrawal(){

    var amountToWithDrawal = prompt("Enter your amount of withdrawal");
    amountToWithDrawal = parseInt(amountToWithDrawal);

    AccountNo1.balance -=amountToWithDrawal;

    console.log("Your Balance is\t\t\t"+AccountNo1.balance);


    var leave = prompt("Do you want to leave\n if so type yes");
        
        leaveOrStay(leave);
    
    
}

function Balance(accountNo){

    var accountToDisplay= prompt("Choose the account to display to \n 1 Account 1 \n2 Account 2\n Account 3\n4 Account4 ");

    accountToDisplay = parseInt(accountToDisplay);
    switch(accountToDisplay){
        case 1:
            alert("Account No1"+AccountNo1.balance);

            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
        case 2: 
             alert("Coount No2"+AccountNo1.balance);

             var leave = prompt("Do you want to leave\n if so type yes");
        
             leaveOrStay(leave);
        case 3:
            alert("This account have"+AccountNo1.balance);

            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
        case 4:  
            alert("This account have"+AccountNo1.balance);

            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
        default:
            alert("Incorrect input please try again");
            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
            break;    

    }



    alert("Your balance is"+AccountNo1.balance);

    var leave = prompt("Do you want to leave\n if so type yes");
        
        leaveOrStay(leave);
    
}
function Transfer(){

    var accountToTransfer = prompt("Enter the account number you are transferring to\n 1 Account 1 \n2 Account 2\n Account 3\n4 Account4 ");

    accountToTransfer = parseInt(accountToTransfer)
    var ammountToTransfer = prompt("Enter the amount you want to tranfer");
    ammountToTransfer = parseInt(ammountToTransfer);


    switch(accountToTransfer){
        case 1:
            AccountNo1.balance += ammountToTransfer;
            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
            break;
       case 2:
            AccountNo2.balance += ammountToTransfer;

            var leave = prompt("Do you want to leave\n if so type yes");

        
           leaveOrStay(leave);

            break;
        case 3:
            AccountNo3.balance += ammountToTransfer;

            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
            break;
         case 4:
            AccountNo4.balance += ammountToTransfer;

            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
            break;
                  
                   
                    
              

    }
    
}



function leaveOrStay(leave){
        switch(leave.toLowerCase()){
            case 'yes':
                 console.log("Thanks for using our service")
                break;
             default:
                 main();
                 break;
        }
}

function main(){
    var operation = prompt("PLEASE CHOOSE YOUR OPERATION\n 1 TO DEPOSIT \n 2 TO WITHDRAWAL\n3 TO Balance\n 4 TRANSFER");

    operation = parseInt(operation);
    switch(operation){
        case 1:
            Deposit();
            break;
        case 2:
            WithDrawal();
            break;
        case 3:
            Balance();
        case 4:
            Transfer();
        default:
            break;    
    }



}

main();