//Rewrite the following function using a ternary and question mark operator.
//function checkAge(age) {
// if (age > 18) {
//    return true;
//  } else {
//    return confirm('Did parents allow you?');
//  }
//}



function checkAge(age){
    return(age > 18) ? true : confirm("Are you allowed to do this?");
}


function checkAge(age){
    return (age > 18) || confirm("Did your parents allow you?")}
