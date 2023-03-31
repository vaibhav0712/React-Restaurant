import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import Search from './pages/Search';
import Navigation from './components/Navigation';
import RecipeInfo from './pages/Recipe';
import { bookmarkActions } from './store';
import { useSelector } from 'react-redux';
import BookMark from './pages/Bookmark';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.bookmark.savedBookmarks);

  useEffect(() => {
    const storedData = localStorage.getItem('bk');
    if (storedData) {
      console.log('show ==> ', JSON.parse(storedData));
      dispatch(bookmarkActions.replaceBookmark(JSON.parse(storedData)));
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bk', JSON.stringify(current));
  }, [current]);

  console.log(current);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="cuisine/:type" element={<Cuisine />} />
        <Route path="recipe/:id" element={<RecipeInfo />} />
        <Route path="bookmark" element={<BookMark />} />
      </Route>
    </Routes>
  );
}

export default App;
