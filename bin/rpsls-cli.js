#!/usr/bin/env node

import { rpsls } from "../lib/rpsls.js"
import minimist  from "minimist";

const args = minimist(process.argv.slice(2));

//handle user input
if (args.h) {
    console.log('Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n');
    console.log('\n\t-h, --help      display this help message and exit\n\t-r, --rules     display the rules and exit\n');
    console.log('\nExamples:\n\tnode-rpsls        Return JSON with single player RPSLS result.\n\te.g. {"player":"rock"}');
    console.log('\tnode-rpsls rock   Return JSON with results for RPS played against a simulated opponent.\n\te.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0);
} else if(args.r) {
    console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:\n');
    console.log('\t- Scissors CUTS Paper\n\t- Paper COVERS Rock\n\t- Rock SMOOSHES Lizard\n\t- Lizard POISONS Spock\n\t- Spock SMASHES Scissors\n\t- Scissors DECAPITATES Lizard\n\t- Lizard EATS Paper\n\t- Paper DISPROVES Spock\n\t- Spock VAPORIZES Rock\n\t- Rock CRUSHES Scissors');
    process.exit(0);
} else if (args._.length == 0) {
    console.log(JSON.stringify(rpsls()));
    process.exit(0);
}

let shot = args._[0];

try {
    console.log(JSON.stringify(rps(shot)));
} catch (RangeError) {
    console.log('Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n');
    console.log('\n\t-h, --help      display this help message and exit\n\t-r, --rules     display the rules and exit\n');
    console.log('\nExamples:\n\tnode-rpsls        Return JSON with single player RPSLS result.\n\te.g. {"player":"rock"}');
    console.log('\tnode-rpsls rock   Return JSON with results for RPS played against a simulated opponent.\n\te.g {"player":"rock","opponent":"Spock","result":"lose"}');

    console.log('\nRules for the Lizard-Spock Espansion of Rock Paper Scissors:\n');
    console.log('\t- Scissors CUTS Paper\n\t- Paper COVERS Rock\n\t- Rock SMOOSHES Lizard\n\t- Lizard POISONS Spock\n\t- Spock SMASHES Scissors\n\t- Scissors DECAPITATES Lizard\n\t- Lizard EATS Paper\n\t- Paper DISPROVES Spock\n\t- Spock VAPORIZES Rock\n\t- Rock CRUSHES Scissors');
} 
finally {
    process.exit(0);
}
