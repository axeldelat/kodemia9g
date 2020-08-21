let userInput = prompt("Introduce un número para multiplicar")

let multiplier = userInput

//Multiplicador for...
function multiplicatorFor(multiplier) {
  console.log("Multiplicador usando for...")
  for(let i = 1 ; i <= 10 ; i++) {
    let mResult = multiplier * i 
    console.log(multiplier + " x " + i + " = " + mResult)
  }
} 

multiplicatorFor(userInput)



//Multiplicador - do...while
function multiplicatorDoWhile(multiplier) {
  console.log("Multiplicador usando do...while")
  i = 0
  do {
  i = i+1;
  let mResult = multiplier * i 
  console.log(multiplier + " x " + i + " = " + mResult)
  }
  while (i < 10); 
}

multiplicatorDoWhile(userInput)



// Multiplicador - while...
function multiplicatorWhile(multiplier) {
  console.log("Multiplicador usando while")
  let i = 0;
  while (i <= 10) {
    let mResult = multiplier * i 
    console.log(multiplier + " x " + i + " = " + mResult)
    i++
  }  
}

multiplicatorWhile(userInput)