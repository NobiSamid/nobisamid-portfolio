import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import ProjectsPage from './components/projects/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
