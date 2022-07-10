import { Suspense } from "react";

// Routes config
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@/routes";

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Routes />
    </Router>
  </Suspense>
);

export default App;
