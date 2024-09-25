import { useState } from "react";
import { useEditBookMutation } from "../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

const EditBookForm = ({ book }) => {
  const navigate = useNavigate();
  const {
    id,
    name: initialName,
    author: initialAuthor,
    price: initialPrice,
    rating: initialRating,
    thumbnail: initialThumbnail,
    featured: initialFeatured,
  } = book;

  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [price, setPrice] = useState(initialPrice);
  const [rating, setRating] = useState(initialRating);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [featured, setFeatured] = useState(initialFeatured);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({
      id,
      data: {
        name,
        author,
        price,
        rating,
        thumbnail,
        featured,
      },
    });
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="author">Author</label>
          <input
            required
            className="text-input"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="thumbnail">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="rating">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          Update book
        </button>
      </form>
    </div>
  );
};

export default EditBookForm;
