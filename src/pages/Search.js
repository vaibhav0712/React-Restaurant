import RenderList from '../layout/RenderList';
import { useLocation } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const query = location.pathname.split('/')[2];

  return <RenderList query={query} resultTitle={'Result of ' + query} />;
}
export default Search;
