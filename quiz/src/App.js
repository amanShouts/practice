import { Quiz } from './pages/Quiz';
import './App.css';
import { Navbar } from './pages/Navbar';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:index" element={<Quiz />} />
      </Routes>
    </div >
  );
}

export default App;
