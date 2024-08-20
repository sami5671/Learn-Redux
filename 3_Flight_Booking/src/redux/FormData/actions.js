import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

export const addBooking = (bookingData) => {
  //   console.log(bookingData);
  return {
    type: ADD_BOOKING,
    payload: bookingData,
  };
};

export const deleteBooking = (id) => {
  //   console.log(bookingData);
  return {
    type: DELETE_BOOKING,
    payload: id,
  };
};
