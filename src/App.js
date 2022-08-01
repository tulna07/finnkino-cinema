import { Suspense } from "react";

// Routes config
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@/routes";

//Datepicker
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

// Components
import Loader from "@/components/Loader";

const App = () => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  </LocalizationProvider>
);

export default App;
