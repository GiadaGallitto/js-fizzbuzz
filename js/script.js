const fizzElement = "Fizz";

const buzzElement = "Buzz";

const fizzBuzzElement = "FizzBuzz";

const containerElement = document.getElementById("container");

for (let index = 1; index <= 100; index++ ) {
    let element = index;

    containerElement.append(
        <div class="box">
            <h3>
                ${index}
            </h3>
        </div>);

    if(index % 15 === 0){
        element = fizzBuzzElement;

    } else if(index % 5 === 0){
        element = buzzElement;

    } else if(index % 3 === 0){
        element = fizzElement;
    }

    console.log(element)
}
