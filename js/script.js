const fizzElement = "Fizz";

const buzzElement = "Buzz";

const fizzBuzzElement = "FizzBuzz"

for (let index = 1; index <= 100; index++ ) {
    let element = index;

    if(index % 15 === 0){
        element = fizzBuzzElement;

    } else if(index % 5 === 0){
        element = buzzElement;

    } else if(index % 3 === 0){
        element = fizzElement;
    }

    console.log(element)
}