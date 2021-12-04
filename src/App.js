import { BrowserRouter as Router } from "react-router-dom";

import LayoutWrapper from "./components/layouts/LayoutWrapper";

import "./App.scss";

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
