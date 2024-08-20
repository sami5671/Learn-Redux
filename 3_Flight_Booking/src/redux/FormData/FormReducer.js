import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

const initialState = {
  bookings: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case DELETE_BOOKING:
      return {
        ...state,
        bookings: [
          ...state.bookings.filter(
            (item) => item?.bookingId !== action.payload
          ),
        ],
      };

    default:
      return state;
  }
};

export default formReducer;
