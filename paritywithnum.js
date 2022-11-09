function parity(){
    let x = Number(prompt("What number would you like to check the parity for?"))
    for(let i = 1; i <= x; i++){
        if(i % 2 === 0){
            console.log(`${i} is even`)}
        else if(i % 3 === 0){
            console.log(`${i} is odd`)}
        else{
            console.log(`${i}`)}}}