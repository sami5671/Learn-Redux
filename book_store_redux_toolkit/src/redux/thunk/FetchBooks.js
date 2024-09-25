import { loadBooks } from "../actions";

const fetchBooks = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  console.log(response);
  const books = await response.json();

  console.log(books);
  dispatch(loadBooks(books));
};

export default fetchBooks;
