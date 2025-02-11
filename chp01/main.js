import invoices from './invoices.json' with {type: "json"};
import plays from './plays.json' with {type: "json"};
import {statement, htmlStatement} from "./statement.js";

const result = statement(invoices[0], plays);
console.log(result);
console.log("================");
console.log(htmlStatement(invoices[0], plays));