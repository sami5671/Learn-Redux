import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import AddBookThunk from "../redux/thunk/AddBookThunk";
import UpdateBookThunk from "../redux/thunk/UpdateBookThunk";

const AddOrUpdateBook = () => {
  const dispatch = useDispatch();
  const editBook = useSelector((state) => state.editBook);

  const [formState, setFormState] = useState({
    name: "",
    author: "",
    price: "",
    rating: 0,
    thumbnail: "",
    featured: false,
  });

  // Update form state when editBook changes
  useEffect(() => {
    if (editBook) {
      setFormState(editBook);
    } else {
      setFormState({
        name: "",
        author: "",
        price: "",
        rating: 0,
        thumbnail: "",
        featured: false,
      });
    }
  }, [editBook]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editBook) {
      dispatch(UpdateBookThunk(formState));
      toast.success(`${formState.name} updated successfully`);
    } else {
      dispatch(AddBookThunk(formState));
      toast.success(`${formState.name} added successfully`);
    }

    setFormState({
      name: "",
      author: "",
      price: "",
      rating: 0,
      thumbnail: "",
      featured: false,
    });
  };

  console.log(formState);
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">
        {editBook ? "Update Book" : "Add New Book"}
      </h4>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="author">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={formState.author}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="thumbnail">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={formState.thumbnail}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={formState.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="rating">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={formState.rating}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={formState.featured}
            onChange={handleInputChange}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {editBook ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddOrUpdateBook;
