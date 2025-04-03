import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { ApisPage } from "./pages/ApisPage";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Routes>
          <R  path="/Api" element={<ApisPage/>} />
        </Routes>

        <div className="last-part-footer">
          <Footer className="footer" />
        </div>
      </Container>
    </Router>
  );
}

export default App;
