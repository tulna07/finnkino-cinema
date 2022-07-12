import ReactDOM from "react-dom/client";

// Redux config
import { Provider } from "react-redux";
import configureStore from "@/redux";

import rootReducer from "@/redux/reducer";
// Components
import App from "@/App";
import GlobalStyles from "@/components/GlobalStyles";

const store = configureStore();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </Provider>,
);
