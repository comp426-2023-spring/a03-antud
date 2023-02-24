//const or let?
export { rps, rpsls }

let rpsChoices = ['rock', 'paper', 'scissors'];
let rpslsChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// this function takes in a list of choices and returns a randomly selected element from the given list
// taken from https://hackernoon.com/how-to-create-rock-paper-scissors-spock-lizard-in-javascript-991k36hy and modified by me
function getComputerChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// the two functions below act as default conditions for returning a choice from the list of choices
function rpsDefault() {
    return { player: getComputerChoice(rpsChoices) }
}
function rpslsDefault() {
    return { player: getComputerChoice(rpslsChoices) }
}