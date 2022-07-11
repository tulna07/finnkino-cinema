import { Suspense } from "react";
import "./App.scss";

import Routes from "./routes";

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes />
  </Suspense>
);

export default App;
