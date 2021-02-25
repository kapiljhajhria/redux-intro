//libraries to force immutabel
//immutable , Immer , Mori

import { Map } from "immutable";

let book = { title: "Harry Potter" };

let bookMap = Map({ title: "Harry Potter Map" });
function publish(book) {
  book.isPublished = true;
}

function publishBookMap(book) {
  return book.set("isPublished", true);
}

publish(book);
console.log(bookMap);
console.log(bookMap.get("title"));
bookMap = publishBookMap(bookMap);
console.log(bookMap.toJS());
