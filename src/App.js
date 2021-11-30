import './App.css';
import Navigation from './components/navigation/Navigation';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
