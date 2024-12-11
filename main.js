// creare un ciclo for che esegue 100 cicli
for (let i = 1; i <= 100; i++) {
    // all'interno del for, creare una condizione if che calcola il resto %
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}