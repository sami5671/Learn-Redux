import { useSelector } from "react-redux";
import lws from "../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state) => state.products.cart);

  return (
    <>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <Link to="/">
            {" "}
            <a>
              <img src={lws} alt="LWS" className="max-w-[140px]" />
            </a>
          </Link>

          <div className="flex gap-4">
            <a href="#home" className="navHome" id="lws-home">
              Home
            </a>
            <Link to="/cart">
              <a href="cart.html" className="navCart" id="lws-cart">
                <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="lws-totalCart">{cart.length}</span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
