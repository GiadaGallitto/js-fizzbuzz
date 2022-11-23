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
    }
    
    containerElement.append(divElement);

    console.log(element);
}
