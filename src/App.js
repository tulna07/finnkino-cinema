import { Suspense } from "react";

// Routes config
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@/routes";

// Components
import Loader from "@/components/Loader";

const App = () => (
  <Suspense fallback={<Loader />}>
    <Router>
      <Routes />
    </Router>
  </Suspense>
);

export default App;
