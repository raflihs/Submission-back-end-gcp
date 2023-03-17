const {
  addBook,
  getAllBooks,
  getBooksById,
  putBookById,
  deleteBook,
  getBookByName
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: '/books/{bookId}',
    handler: getBooksById,
  },
  {
    method: "GET",
    path: "/books/{bookId}/{name}",
    handler: getBookByName
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: putBookById,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBook,
  },
];

module.exports = routes;
