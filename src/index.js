import ReactDOM from "react-dom/client";

// Redux config
import { Provider } from "react-redux";
import configureStore from "@/store";

//React Slick config
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import App from "@/App";
import GlobalStyles from "@/components/GlobalStyles";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </Provider>,
);
