import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/productAdd/actions";

const ProductCard = () => {
  const product = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      {product?.map((item) => (
        <div key={item?.productId} className="lws-productCard">
          <img className="lws-productImage" src={item?.image} alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{item?.productName}</h4>
            <p className="lws-productCategory">Mens Shirt</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">
                BDT <span className="lws-price">{item?.price}</span>
              </p>
              <p className="productQuantity">
                QTY <span className="lws-quantity">{item?.quantity}</span>
              </p>
            </div>
            {item?.quantity ? (
              <button
                onClick={() => addToCartHandler(item)}
                className="lws-btnAddToCart"
              >
                Add To Cart
              </button>
            ) : (
              <button disabled className="lws-btnAddToCart">
                Add To Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
