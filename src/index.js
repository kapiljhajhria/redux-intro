import { compose, pipe } from "lodash/fp";

let input = "  JavaScript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();

const wrapInDiv = (str) => "<div>" + str + "</div>";
const wrapInSpan = (str) => "<span>" + str + "</span>";
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = compose(wrapInDiv, toLowerCase, trim);
const transform2 = pipe(trim, toLowerCase, wrap("span"));

const result = wrapInDiv(toLowerCase(trim(input)));
// console.log(transform(input));
console.log(transform2(input));
console.log("hahahaha");
