import "./App.css";
import AddProductForm from "./components/AddProductForm";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <body>
        {/* <!-- Navbar --> */}
        <Navbar />
        {/* <!-- Navbar ends --> */}
        <main className="py-16">
          <div className="productWrapper">
            {/* <!-- products container --> */}

            <div className="productContainer" id="lws-productContainer">
              <ProductCard />
            </div>
            {/* <!-- products container ends --> */}
            <div>
              {/* <!-- Product Input Form --> */}
              <AddProductForm />
              {/* <!-- Product Input Form Ends --> */}
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
