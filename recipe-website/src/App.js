import './App.css'
import Home from './components/Home';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Result from './components/ResultPage';
import One from './components/Recipe-1';
import Two from './components/Recipe-2';
import Three from './components/Recipe-3';
import Four from './components/Recipe-4';
import Five from './components/Recipe-5';
import Book from './components/RecipeBook';
import Breakfast from './components/Chapter-Breakfast';
import Veggies from './components/Chapter-Vegetables';
import Appetizers from './components/Chapter-Appetizers';


function App() {


  return (
    <>
   
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ResultPage" element={<Result />} />
    <Route path="/Recipe-1" element={<One />} />
    <Route path="/Recipe-2" element={<Two />} />
    <Route path="/Recipe-3" element={<Three />} />
    <Route path="/Recipe-4" element={<Four />} />
    <Route path="/Recipe-5" element={<Five />} />
    <Route path="/RecipeBook" element={<Book />} />
    <Route path="/Chapter-Breakfast" element={<Breakfast />} />
    <Route path="/Chapter-Vegetables" element={<Veggies />} />
    <Route path="/Chapter-Appetizers" element={<Appetizers />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
