import { Provider } from "react-redux";
import Form from "./components/Form/Form";
import "./index.css";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <body>
          <header id="header">
            <div className="container">
              <img src="/src/img/lws-logo.svg" alt="logo" className="logo" />
              <div className="flex items-center">
                <a className="text-white min-w-[50px] font-medium" href="#">
                  Home
                </a>
                <button className="log-btn btn">Login</button>
              </div>
            </div>
          </header>
          <section>
            {/* <!-- Input Data --> */}
            <Form />
          </section>
        </body>
      </Provider>
    </>
  );
}

export default App;
