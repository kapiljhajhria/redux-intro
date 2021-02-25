//libraries to force immutabel
//immutable , Immer , Mori

import { produce } from "immer";

let book = { title: "Harry Potter" };

// let bookMap = Map({ title: "Harry Potter Map" });
function publish(book) {
  // book.isPublished = true;
  return produce(book, (draftBook) => {
    draftBook.isPublished = "true";
  });
}

// function publishBookMap(book) {
//   return book.set("isPublished", true);
// }

const updated = publish(book);

// bookMap = publishBookMap(bookMap);
console.log(updated);
