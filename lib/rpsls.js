//const or let?
export { rps }

let rpsChoices = ['rock', 'paper', 'scissors'];
let rpslsChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// this function takes in a list of choices and returns a randomly selected element from the given list
// taken from https://hackernoon.com/how-to-create-rock-paper-scissors-spock-lizard-in-javascript-991k36hy and modified by me
function getComputerChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function rpsResult(player, opp) {
    let res = ''
    if (player == opp) { res = 'tie'; }

    if ((player == 'rock' && opp == 'paper') || (player == 'paper' && opp == 'scissors') || (player == 'scissors' && opp == 'rock')) {
        res = 'lose';
    } else {
        res = 'win';
    }
    return res;
}


function rps(shot) {
    let rand = getComputerChoice(rpsChoices);
    if (shot == null) {
        return { player: rand };
    }
    else {
        shot = shot.toLowerCase();
        if (shot != 'rock' || shot != 'paper' || shot != 'scissors') {
            throw RangeError;
        }
        else { 
            
            let res = rpsResult(shot, rand);
        }
    }
    return {
        player: shot,
        opponent: rand,
        result: res
    }

        
    
    
}
function rpslsDefault() {
    return { player: getComputerChoice(rpslsChoices) }
}