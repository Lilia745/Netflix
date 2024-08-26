import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import MoviePage from './Pages/MoviePages/pages';
import Footer from './Components/Footer';
import Home from './Pages/Home/pages';
import Error from './Components/Error';

function App() {
  return (
    <Router>
      <Header />
          <main className="main-content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movie/:id" element={<MoviePage/>} />
                  <Route path='*' element={<Error/>}/>
              </Routes>
          </main>
        <Footer />
    </Router>
  );
}

export default App;
