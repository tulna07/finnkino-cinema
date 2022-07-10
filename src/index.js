import ReactDOM from "react-dom/client";
import configureStore from "./redux";
import { Provider } from "react-redux";

// Components
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";

// Style
// import style from "./scss/style.scss";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </Provider>,
);
