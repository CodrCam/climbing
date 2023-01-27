// Intro function to get new user name
let user = prompt("Your name:", ",");

//function to ask if thier good and greet them
function UserGreeting() {
document.write("Hello " + user + " " );
if (confirm("Confirm you're have a good day?")) {
    document.write(",rightchous let's get on the ROCK!" + " ");
} 
else {
    document.write(" have a better time climbing. ");
}

document.write("My Name is Cam I'm stoked you showed up today " + user + ". ")
}
//Age question
function UserAge() {
    let userAge = prompt("Your Age:", " ");
    if (userAge > 16) {
        document.write("Awesome your old enough to climb." + " ");
    } 
    else if (userAge < 16) {
        document.write(" I'm sorry you're " + (16-userAge) + " years too young to climb");
    } 
    else if(userAge != Number) {
        document.write(" I'm not sure that's an age you gave me. ");
    }
}
// Num Guess function

let userNum =prompt("Pick a Number from 1-100: ", " ") 
function NumGuess(){  
i = 0
    while (i < userNum) {
        i++;
}
    document.write(" Your number was ", i);
}


UserGreeting();
UserAge();
NumGuess();