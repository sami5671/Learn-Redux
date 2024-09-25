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

export const loadBooks = (books) => {
  return {
    type: LOADED_BOOK,
    payload: books,
  };
};

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const updateBook = (book) => {
  return {
    type: UPDATE_BOOK,
    payload: book,
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};

export const allBooks = () => {
  return {
    type: ALL_BOOKS,
  };
};

export const featureBooks = () => {
  return {
    type: FEATURED_BOOKS,
  };
};

export const searchBooks = (query) => {
  return {
    type: SEARCH_BOOKS,
    payload: query,
  };
};

export const setEditBook = (book) => {
  return {
    type: SET_EDIT_BOOK,
    payload: book,
  };
};
