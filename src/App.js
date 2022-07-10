import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import "./App.scss";

import Routes from "./routes";

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Routes />
    </Router>
  </Suspense>
);

export default App;
