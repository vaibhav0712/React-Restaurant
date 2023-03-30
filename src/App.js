import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import Search from './pages/Search';
import Navigation from './components/Navigation';
import RecipeInfo from './pages/Recipe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="cuisine/:type" element={<Cuisine />} />
        <Route path="recipe/:id" element={<RecipeInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
