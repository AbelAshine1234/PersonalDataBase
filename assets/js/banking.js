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

var MIN = 50;



function Deposit(){

    var accountToDeposit= prompt("Choose the account you are depositing from \n 1 Account 1 \n2 Account 2\n 3 Account 3\n4 Account4 ");

    accountToDeposit= parseInt(accountToDeposit);
    switch(accountToDeposit){
        case 1:
              var amountToDeposit = prompt("Enter the number of amount your deposit?");

               amountToDeposit = parseInt(amountToDeposit);
               AccountNo1.balance += amountToDeposit;


               console.log("This Account Balance is\t\t\t"+AccountNo1.balance);


               var leave = prompt("Do you want to leave\n if so type yes");
        
               leaveOrStay(leave);

             break;
        case 2: 
                var amountToDeposit = prompt("Enter the number of amount your deposit?");

                amountToDeposit = parseInt(amountToDeposit);
                AccountNo2.balance += amountToDeposit;

                console.log("This Account Balance is\t\t\t"+AccountNo2.balance);

                var leave = prompt("Do you want to leave\n if so type yes");
        
                leaveOrStay(leave);

                break;
        case 3:
                var amountToDeposit = prompt("Enter the number of amount your deposit?");

                amountToDeposit = parseInt(amountToDeposit);
                AccountNo3.balance += amountToDeposit;
        
                console.log("This Account Balance is\t\t\t"+AccountNo3.balance);

                var leave = prompt("Do you want to leave\n if so type yes");
        
                leaveOrStay(leave);

                break;
        case 4: 
                
                var amountToDeposit = prompt("Enter the number of amount your deposit?");

                amountToDeposit = parseInt(amountToDeposit);
                AccountNo4.balance += amountToDeposit;

                console.log("This Account   balance is\t\t\t"+AccountNo4.balance);

                var leave = prompt("Do you want to leave\n if so type yes");
        
                leaveOrStay(leave);
                break;
        default:
            alert("Incorrect input please try again");
            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
            break;  
    }
      
    


        

    
}


function balance(){
    var accountToDeposit = prompt("Choose the account you want to see the balance \n 1 Account 1 \n2 Account 2\n3  Account 3\n4 Account4 ");
    accountToDeposit = parseInt(accountToDeposit);

    switch(accountToDeposit){
        case 1:
            alert(AccountNo1.balance);

            var leave = prompt("Do you want to leave\n if so type yes");
                    
            leaveOrStay(leave);
            break;
        case 2:
           alert(AccountNo2.balance);

            var leave = prompt("Do you want to leave\n if so type yes");
                    
            leaveOrStay(leave);
            break;

        case 3:
            alert(AccountNo3.balance);

            var leave = prompt("Do you want to leave\n if so type yes");
                    
            leaveOrStay(leave);
            break;
            
        case 4:
            alert(AccountNo4.balance);

            var leave = prompt("Do you want to leave\n if so type yes");
                    
            leaveOrStay(leave);
            break;

        default :
             alert("INCORRECT INPUT PLEASE TRY AGAIN");    

             var leave = prompt("Do you want to leave\n if so type yes");
                    
            leaveOrStay(leave);
            break

    }

}


function WithDrawal(){


    var accountToWithDrawal= prompt("Choose the account you are withdrawing from \n 1 Account 1 \n2 Account 2\n 3 Account 3\n4 Account4 ");

      accountToWithDrawal= parseInt(accountToWithDrawal);

      switch(accountToWithDrawal){
          case 1:
                
                var amountToWithDrawal = prompt("Enter your amount of withdrawal");
                amountToWithDrawal = parseInt(amountToWithDrawal);

                 if(AccountNo1.balance<=50){
                     console.log("INSUFFICIENT BALANCE  CAN NOT WITHDRAW");
                 }
                 else{
                    AccountNo1.balance -=amountToWithDrawal;

                    console.log("Your Balance is\t\t\t"+AccountNo1.balance);
                 }   
               


                var leave = prompt("Do you want to leave\n if so type yes");
                    
                    leaveOrStay(leave);
                    break;

          
          case 2:
                
                var amountToWithDrawal = prompt("Enter your amount of withdrawal");
                amountToWithDrawal = parseInt(amountToWithDrawal);

                if(AccountNo2.balance<=50){
                    console.log("INSUFFICIENT BALANCE  CAN NOT WITHDRAW");
                }
                else{
                   AccountNo2.balance -=amountToWithDrawal;

                   console.log("Your Balance is\t\t\t"+AccountNo2.balance);
                }   
              


                var leave = prompt("Do you want to leave\n if so type yes");
                    
                    leaveOrStay(leave);
                    break;          
       
          case 3:
                
                var amountToWithDrawal = prompt("Enter your amount of withdrawal");
                amountToWithDrawal = parseInt(amountToWithDrawal);

                if(AccountNo3.balance<=50){
                    console.log("INSUFFICIENT BALANCE  CAN NOT WITHDRAW");
                }
                else{
                   AccountNo3.balance -=amountToWithDrawal;

                   console.log("Your Balance is\t\t\t"+AccountNo3.balance);
                }   
              


                var leave = prompt("Do you want to leave\n if so type yes");
                    
                    leaveOrStay(leave);
                    break;         
         
          case 4:
                
                var amountToWithDrawal = prompt("Enter your amount of withdrawal");
                amountToWithDrawal = parseInt(amountToWithDrawal);

                if(AccountNo4.balance<=50){
                    console.log("INSUFFICIENT BALANCE  CAN NOT WITHDRAW");
                }
                else{
                   AccountNo4.balance -=amountToWithDrawal;

                   console.log("Your Balance is\t\t\t"+AccountNo4.balance);
                }   
              


                var leave = prompt("Do you want to leave\n if so type yes");
                    
                    leaveOrStay(leave);
                    break;               
      }
  
    
    
}




function Transfer(){

    var accountToTransfer = prompt("Enter the account number you are transferring to\n 1 Account 1 \n2 Account 2\n  3 Account 3\n4 Account4 ");

    accountToTransfer = parseInt(accountToTransfer)
    var ammountToTransfer = prompt("Enter the amount you want to tranfer");
    ammountToTransfer = parseInt(ammountToTransfer);


    switch(accountToTransfer){
        case 1:
            AccountNo1.balance += ammountToTransfer;

            console.log('Account no 1 Balance is'+AccountNo1.balance);
            var leave = prompt("Do you want to leave\n if so type yes");

        
            leaveOrStay(leave);
            break;
       case 2:
            AccountNo2.balance += ammountToTransfer;
            console.log('Account no 2 Balance is'+AccountNo2.balance);


            var leave = prompt("Do you want to leave\n if so type yes");

        
           leaveOrStay(leave);

            break;
        case 3:
            AccountNo3.balance += ammountToTransfer;
            console.log('Account no 3 Balance is'+AccountNo3.balance);


            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
            break;
         case 4:
             
            AccountNo4.balance += ammountToTransfer;

            console.log('Account no 4 Balance is'+AccountNo4.balance);


            var leave = prompt("Do you want to leave\n if so type yes");
        
            leaveOrStay(leave);
            break;
                  
                   
         default:
             console.log("INCORRECT INFORMATION PLEASE TRY AGAIN")  ;

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








(
    function main(){
        var operation = prompt("PLEASE CHOOSE YOUR OPERATION\n 1 TO DEPOSIT \n 2 TO WITHDRAWAL\n 3 TO Balance\n 4 TO TRANSFER");
    
        operation = parseInt(operation);
        switch(operation){
            case 1:
                Deposit();
                break;
            case 2:
                WithDrawal();
                break;
            case 3:
                balance();
            case 4:
                Transfer();
            default:
                break;    
        }
    
    
    
    }
)();