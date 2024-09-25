import { addBook } from "../actions";

const AddBookThunk = (bookDetails) => {
  const { name, author, price, rating, thumbnail, featured } = bookDetails;
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        author: author,
        price: price,
        rating: rating,
        thumbnail: thumbnail,
        featured: featured,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const book = await response.json();

    dispatch(addBook(book));
  };
};

export default AddBookThunk;
