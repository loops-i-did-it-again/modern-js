import moment from "moment";
import { sqrt } from "mathjs";

let message = "Hello from JavaScript!";
console.log(message);

let datetime = moment().startOf("day").fromNow();
console.log(datetime);

console.log(sqrt(-4));

let name = "Bob";
let time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
