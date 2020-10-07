var moment = require("moment");
var math = require("mathjs");

var message = "Hello from JavaScript!";
console.log(message);

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

console.log(math.sqrt(-4));
