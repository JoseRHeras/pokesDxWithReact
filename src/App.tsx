// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import HomePage from "./components/HomePage";

// Components
import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<Pokemon />} />
      </Routes>

      <GlobalStyle />
    </Router>
  </>
);

export default App;

