import invoices from './invoices.json' with {type: "json"};
import plays from './plays.json' with {type: "json"};
import statement from "./statement.js";

const result = statement(invoices[0], plays);
console.log(result);