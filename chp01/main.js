const invoices = require('./invoices.json');
const plays = require('./plays.json');
const statement = require("./statement");

const result = statement(invoices[0], plays);
console.log(result);