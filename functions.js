// console.log (returnValue); // calling the (var) returnValue   return the undefined after hoisting the var key word 
 // console.log (returnValue); // calling the (let) returnValue   accur an exception becouse there is no hoisting with let can't display the variable before initialization
 // let returnValue  = printValues(1,2,3); // calling the function before the function declaration never accur and exxeption becouse the hoistiong moves the declaration to the top 
// var returnValue  = printValues(1,2,3); // calling the function before the function declaration never accur and exxeption becouse the hoistiong moves the declaration to the top 
// console.log(printValues(4,55,6));// calling the function then callint the fun and print the return array value 
// console.log(printValues(3,5)); // calling  the function  with few paramiters and print the return value will occur and undefined in the missing paramiter
// console.log (printValues(23,22,34,34,3,4))// calling the function with too much paramiters will ignore the over paramiters
// console.log(localVar);  // can't access the local var => not in the global scape , local var in local scope function
// console.log(testingVar);

function printValues(value1,value2,value3=3){// the solve of the problem undefined variable is passing  defualt paramiter to function
    let valuesArray = [value1,value2,value3];
    let localVar=3;
    let testingVar=5;
    console.log(localVar);  
    return valuesArray; 
}
let localVar=90;// var in globalscope
function getInput(){
let username,number1,number2;
while(!username)
{
   username= prompt("enter the user name");
}
while(isNaN(number1)||!number1)
{
  number1 =  prompt ("enter Number 1");
  console.log(number1);
}

while(isNaN(number2)||!number2){
    number2 = prompt("enter Number 2");
}

console.log (`The User Name : ${username} \n The Number 1 : ${number1} \n The Number 2 : ${number2}`);
}
 
