import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import { useEffect } from "react";
import fetchBooks from "./../redux/thunk/FetchBooks";

const AllBookLists = () => {
  const allBookLists = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // console.log(allBookLists?.length);

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <>
      <div className="">
        {allBookLists?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default AllBookLists;
