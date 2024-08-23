import AddNewBook from "./components/AddNewBook";
import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import NavButton from "./components/NavButton";

function App() {
  return (
    <>
      <body>
        {/* <nav className="py-4 2xl:px-6">
          <div className="container flex items-center justify-between">
            <img
              src="./images/logo.svg"
              width="150px"
              className="object-contain"
            />

            <ul className="hidden md:flex items-center space-x-6">
              <li className="font-semibold cursor-pointer">Book Store</li>
              <li className="cursor-pointer">Wishlist</li>
              <li className="cursor-pointer">My Collection</li>
            </ul>

            <form className="flex items-center">
              <div className="group relative rounded-md bg-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
                <input
                  type="text"
                  placeholder="Filter books..."
                  className="search"
                  id="lws-searchBook"
                />
              </div>
            </form>
          </div>
        </nav> */}
        <Navbar />
        <main className="py-12 2xl:px-6">
          <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <div className="order-2 xl:-order-1">
              <NavButton />
              <div className="lws-bookContainer">
                {/* <!-- Card 1 --> */}
                <BookCard />
              </div>
            </div>
            <div>
              <AddNewBook />
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
