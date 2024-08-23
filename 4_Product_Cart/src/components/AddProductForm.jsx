import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productAdd/actions";

const AddProductForm = () => {
  const dispatch = useDispatch();
  //   =================================================================

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const productDetails = {
      productId: Math.random(),
      productName: form.productName.value,
      category: form.category.value,
      image: form.imageUrl.value,
      price: form.price.value,
      quantity: form.quantity.value,
    };
    console.log(productDetails);
    dispatch(addProduct(productDetails));
    toast.success(`${productDetails.productName} added successfully`);
    // toast.success("added successfully");
  };
  //   =================================================================
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={handleAddProduct}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="productName"
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            name="imageUrl"
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              name="price"
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              name="quantity"
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
