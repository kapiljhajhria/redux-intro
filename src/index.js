import { compose, pipe } from "lodash/fp";

let input = "  JavaScript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();

const wrapInDiv = (str) => "<div>" + str + "</div>";

console.log(wrapInDiv(trim(input)));
