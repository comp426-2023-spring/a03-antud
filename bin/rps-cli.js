#!/usr/bin/env node

import { rps } from "../lib/rpsls.js";
import { rpsls } from "../lib/rpsls.js";
// import { rps } from 'node-rpsls'
// import { rpsls } from 'node-rpsls'
import minimist  from "minimist";

//get user input
const args = minimist(process.argv.slice(2));

//handle user input
if (args.h) {
    console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n');
    console.log('\n\t-h, --help      display this help message and exit\n\t-r, --rules     display the rules and exit\n');
    console.log('\nExamples:\n\tnode-rps        Return JSON with single player RPS result.\n\te.g. {"player":"rock"}');
    console.log('\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.\n\te.g {"player":"rock","opponent":"scissors","result":"win"}');
} else if(args.r) {
    console.log('Rules for Rock Paper Scissors:\n');
    console.log('\t- Scissors CUTS Paper\n\t- Paper COVERS Rock\n\t- Rock CRUSHES Scissors');
}

