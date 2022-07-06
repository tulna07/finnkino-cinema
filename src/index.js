import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import App from "./App";

// Style
import style from "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>,
);
