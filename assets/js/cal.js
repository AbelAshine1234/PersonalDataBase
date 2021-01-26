var number1;
var number2;


function add(){
    var noWantToAdd = prompt("How many numbers do you want to add");
    let myarray = [];
    for (let index = 0; index < noWantToAdd; index++) {
         
        var toPush = prompt("Enter Number ");
        toPush = parseInt(toPush);
        myarray.push(toPush);
            
    }
    console.log('ADDITION');
       var sum =0;
    myarray.forEach(
          function(number){
                  sum += number;  

          }
       );
       console.log(sum)

}
function sub(number1,number2){
    console.log('SUBTRACTION');
    number1 =  prompt("Please Enter number one");
    number2 =  prompt("Please Enter number two");
    console.log(number1-number2);

}
function mul(number1,number2){
    console.log('MULTIPLICATION');
    number1 =  prompt("Please Enter number one");
    number2 =  prompt("Please Enter number two");
    console.log(number1*number2);

}
function div(number1,number2){
    console.log('DIVISION');
    var noWantToDiv = prompt("How many numbers do you want to div");
    let myarray = [];
    for (let index = 0; index < noWantToDiv; index++) {
         
        var toPush = prompt("Enter Number ");
        toPush = parseInt(toPush);
        myarray.push(toPush);
            
    }
       var div=1;
    myarray.forEach(
          function(number){
                  
            if(div<0){
                console.log("SOORY WE CAN  NOT DIVIDE THIS NUMBER")
            }
            else{
                div = number/div;
            }

          }
       );
       console.log(div)

}
function max(number1,number2){
    console.log('MAXIMUM');
    number1 =  prompt("Please Enter number one");
    number2 =  prompt("Please Enter number two");
    var max = number1;
    if(number2>number1){
        max =number2
    }
    console.log(max);


}
function min(number1,number2){
    console.log('SUBTRACTION');
    number1 =  prompt("Please Enter number one");
    number2 =  prompt("Please Enter number two");

    var min = number1;
    if(number2<number1){
        max =number2
    }
    console.log(max);
     

}
function avg(number1,number2){
    console.log('AVERAGE');
    console.log((number1/number2)/2);
    number1 =  prompt("Please Enter number one");
    number2 =  prompt("Please Enter number two");

}
 
function remainder(number1,number2){
    console.log('REMAINDER');
    console.log(number1%number2);
    number1 =  prompt("Please Enter number one");
    number2 =  prompt("Please Enter number two");

}


(function main(){

  
    operation = prompt("Choose Operation\n 1 -- ADD \n 2 --  SUB \n 3 -- MUL \n 4 -- DIV"+
      "\n 5-- MAX\n6 --MIN \n 7-- AVG \n 8 --REMAINDER")

      number1 = parseInt(number1);
      number2 = parseInt(number2);
      operation = parseInt(operation);


    switch(operation){
        case  1 :
            add(number1,number2);
            break;
        case  2 :
            sub(number1,number2);
            break;
        case  3 :
            mul(number1,number2);
            break;
        
        case  4 :
            div(number1,number2);
            break;
            
        case  6 :
            min(number1,number2);
            break;
            
        
        case  7 :
            avg(number1,number2);
            break;
        
        case  8 :
            remainder(number1,number2);
            break;
            
        default:
            console.log("INCORRECT INFORMATION PLEASE UPDATE AND RETRY YOUR INFORMATION");
            break;
    }

})();