import ReactDOM from "react-dom/client";

// i18next translation
import "./i18n";

// Redux config
import { Provider } from "react-redux";
import configureStore from "@/store";

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
