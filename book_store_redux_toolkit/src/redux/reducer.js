import {
  ADD_BOOK,
  ALL_BOOKS,
  DELETE_BOOK,
  FEATURED_BOOKS,
  LOADED_BOOK,
  SEARCH_BOOKS,
  SET_EDIT_BOOK,
  UPDATE_BOOK,
} from "./actionTypes";

const initialState = {
  books: [],
  allBooks: [],
  editBook: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_BOOK:
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload,
      };

    case ADD_BOOK: {
      const newBookList = [...state.books, action.payload];
      return {
        ...state,
        books: newBookList,
        allBooks: newBookList,
      };
    }
    case UPDATE_BOOK: {
      const findBookIndex = state.allBooks.findIndex(
        (book) => book.id === action.payload.id
      );

      const updatedBookList = [
        ...state.books.slice(0, findBookIndex),
        action.payload,
        ...state.books.slice(findBookIndex + 1),
      ];
      return {
        ...state,
        books: updatedBookList,
        allBooks: updatedBookList,
      };
    }
    case DELETE_BOOK: {
      const filterBooks = state.books.filter(
        (book) => book.id !== action.payload
      );
      return {
        books: filterBooks,
        allBooks: filterBooks,
      };
    }

    case ALL_BOOKS:
      return {
        ...state,
        books: state.allBooks,
      };

    case FEATURED_BOOKS:
      return {
        ...state,
        books: state.allBooks.filter((book) => book.featured),
      };
    case SEARCH_BOOKS: {
      const filteredBooks = state.allBooks.filter((book) =>
        book.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        books: filteredBooks,
      };
    }
    case SET_EDIT_BOOK:
      return {
        ...state,
        editBook: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
