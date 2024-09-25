import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../features/api/apiSlice";
import BookCard from "./BookCard";

const AllBookLists = () => {
  const { filter } = useSelector((state) => state.filter);
  const { search } = useSelector((state) => state.search);

  // Fetch books using RTK Query
  const { data: books, isError, isLoading, isSuccess } = useGetBooksQuery();

  let content = null;

  // Show loading message while fetching data
  if (isLoading) {
    content = <p>Loading books...</p>;
  }
  // Handle error state
  else if (isError) {
    content = <p>Error fetching books.</p>;
  }
  // Handle success and filtering
  else if (isSuccess && books?.length > 0) {
    const SearchAndFilterBooks = books.filter((book) => {
      const matchedFilter =
        filter === "all" || (filter === "featured" && book.featured);
      const matchedSearch = book?.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchedFilter || matchedSearch;
    });

    if (SearchAndFilterBooks.length > 0) {
      content = SearchAndFilterBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ));
    } else if (!filter || !search) {
      content = books.map((book) => <BookCard key={book.id} book={book} />);
    } else {
      // If no books match the filter and search criteria
      content = <p>No books found.</p>;
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">{content}</div>
    </div>
  );
};

export default AllBookLists;
