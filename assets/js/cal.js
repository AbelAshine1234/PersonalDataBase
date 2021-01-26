var number1;
var number2;


function add(number1,number2){
    console.log('ADDITION');
    console.log(number1+number2);

}
function sub(number1,number2){
    console.log('SUBTRACTION');
    console.log(number1-number2);

}
function mul(number1,number2){
    console.log('MULTIPLICATION');
    console.log(number1*number2);

}
function div(number1,number2){
    console.log('DIVISION');
    console.log(number1/number2);

}
function max(number1,number2){
    console.log('MAXIMUM');
    var max = number1;
    if(number2>number1){
        max =number2
    }
    console.log(max);


}
function min(number1,number2){
    console.log('SUBTRACTION');

    var min = number1;
    if(number2<number1){
        max =number2
    }
    console.log(max);
     

}
function avg(number1,number2){
    console.log('AVERAGE');
    console.log((number1/number2)/2);

}
 
function remainder(number1,number2){
    console.log('REMAINDER');
    console.log(number1%number2);

}


function main(){

    number1 =  prompt("Please Enter number one");
    number2 =  prompt("Please Enter number two");
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

}
main();