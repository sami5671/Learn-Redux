import { updateBook } from "../actions";

const updateBookThunk = (book) => {
  const { id, name, author, thumbnail, price, rating, featured } = book;
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        name: name,
        author: author,
        thumbnail: thumbnail,
        price: price,
        rating: rating,
        featured: featured,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const book = await response.json();

    dispatch(updateBook(book));
  };
};

export default updateBookThunk;
