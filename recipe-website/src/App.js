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
import Tutorials from './components/TutorialPage';
import Tutorial1 from './components/Tutorial-1';
import Tutorial2 from './components/Tutorial-2';
import Tutorial3 from './components/Tutorial-3';
import Tutorial4 from './components/Tutorial-4';
import Tutorial5 from './components/Tutorial-5';
import Tutorial6 from './components/Tutorial-6';
import Tutorial7 from './components/Tutorial-7';
import Tutorial8 from './components/Tutorial-8';


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
    <Route path="/TutorialPage" element={<Tutorials />} />
    <Route path="/Tutorial-1" element={<Tutorial1 />} />
    <Route path="/Tutorial-2" element={<Tutorial2 />} />
    <Route path="/Tutorial-3" element={<Tutorial3 />} />
    <Route path="/Tutorial-4" element={<Tutorial4 />} />
    <Route path="/Tutorial-5" element={<Tutorial5 />} />
    <Route path="/Tutorial-6" element={<Tutorial6 />} />
    <Route path="/Tutorial-7" element={<Tutorial7 />} />
    <Route path="/Tutorial-8" element={<Tutorial8 />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
