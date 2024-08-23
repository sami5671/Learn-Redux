import {
  ADD_PRODUCT,
  ADD_TO_CART,
  DECREMENT_CART_ITEM,
  DELETE_CART_PRODUCT,
  INCREMENT_CART_ITEM,
} from "./actionTypes";

const initialState = {
  products: [
    {
      productId: 1,
      productName: "Half Shirt Hawai AMR",
      category: "Hawai",
      image:
        "https://th.bing.com/th/id/OIP.losokJCBx8cYXm-NSto4mAAAAA?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      price: 10,
      quantity: 15,
    },
    {
      productId: 2,
      productName: "Half Shirt Hawai CSR",
      category: "Hawai",
      image:
        "https://th.bing.com/th/id/OIP.NoIax6KAHLaKFskugpeZXwHaI4?rs=1&pid=ImgDetMain",
      price: 20,
      quantity: 10,
    },
  ],
  cart: [],
};

const productAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_TO_CART: {
      const { productId } = action.payload;

      // product logic
      const updateProducts = state.products.map((product) =>
        product.productId === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      // cart logic
      const isCartIdExists = state.cart.find(
        (item) => item.productId === productId
      );

      const updateCart = isCartIdExists
        ? state.cart.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  productQuantity: item.productQuantity + 1,
                  price:
                    (item.price / item.productQuantity) *
                    (item.productQuantity + 1),
                }
              : item
          )
        : [...state.cart, action.payload];

      return {
        ...state,
        products: updateProducts,
        cart: updateCart,
      };
    }

    case INCREMENT_CART_ITEM: {
      const checkProductQuantityExists = state.products.filter(
        (product) => product.productId === action.payload
      );

      const updateProducts = state.products.map((product) =>
        product.productId === action.payload &&
        checkProductQuantityExists.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      const updateCart = state.cart.map((item) =>
        item.productId === action.payload &&
        checkProductQuantityExists.quantity > 0
          ? {
              ...item,
              productQuantity: item.productQuantity + 1,
              price:
                (item.price / item.productQuantity) *
                (item.productQuantity + 1),
            }
          : item
      );
      return {
        ...state,
        products: updateProducts,
        cart: updateCart,
      };
    }
    case DECREMENT_CART_ITEM: {
      const updateProducts = state.products.map((product) =>
        product.productId === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      const updateCart = state.cart.map((item) =>
        item.productId === action.payload
          ? {
              ...item,
              productQuantity: item.productQuantity - 1,
              price:
                (item.price / item.productQuantity) *
                (item.productQuantity - 1),
            }
          : item
      );
      return {
        ...state,
        products: updateProducts,
        cart: updateCart,
      };
    }
    case DELETE_CART_PRODUCT: {
      const findCart = state.cart.find(
        (item) => item.productId === action.payload
      );
      const cartItem = findCart.productQuantity;

      const updateProduct = state.products.map((product) =>
        product.productId === action.payload
          ? { ...product, quantity: product.quantity + cartItem }
          : product
      );

      return {
        ...state,
        products: updateProduct,
        cart: state.cart.filter((item) => item.productId !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default productAddReducer;
