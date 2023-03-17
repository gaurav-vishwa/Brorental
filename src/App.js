// import whois from 'whois-api';
import "./App.css";
import Navbar from "./components/Navbar";
import PreLoginFooter from "./components/PreLoginFooter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <PreLoginFooter />
      </Router>
    </>
  );
}

export default App;
