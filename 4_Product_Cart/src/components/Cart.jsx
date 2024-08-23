import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartItem,
  deleteCartItem,
  incrementCartItem,
} from "../redux/productAdd/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.products.cart);

  const totalPrice = cartItem.reduce((sum, item) => {
    return sum + parseInt(item.price);
  }, 0);

  const handleDeleteCartItem = (id) => {
    dispatch(deleteCartItem(id));
  };

  const handleIncrementItem = (id) => {
    dispatch(incrementCartItem(id));
  };
  const handleDecrementItem = (id) => {
    dispatch(decrementCartItem(id));
  };
  return (
    <>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {/* <!-- Cart Item --> */}
              {cartItem?.map((item) => (
                <div key={item?.productId} className="cartCard">
                  <div className="flex items-center col-span-6 space-x-6">
                    {/* <!-- cart image --> */}
                    <img
                      className="lws-cartImage"
                      src={item?.image}
                      alt="product"
                    />
                    {/* <!-- cart item info --> */}
                    <div className="space-y-2">
                      <h4 className="lws-cartName">{item?.productName}</h4>
                      <p className="lws-cartCategory">Men's clothing</p>
                      <p>
                        BDT <span className="lws-cartPrice">{item?.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* <!-- amount buttons --> */}
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleIncrementItem(item?.productId)}
                        className="lws-incrementQuantity"
                      >
                        <i className="text-lg fa-solid fa-plus"></i>
                      </button>
                      <span className="lws-cartQuantity">
                        {item?.productQuantity}
                      </span>
                      {item?.productQuantity > 1 ? (
                        <button
                          onClick={() => handleDecrementItem(item?.productId)}
                          className="lws-decrementQuantity"
                        >
                          <i className="text-lg fa-solid fa-minus"></i>
                        </button>
                      ) : (
                        <button disabled className="lws-decrementQuantity">
                          <i className="text-lg fa-solid fa-minus"></i>
                        </button>
                      )}
                    </div>
                    {/* <!-- price --> */}
                    <p className="text-lg font-bold">
                      BDT{" "}
                      <span className="lws-calculatedPrice">{item?.price}</span>
                    </p>
                  </div>
                  {/* <!-- delete button --> */}
                  <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button
                      onClick={() => handleDeleteCartItem(item?.productId)}
                      className="lws-removeFromCart"
                    >
                      <i className="text-lg text-red-600 fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
              {/* <!-- Cart Items Ends --> */}
            </div>

            {/* <!-- Bill Details --> */}
            <div>
              <div className="billDetailsCard">
                <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                  Bill Details
                </h4>
                <div className="space-y-4">
                  {/* <!-- sub total --> */}
                  <div className="flex items-center justify-between">
                    <p>Sub Total</p>
                    <p>
                      BDT <span className="lws-subtotal">{totalPrice}</span>
                    </p>
                  </div>
                  {/* <!-- Discount --> */}
                  <div className="flex items-center justify-between">
                    <p>Discount</p>
                    <p>
                      BDT <span className="lws-discount">0</span>
                    </p>
                  </div>
                  {/* <!-- VAT --> */}
                  <div className="flex items-center justify-between">
                    <p>VAT</p>
                    <p>
                      BDT <span className="vat">0</span>
                    </p>
                  </div>
                  {/* <!-- Total --> */}
                  <div className="flex items-center justify-between pb-4">
                    <p className="font-bold">TOTAL</p>
                    <p className="font-bold">
                      BDT <span className="lws-total">{totalPrice}</span>
                    </p>
                  </div>
                  <button className="placeOrderbtn">place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
