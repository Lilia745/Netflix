import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home/pages';
import MoviePage from './Pages/MoviePages/pages';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
          <main className="main-content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movie/:id" element={<MoviePage/>} />
              </Routes>
          </main>
        <Footer />
    </Router>
  );
}

export default App;
