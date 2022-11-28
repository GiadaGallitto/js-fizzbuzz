const fizzElement = "Fizz";

const buzzElement = "Buzz";

const fizzBuzzElement = "FizzBuzz";

const containerElement = document.getElementById("container");

for (let index = 1; index <= 100; index++ ) {
    let element = index;

    const divElement = document.createElement("div");
    
    if(index % 15 === 0){
        element = fizzBuzzElement;
        divElement.classList.add("box", "green-fb");
        divElement.append(fizzBuzzElement);
        
    } else if(index % 5 === 0){
        element = buzzElement;
        divElement.classList.add("box", "blue-buzz");
        divElement.append(buzzElement);
        
    } else if(index % 3 === 0){
        element = fizzElement;
        divElement.classList.add("box", "red-fizz");
        divElement.append(fizzElement);
    } else{
        // Ho creato un else solo per il caso in cui index non sia divisibile per gli altri tre valori, dando anche a questo
        // delle caratteristiche e ho usato append per mettere index (funziona solo se gli diamo un else a parte)
        divElement.classList.add("box", "orange-number");
        divElement.append(index);
    }
    
    containerElement.append(divElement);

    console.log(element);
}
