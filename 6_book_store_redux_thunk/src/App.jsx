import AddOrUpdateBook from "./components/AddOrUpdateBook";
import AllBookLists from "./components/AllBookLists";
import Navbar from "./components/Navbar";
import NavButton from "./components/NavButton";

function App() {
  return (
    <>
      <body>
        <Navbar />
        <main className="py-12 2xl:px-6">
          <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <div className="order-2 xl:-order-1">
              <NavButton />
              <div className="lws-bookContainer">
                {/* <!-- Card 1 --> */}
                <AllBookLists />
              </div>
            </div>
            <div>
              <AddOrUpdateBook />
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
