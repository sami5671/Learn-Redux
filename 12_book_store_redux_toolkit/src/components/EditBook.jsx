import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../features/api/apiSlice";
import EditBookForm from "./EditBookForm";

const EditBook = () => {
  const { bookId } = useParams();

  const { data: book, isLoading, isError } = useGetBookQuery(bookId);
  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = "error occurred";
  }
  if (!isLoading && !isError && book?.id) {
    content = <EditBookForm book={book} />;
  }

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
      {content}
    </div>
  );
};

export default EditBook;
